# email-blacklist

List of commonly mispelled email domains.

## Usage

```javascript
var blacklist = require('email-blacklist');

blacklist.contains('me@gmailc.com'); // returns true
blacklist.contains('me@gmail.com'); // returns false
```
