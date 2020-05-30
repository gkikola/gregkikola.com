.PHONY: site serve clean

site :
	npx @11ty/eleventy
	npx prettier@2.0.5 _site/ --write

serve :
	npx @11ty/eleventy --serve

clean :
	rm -r _site/
