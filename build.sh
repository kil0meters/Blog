#!/bin/bash
rm -rf dist public

zola build
minify -r -a -o dist/ public/
cp -n -r public/* dist
