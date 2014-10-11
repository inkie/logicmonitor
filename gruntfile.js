var _ = require('lodash'),
	packages = {
		'demo': 'demo.html'
	},
	srcDir = '.',
	destDir,
	forceCompass = false;

module.exports = function(grunt) {  // jshint ignore:line
	destDir = grunt.option('dest') || '../logicmonitor-dist';
	forceCompass = grunt.option('forceCompass');

	var buildVersion = encodeURIComponent(grunt.template.date(new Date().getTime(), 'yyyymmddHHMMsso'));

	var requirejsConfig = getRequirejsConfig(destDir);
	var concurrentTargets = [];

	_.each(requirejsConfig, function (value, targetName) {
		concurrentTargets.push('requirejs:' + targetName);
	});

	require('time-grunt')(grunt);

	grunt.initConfig({
		/*generate startup.js*/
		concat: {
			startup: {
				options: {
					header: '// this file is auto generated by build-process, please do not modify it by yourself.',
					footer: '\nrequire(["main"]);\n'
				},
				files: [{
					src: getSrcFiles(['commons/3rdparty/require.js', 'config.js']),
					dest: getSrcFile('startup.js')
				}]
			}
		},

		/*generate templates for debug mode*/
		templates_debug: {
			options: {
				base: getSrcFile('')
			},
			partials: {
				options: {
					partial: true
				},
				files: getTemplatePathsConfig('partials', true)
			},
			templates: {
				files: getTemplatePathsConfig('templates', true)
			}
		},

		/*precompile templates when distribute*/
		handlebars: {
			partials: {
				options: {
					amd: true,
					partialRegex: /.*/,
					partialsPathRegex: /\/partials\//,
					processPartialName: processHandlebarsTemplateName(true)
				},
				files: getTemplatePathsConfig('partials')
			},
			templates: {
				options: {
					amd: true,
					processName: processHandlebarsTemplateName()
				},
				files: getTemplatePathsConfig('templates')
			}
		},

		/*copy resources to dist dir*/
		copy: {
			html: {
				options: {
					processContent: function(content, srcPath) {
						content = content.replace(/src=(.*)\.js[^'">\s]*/mg, 'src=$1.js?v=' + buildVersion)
							.replace(/href=(.*)\.css[^'">\s]*/mg, 'href=$1.css?v=' + buildVersion);

						return content;
					}
				},
				files: getHtmlEntriesConfig(packages)
			},
			imgs: {
				files: [{
					expand: true,
					src: getSrcFiles(['commons/images/**/*.*', 'commons/css/images/**/*.*']),
					dest: destDir
				}]
			},
			fonts: {
				files: [{
					expand: true,
					src: getSrcFiles(['commons/fonts/**/*.*']),
					dest: destDir
				}]
			},
			css: {
				files: [{
					expand: true,
					src: getSrcFiles(['commons/css/*.css']),
					dest: destDir
				}]
			},
			js: {
				files: [{
					expand: true,
					src: getSrcFiles(['commons/**/*.js', './*.js', 'commons/**/*.html']),
					dest: destDir
				}]
			},
			startup: {
				options: {
					processContent: function(content, srcPath) {
						if (srcPath.indexOf('startup') > -1) {
							return content.replace(/{urlArgs:.*?,/,
									'{urlArgs:"v=' + buildVersion + '",');
						} else {
							return content;
						}
					}
				},
				files: [{
					expand: true,
					cwd: destDir,
					src: ['startup.js'],
					dest: destDir
				}]
			}
		},

		/*resolve dependecies, js&css optimization*/
		requirejs: requirejsConfig,

		/* development asistant*/
		watch: getWatchConfig(),

		jshint: {
			options: {
				force: true,
				'-W030': true,
				'-W097': true,
				'-W117': true
			},
			all: getSrcFiles(['/**/*.js', '!/node*/**/*', '!/**/.*_compiled.js', '!/commons/3rdparty/**/*',
				'!/**/.auto_*.js', '!/startup.js', '!/**/*startup.js', '!/text.js', '!**/.*'
			])
		},

		compass: {
			dist: {
				options: {
					force: true,
					basePath: 'commons',
					sassDir: 'sass',
					cssDir: 'css',
					imagesDir: 'images',
					fontsDir: 'fonts',
					outputStyle: 'expanded',
					relativeAssets: true
				}
			},
			debug: {
				options: {
					force: forceCompass,
					basePath: 'commons',
					sassDir: 'sass',
					cssDir: 'css',
					imagesDir: 'images',
					fontsDir: 'fonts',
					outputStyle: 'expanded',
					relativeAssets: true
				}
			}
		},

		concurrent: {
			requirejs: {
				tasks: concurrentTargets
			}
		},

		clean: {
			options: {
				force: true
			},
			temporary: getSrcFiles(['/**/.auto_*', '/**/.*_compiled*', '/**/.*.js']),
			dest: [destDir]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.loadTasks('commons/grunt_tasks');

	grunt.registerTask('init', ['templates_debug', 'concat']);
	grunt.registerTask('dist', ['clean', 'compass:dist', 'init', 'handlebars', 'copy', 'concurrent:requirejs', 'copy:startup', 'clean:temporary', 'init']);
	grunt.registerTask('default', ['dist']);
	grunt.registerTask('debug', ['clean', 'compass:debug', 'init']);

	grunt.event.on('watch', function(action, filePath) {
		grunt.config(['jshint', 'all'], filePath);
	});
};

function getRequirejsConfig(destDir) {
	var config = {
		startupjs: getRequirejsConfigHelper('js', 'startup', destDir + '/startup.js', true)
	};

	_.each(packages, function(entryPath, packagePath) {
		var packageName = packagePath.split('/').join('');

		config[packageName + 'js'] = getRequirejsConfigHelper('js', packagePath + '/index', destDir + '/' + packagePath + '/index.js');
	});

	config.css2 = getRequirejsConfigHelper('css', 'commons/css/startup.css', destDir + '/commons/css/startup.css');

	return config;
}

function getRequirejsConfigHelper(type, inPath, outPath, isStartup) {
	var packagePaths = {};

	_.each(packages, function(entryPath, packagePath) {
		packagePaths[packagePath + '/templates_compiled'] = packagePath + '/templates/.templates_compiled';
		packagePaths[packagePath + '/partials_compiled'] = packagePath + '/templates/.partials_compiled';
	});

	if (type == 'js') {
		var exclude = [];

		if (isStartup) {
			exclude = [];
		} else {
			exclude = ['startup'];
		}

		var rConfig = {
			options: {
				logLevel: 0,
				baseUrl: getSrcFile('/'),
				mainConfigFile: getSrcFile('config.js'),
				name: inPath,
				optimize: 'uglify2',
				out: outPath,
				preserveLicenseComments: false,
				generateSourceMaps: true,
				paths: _.extend({
					'handlebars': 'commons/3rdparty/handlebars/handlebars.runtime',
					'commons/logicmonitor/partials_compiled': 'commons/logicmonitor/templates/.partials_compiled',
					'commons/logicmonitor/templates_compiled': 'commons/logicmonitor/templates/.templates_compiled',
					'commons/logicmonitor/controls/partials_compiled': 'commons/logicmonitor/controls/templates/.partials_compiled',
					'commons/logicmonitor/controls/templates_compiled': 'commons/logicmonitor/controls/templates/.templates_compiled'
				}, packagePaths),
				exclude: exclude
			}
		};


		return rConfig;
	} else if (type == 'css') {
		return {
			options: {
				optimizeCss: 'standard',
				cssIn: inPath,
				out: outPath
			}
		};
	} else {
		throw new Error('unrecognized requirejs optimization type');
	}
}

function getTemplatePathsConfig(type, isDebug) {
	var fileConfig = {

	};

	if (type == 'partials') {
		if (isDebug) {
			fileConfig[getSrcFile('commons/logicmonitor/templates/.auto_partials.js')] = getSrcFiles(['commons/logicmonitor/templates/partials/**/*.html']);
			fileConfig[getSrcFile('commons/logicmonitor/controls/templates/.auto_partials.js')] = getSrcFiles(['commons/logicmonitor/controls/templates/partials/**/*.html']);
		} else {
			fileConfig[getSrcFile('commons/logicmonitor/templates/.partials_compiled.js')] = getSrcFiles(['commons/logicmonitor/templates/partials/**/*.html']);
			fileConfig[getSrcFile('commons/logicmonitor/controls/templates/.partials_compiled.js')] = getSrcFiles(['commons/logicmonitor/controls/templates/partials/**/*.html']);
		}
	}

	if (type == 'templates') {
		if (isDebug) {
			fileConfig[getSrcFile('commons/logicmonitor/templates/.auto_templates.js')] = getSrcFiles(['commons/logicmonitor/templates/**/*.html']);
			fileConfig[getSrcFile('commons/logicmonitor/controls/templates/.auto_templates.js')] = getSrcFiles(['commons/logicmonitor/controls/templates/**/*.html']);
		} else {
			fileConfig[getSrcFile('commons/logicmonitor/templates/.templates_compiled.js')] = getSrcFiles(['commons/logicmonitor/templates/**/*.html' ]);
			fileConfig[getSrcFile('commons/logicmonitor/controls/templates/.templates_compiled.js')] = getSrcFiles(['commons/logicmonitor/controls/templates/**/*.html' ]);
		}
	}

	var templatePaths = _.clone(packages);

	_.each(templatePaths, function(entryPath, templatePath) {
		templatePath = getSrcFile(templatePath);

		if (type == 'partials') {
			if (isDebug) {
				fileConfig[templatePath + '/templates/.auto_partials.js'] = [templatePath + '/templates/partials/**/*.html'];
			} else {
				fileConfig[templatePath + '/templates/.partials_compiled.js'] = [templatePath + '/templates/partials/**/*.html'];
			}
		}

		if (type == 'templates') {
			if (isDebug) {
				fileConfig[templatePath + '/templates/.auto_templates.js'] = [templatePath + '/templates/**/*.html'];
			} else {
				fileConfig[templatePath + '/templates/.templates_compiled.js'] = [templatePath + '/templates/**/*.html'];
			}
		}
	});

	return fileConfig;
}

function processHandlebarsTemplateName(isPartial) {
	return function(filePath) {
		var fileName = filePath.replace(new RegExp('^' + getSrcFile('/')), '').replace(isPartial ? /templates\/partials\// : /templates\//, '').replace(/\..*$/, '');
		return fileName.replace(/\/main$/, '');
	};
}

function getWatchConfig() {
	return {
		scripts: {
			options: {
				livereload: true,
				nospawn: true
			},
			files: getSrcFiles(['config.js']),
			tasks: ['concat', 'jshint']
		},
		templates: {
			options: {
				livereload: true
			},
			files: getSrcFiles(['/**/*.html']),
			tasks: ['templates_debug']
		},
		livereload: {
			files: getSrcFiles(['commons/css/**/*', 'commons/images/**/*', 'commons/3rdparty/**/*.js']),
			options: {
				livereload: true
			}
		},
		jshintreload: {
			options: {
				livereload: true,
				nospawn: true
			},
			files: getSrcFiles(['/**/*.js', '!/**/.*_compiled.js', '!/**/startup.js', '!/*startup*.js',
				'!/commons/3rdparty/**/*', '!/**/.auto_*.js', '!config.js', '!/node_modules/**/*'
			]),
			tasks: ['jshint']
		},
		compass: {
			options: {
				livereload: true,
				nospawn: true
			},
			files: getSrcFiles(['/commons/sass/**/*']),
			tasks: ['compass:debug']
		}
	};
}

function getHtmlEntriesConfig(packages) {
	var config = [];

	_.each(packages, function(entryPaths) {
		entryPaths = _.isArray(entryPaths) ? entryPaths : [entryPaths];

		_.each(entryPaths, function(entryPath) {
			config.push({
				expand: true,
				src: [entryPath],
				dest: destDir,
				filter: 'isFile'
			});
		});
	});

	config = _.unique(config, function(item) {
		return item.src[0];
	});

	return config;
}

function getSrcFile(path) {
	return getFiles(srcDir, path)[0];
}

function getSrcFiles(paths) {
	return getFiles(srcDir, paths);
}

function getDestFile(path) {
	return getFiles(destDir, path)[0];
}

function getDestFiles(paths) {
	return getFiles(destDir, paths);
}

function getFiles(root, paths) {
	var results = [];

	if (!_.isArray(paths)) {
		paths = [paths];
	}

	root = root.replace(/\/$/g, '');

	_.each(paths, function(path) {
		var isNo = false;
		if (path[0] == '!') {
			path = path.slice(1);
			isNo = true;
		}

		results.push((isNo ? '!' : '') + root + path.replace(/^([^\/])(.*)/, '/$1$2'));
	});

	return results;
}