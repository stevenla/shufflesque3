all: css js

css:
	lessc less/shufflesque3.less > shufflesque3.css

js:
	coffee -c -j shufflesque3.js coffee/player.coffee

clean:
	rm *.css *.js