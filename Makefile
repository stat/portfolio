.PHONY: deploy
deploy:
	@npm run build
	# @mkdir -p ./build/assets/pdf
	# @cp \
	#   ./src/assets/pdf/chris-gerber-cv.pdf \
	#   ./build/assets/pdf
	@firebase deploy
