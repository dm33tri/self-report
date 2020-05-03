FRONT := frontend
BACK := backend
NGINX := nginx_dev

.PHONY: up-front

up-front:
	docker-compose build $(FRONT)
	docker-compose up $(FRONT)

.PHONY: up

up-front:
	docker-compose build $(NGINX)
	docker-compose up $(NGINX)
