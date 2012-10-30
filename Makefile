all: css

css:
	lessc style/shufflesque.less > shufflesque.css

clean:
	rm *.css