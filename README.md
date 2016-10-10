This is a test project for the OpenWhisk team.


### server.js

server.js is a simple express webserveur. It listen rto /run and start a phantomjs subprocess when needed

### app.js

Function calling phantomjs subprocess
Then inserting result in an elastic search (connection info in params here)

### phantomjs-script.js

Phantomjs script. Open a page, extract information in config. Return result in stdout.

This is where i have random crashes. Sometimes my phantomjs script run without a problem and sometimes i get file handle errors.

Phantomjs may open a lot of files since i open an url.


### start & test

The dockerfile should create an openwhisk action

you can try the code by building the docker :

docker build -t user/project-name .
docker run -p 8080:8080 uer/project-name

Now you can query the server like OpenWhisk would using post on /run
The task should notcrash if you don't give database information. Anyway the script should always respond with (if i get an error)

```javascript
{
	message: 'error'
}
```