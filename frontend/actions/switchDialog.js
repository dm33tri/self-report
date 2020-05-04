import store, { switchDialog } from '../store';

export default function switchDialogAction(dialog) {
    return store.dispatch(switchDialog(dialog));
}