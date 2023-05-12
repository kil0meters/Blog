#!/bin/bash
rm -rf dist public

zola build
minify -r -a -o dist/ public/
cp -n -r public/* dist

for file in $(find ./dist -name '*.xml' -or -name '*.css' -or -name '*.js' -or -name '*.html' -or -name '*.pdf')
do
    brotli -Z "$file"
    gzip --keep --best "$file"
done
