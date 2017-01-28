.PHONY: all

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-24s\033[0m %s\n", $$1, $$2}'

.PHONY: download
download:  ## To backup DjangoCon US 2010
	@echo "The 2010 US website is broken :/ "

	@wayback_machine_downloader \
		http://www.djangocon.us/ \
		--directory . \
		--from 20100521055507 \
		--to 20101213193332
