# Introduction

## Course

## Frontend

## Backend

## Full-stack

## Introduce yourself...

# How the web works

## How the internet works

Device connect to network switch and switches connect to other switches creating an interconnected network aka the internet.

Servers provide the server, your computer is the client.

## What is a web server

A server runs applications and services. Stored in a data center. THey are all around the world.

A web server has many functions like storage, admin, data, security and email. It's primary function is to respond to web requests from the client.

## What is a websites/pages.

Webpage is document that display images and text.
A website is a collection of webpages.

## What is a web browser

An application on your computer that connects to a server via http to get some data and display it.

## Web hosting

A web host is a place where you put your website.

### Shared hosting

a server shared among other websites.

### VPS hosting

a virtual private server

### dedicated server

a hardware server dedicated just for you.

### Cloud hosting

Uses a combination of physical and virtual server.

# Internet Protocols

IP addresses are like the addresses for the postal service.
There are 2 version IPv4 IPv6
IPv4 address contains 4 octet separated by periods or dots. eg. 192.0.2.235.
IPv6 address contains 8 groups of hexadecimal digits separated by colons. eg. 4527:0a00:1567:0200:ff00:0042:8329.

An internet protocol contains the to IP address and the from IP address. As well as TCP - Transmission Control Protocol and UDP - User Datagram Protocol.
TCP is used to send data that must arrive correctly and in order.
UDP is used to send data that can tolerate data lost like video or voice calls.

# HTTP

Hypertext Transfer Protocol. It's how we communicate with a web server. A Request-response protocol.

A HTTP request consists of a method, path, version and headers.
Method is GET, POST, PUT, DELETE.
Path is the where the resource is stored on the web server.
Version is HTTP/1.1 or HTTP/2.
Headers contain information about the request and the client making the request.

Response will contain similar things to the request as well as a message body.
The status code will tell us if the request was a success.
There 5 types of status codes:

- Informational: 100-199, interim before the actual response, most common is 100 'continue'
- Successful: 200 to 299, http method (get,post,put,delete) was successful, most common 200 OK.
- Redirection: 300 to 399, tells the client the resource has moved, most common 301 and 302, 302 being temporary.
- Client error: 400 to 499, the request contained bad syntax or content. Most common 400 bad data, 401 user must login, 403 request was invalid eg. insufficient permissions, 404 resource not found.
- Server error: 500 to 599, error on the server. Most common 500 internal error failed to process.

## HTTPS

Operations the same http only before request is sent the data gets turned into a secret code. only the other computer can turn it back.

# Intro to HTML, CSS, Javascript

Webpages are made of html, css, js.

HTML is the structure.
CSS is the style.
JS is interactive elements.

Js can make a page interactive by adding listeners

# Other Internet Protocols

Dynamic Host Configuration PRotocol (DHCP) - When your computer connects to a network the DHCP assigns your computer an IP.

Domain Name System Protocol (DNS) - Your computer check the DNS server to find the IP address of the computer that is associated with a domain name.

Internet Message Access Protocol (IMAP) - Is used to check emails and manage your mailbox.

Simple Mail Transfer Protocol (SMTP) - This allows your client to send emails via an SMTP server.

Post Office Protocol (POP) - Older protocol used to download emails, deleting email off the server once downloaded.

File Transfer Protocol (FTP) - Allows you to send and receive files for a server.

Secure Shell Protocol (SSH) - A way to log in to interact with a server.

SSH File Transfer Protocol (SFTP) - Send file securely over the SSH protocol.
