logicmonitor
============

The standard ui project for logicmonitor based B2 framework

To run, just start a http-server(serve staic files) in the project directory, For example, we can use the [http-server](https://github.com/nodeapps/http-server)

```
$ npm install -g http-server
$ cd logicmonitor
$ http-server
```


For javascript Developer
============
Make sure you have node.js and  Compass installed
Then run following commands:

```
npm install
npm install -g grunt-cli
```

For CSS Developer
============
We use Compass to pre compile the css, and our css source files are written use scss/sass, you can install the CSS development environment by following steps

1. Make sure the Ruby is installed, you can use RVM to manage ruby versions

```
$ \curl -sSL https://get.rvm.io | bash -s stable
```

2. Install the bundler

```
$ gem install bundler
```

3. Go to project directory, run following command to install all tools we need to develop the css

```
$ bundle
```


grunt commands
=============

```
  grunt    // the default command is used to release the distribution package
```

```
  grunt debug   // this command is used in debug mode(developement stage), run this command when you have html template files added, removed
```

```
  grunt clean   // clean the temporay files generated by grunt debug or grunt
```

```
  grunt watch   // watch the file changes, and generate the necessary files
```
