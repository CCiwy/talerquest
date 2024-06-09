.EXPORT_ALL_VARIABLES:
ENV=local

ROOT_DIR ?= $(CURDIR)

# DEFINE FRONTEND DYNAMIC VARIABLES
FRONTEND_DIR := ${ROOT_DIR}/frontend
FRONTEND_BIN := cd ${FRONTEND_DIR} && /usr/bin/npm

ROOT_BIN := cd ${ROOT_DIR} && npm


# DEFINE BACKEND DYNAMIC VARIABLES
DJANGO_SETTINGS_MODULE ?= app.settings.${ENV}
BACKEND_DIR := ${ROOT_DIR}/backend
BACKEND_MANAGE := cd ${BACKEND_DIR} && python manage.py
BACKEND_PIPENV := cd ${BACKEND_DIR} && pipenv

PYTHONFAULTHANDLER := 1
PIPENV_VENV_IN_PROJECT :=1

VENV := ${BACKEND_DIR}/.venv
PATH := ${VENV}/bin:${ROOT_DIR}/node_modules/.bin:${PATH}


BACKEND_APP_DIR := ${BACKEND_DIR}/core
DJANGO_SETTINGS_DIR := ${BACKEND_APP_DIR}/settings
DJANGO_SETTINGS_MODULE := core.settings.${ENV}

install:
	@make backend/install
	@make frontend/install

frontend/install:
	@${FRONTEND_BIN} install 

frontend/install/%:
	@${FRONTEND_BIN} install *$ --save-dev

frontend/run:
	@${FRONTEND_BIN} run dev 


pipenv/%:
	@${BACKEND_PIPENV} $*


backend/install:
	@${BACKEND_PIPENV} install -d



backend/manage/%:
	@${BACKEND_MANAGE} *$

backend/shell:
	@${BACKEND_PIPENV} shell


backend/run:
	@${BACKEND_MANAGE} runserver 0.0.0.0:8000


backend/makemigrations:
	@${BACKEND_MANAGE} makemigrations

backend/migrate:
	@${BACKEND_MANAGE} migrate
