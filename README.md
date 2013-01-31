angularjsauthseed
=================

This is a modified version of the AngularJS seed project that includes basic authentication code to handle login to your web app.


It works by intercepting 401 Not Authorized responses from the server (in for example a $http query). Any 401 Not Authorized response will trigger a redirect to the login screen. The page the user attempted to access when given the 401 response is saved, and returned to once authentication is attained again.  


On default, when a page loads, the app asks the server if the user is logged in, so that any non-login or create page will be protected. You can modify this behavior by commenting "ping()" in two places noted by comments in app.js. If this is disabled, the app will only give a login screen when login is required.

Getting Started
==============
This can be used like the normal AngularJS seed. To test it out, clone it into a folder. Launch your server (I recommend WAMP for local testing on windows) and use the .sql file on your mysql database to create the users structure. Update the connection info in conn_mysql.php. You should be good to go.

Requirements
===========
PHP for default server-side

MySql for default database

Author
======
kidovate or Christian Stewart, 2013

Unlicense
=========
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
