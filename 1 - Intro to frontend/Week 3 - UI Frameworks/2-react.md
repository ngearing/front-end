# Static vs Dynamic

Static is content that is sent just as they are stored on the web server.
Dynamic is content that changes depending on the user. Dynamic typical takes longer to load.
Web servers can use caching to help speed up dynamic content.
Caching involves storing a copy of a page or file so it doesn't need to be generated again when requested in the future. This reduces the amount of processing required by the server.

# Single page applications

Single Page Applications (SPA) is a single html page the gets updated dynamically as required. This save on bandwidth from less html documents.

# React

React is focused on creating modular components that are pieced together.
This allows us to write less code and build faster and with less maintainability.

## How React works

Reach has a 1 to 1 relationship with the browser.
React uses it's virtual DOM to measure and update the DOM only when needed.

## Component hierarchy

All react applications contain at least 1 Component the 'root' component.
