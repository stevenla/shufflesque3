all:
	rm -rf Shufflesque3.bowtie
	mkdir Shufflesque3.bowtie
	cp -R font *.html Info.plist *.png README.markdown *.css *.js Shufflesque3.bowtie

zip:
	zip -b Shufflesque3.bowtie Shufflesque3.bowtie.zip Shufflesque3.bowtie/*
	chmod +r Shufflesque3.bowtie.zip

clean:
	rm -rf Shufflesque3.bowtie
