 HTTP Observations (Lab 4, Task 1)

 1. Request Method
GET

 2. Status Code with Disable Cache Ticked
200

 3. Status Code on a Normal Reload
200

 4. Status Code for `/nothing-here.html`
404

 5. Content-Type Response Header
text/html

 6. Remote Address
127.0.0.1:5500

 7. Protocol
HTTP

 Why is this address HTTP and not HTTPS?

The website is running locally on my computer using Live Server. It uses HTTP for local testing and does not require HTTPS for this lab task.


## Specificity experiment

The #main p selector is more specific than .hero p, so its red color wins. When changed to main p, .hero p wins because a class selector has higher specificity than element selectors.

## Selectors I used

| Selector kind | Example from my CSS |
|---|---|
| Element | `body` |
| Class | `.card` |
| ID | `#main` |
| Grouping | `h1, h2, h3` |
| Descendant | `.nav-list a` |
| Child | `main > section` |
| Adjacent sibling | `h1 + p` |
| Compound | `a.active` |
| Attribute | `a[href^="http"]` |
| Pseudo-class | `a:hover` |
| Pseudo-element | `.menu-group h2::before` |