SRC = index.js spec/aspir-spec.js

test: $(SRC)
	@node_modules/.bin/jshint $^
	@node_modules/.bin/istanbul cover node_modules/.bin/_mocha \
		-R spec -- \
		--reporter spec
