# Vanilla SPA Framework
#### Author : Chris Jackem
##### This is a simple Single Page Application framework that uses vanilla JavaScript.
---
Made in a few days to demonstrate my approach. A simple website is included to show off some features.

![Alt text](/screenshot.png?raw=true "Included Website Template")

Features:
* Build .html pages as normal, the script and css tags are automatically injected into / removed from the main DOM
* Animated transition support
* Custom events to manipulate your page how you want
* Event manager removes listeners automatically
* Uses a global object to hold JavaScript values for each page, overwritten to release memory to garbage collection
---

#### How it works
When the main page is loaded the first time and a PageLoader instance is created, PageLoader looks for links with a hash(#) and creates click listeners that intercept the normal link behavior. 
*This can be manually created by calling PageLoader.BuildLinks( container )*

When a hashed link is clicked, the PageLoader looks in the ./views directory for an html file with the same name of the link. This file is loaded with a GET request.

When the response is loaded, the body of new page is placed into the #container ( that you specify ) and the old and new pages are cross faded. ( You can make this any transition you want with css animations ) And the new file's tags are also injected into the main DOM.

Once the pages are done animating, the old page is removed as well as it's tags.