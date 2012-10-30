all: css js

css:
	lessc style/shufflesque3.less > style/shufflesque3.css

js:
	coffee -c -j script/shufflesque3.js script/player.coffee

clean:
	rm style/*.css script/*.js