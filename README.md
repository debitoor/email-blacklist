# email-blacklist

List of commonly mispelled email domains.

	npm install email-blacklist

## Usage

```javascript
var blacklist = require('email-blacklist');

blacklist.contains('me@gmailc.com'); // returns true
blacklist.contains('me@gmail.com'); // returns false
```

## License

[MIT](http://opensource.org/licenses/MIT)
