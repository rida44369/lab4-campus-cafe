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

## Bug log (Lab 4, Task 6)

| # | What was wrong (file and line) | Which tool showed it | My fix |
|---|---|---|---|
| 1 | debug/bugs.html: html tag had no lang attribute | Lighthouse, W3C Validator | Added lang="en" |
| 2 | debug/bugs.html: image had no alt attribute | Lighthouse, W3C Validator | Added descriptive alt text |
| 3 | debug/bugs.html: label for value did not match input ID | Lighthouse, W3C Validator | Changed label for to email |
| 4 | debug/bugs.html: h1 was followed by h4 | Accessibility tree, W3C Validator | Changed h4 to h2 |
| 5 | debug/bugs.html: stylesheet link pointed to wrong filename | Network tab | Changed link to bugs.css |
| 6 | debug/bugs.css: colour was not a valid CSS property | Styles pane | Changed colour to color |
| 7 | debug/bugs.css: missing semicolon after background value | Styles pane | Added semicolon |
| 8 | debug/bugs.css: selector .notes did not match HTML class note | Styles pane | Changed HTML class to notes |
| 9 | debug/bugs.html: navigation used a generic div | Accessibility tree | Replaced div with nav landmark |
| 10 | debug/bugs.css: note text had low contrast | Lighthouse | Changed text color to #666666 |