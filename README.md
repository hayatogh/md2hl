# Markdown to HTML w/ Code Highlight
## Sample Output
This README is rendered to ([README.html](./README.html))!
## Setup
```sh
npm install -g matsuhav/md2hl
```
Done!

## Usage
```sh
md2hl README.md >README.html
```
Done!

I recommend creating your own custom shell script (file is [md2hl.sh](./md2hl.sh))
```sh
#!/usr/bin/env bash
set -euo pipefail

md2hl "$1" >"${1%.md}.html"
```

## Sample Output
### Tasklists
- [x] Write script
- [x] Publish to GitHub
- [ ] Create shell script like Usage section

### C
```c
#include <stdio.h>

int main(void) {
	int x = 42;
	if (x != 42) {
		return 1
	}
	return 0;
}
```
### Scheme
```scheme
(define x 42)
(display ((lambda (x)
            (1+ x))
          x))
```
