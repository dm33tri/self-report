FRONT := frontend

.PHONY: up-front

up-front:
	docker-compose build $(FRONT)
	docker-compose up $(FRONT)
