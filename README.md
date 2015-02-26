# email-blacklist [![Build Status](https://travis-ci.org/e-conomic/email-blacklist.svg?branch=master)](https://travis-ci.org/e-conomic/email-blacklist)

List of commonly misspelled email domains.

	npm install email-blacklist

## Usage

```javascript
var blacklist = require('email-blacklist');

blacklist.contains('me@gmailc.com'); // returns true
blacklist.contains('me@gmail.com'); // returns false
```

## License

[MIT](http://opensource.org/licenses/MIT)
