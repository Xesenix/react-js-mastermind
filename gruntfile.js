module.exports = function (grunt) {
	'use strict';
	// Project configuration
	grunt.initConfig({
		// Metadata
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dist: {
				options: {
					transform: [
						["babelify", { presets: "react"}]
					]
				},
				files: {
					// if the source file has an extension of es6 then
					// we change the name of the source file accordingly.
					// The result file's extension is always .js
					"./public/js/app.js": ["./src/js/components/mastermind.jsx", "./src/js/modules/mastermind.js"]
				}
			}
		},
		// Task configuration
		/*concat: {
			options: {
				separator: ';\n'
			},
			dist: {
				src: [
					'bower_components/lodash/lodash.js',
					'bower_components/react/react.js',
					'bower_components/react/react-dom.js',
					'bower_components/babel/browser.min.js',
					'src/js/modules*.js'
				],
				dest: 'public/js/app.js',
				options: {
					banner: '(function() {\n',
					footer: '})();'
				}
			},
			components: {
				src: [
					'src/js/components*.jsx'
				],
				dest: 'public/js/components.js'
			}
		},*/
		jshint: {
			//esversion: 6,
			options: {
				node: true,
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				eqnull: true,
				boss: true
			},
			all: {
				src: ['gruntfile.js', 'src/js/**/*.js', 'tests/**/*.js']
			}
		},
		nodeunit: {
			files: ['tests/**/*.js']
		},
		watch: {
			all: {
				files: ['gruntfile.js', 'src/js/**/*.js', 'src/js/**/*.jsx', 'tests/**/*.js'],
				tasks: ['jshint:all', 'browserify']
			}
		}/*,
		open: {
			dev: {
				path: 'public/index.html',
				app: 'Firefox'
			},
		}*/
	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-open');

	// Default task
	grunt.registerTask('test', ['jshint', 'nodeunit']);
	grunt.registerTask('default', ['watch']);
};

