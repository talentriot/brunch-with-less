REPORTER=dot

default: test

test:
	mocha-phantomjs -R $(REPORTER) public/test/index.html


.PHONY: test develop
