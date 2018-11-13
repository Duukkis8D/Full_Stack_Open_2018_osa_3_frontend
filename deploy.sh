#!/bin/sh
npm run build
rm -rf ../osa_3/build
cp -r build/ ../osa_3/
