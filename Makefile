#полезна при первом клонировании репозитория
#удали старые зависимости и установи всё заново строго по package-lock.json
install:
	npm ci 

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run