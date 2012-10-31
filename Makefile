all:
	rm -rf Shufflesque3.bowtie
	mkdir Shufflesque3.bowtie
	cp -R font index.html Info.plist jquery-1.8.2.min.js preview.png README.markdown shufflesque3.css shufflesque3.js Shufflesque3.bowtie

zip:
	zip -b Shufflesque3.bowtie Shufflesque3.bowtie.zip Shufflesque3.bowtie/*
	chmod +r Shufflesque3.bowtie.zip

clean:
	rm -rf Shufflesque3.bowtie
