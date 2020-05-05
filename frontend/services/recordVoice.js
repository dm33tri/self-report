export class VoiceRecorder {
    constructor() {
        this.chunks = [];
    }

    recordData = () => {
        this.analyser.getByteFrequencyData(this.loudness);
    }

    startRecording = async () => {
        this.stream = navigator.mediaDevices.getUserMedia({ audio: true });
        const stream = await this.stream;
        this.recorder = new MediaRecorder(stream);

        this.audioContext = new AudioContext();
        this.source = this.audioContext.createMediaStreamSource(stream);
        this.analyser = this.audioContext.createAnalyser();
        this.processor = this.audioContext.createScriptProcessor(2048, 1, 1); 
        this.source.connect(this.analyser);
        this.source.connect(this.processor);
        this.processor.connect(this.audioContext.destination); 
        this.analyser.fftSize = 32;
        this.loudness = new Uint8Array(this.analyser.frequencyBinCount);

        this.processor.addEventListener('audioprocess', this.recordData);

        if (this.recorder) {
            this.chunks = [];
            this.recorder.start();
            this.recorder.addEventListener('dataavailable', ({ data }) => this.chunks.push(data));
        }
    }

    stopRecording = async () => {
        const stream = await this.stream;

        return new Promise((resolve) => {
            this.recorder.addEventListener('stop', () => {
                const blob = new Blob(this.chunks,  { 'type': 'audio/ogg; codecs=opus' });
                resolve(blob);
            });

            stream.getTracks().forEach((track) => track.stop());
            this.loudness.fill(0);
            this.source.disconnect(this.processor);
            this.source.disconnect(this.analyser);
            this.processor.removeEventListener('audioprocess', this.recordData);
        });
    }
}

export default (process.browser ? new VoiceRecorder() : {});