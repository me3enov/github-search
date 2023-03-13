install:
	npm ci

run:
	make install
	npm run dev

build:
	make install
	npm run build

deploy:
	npm run deploy

lint:
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format
