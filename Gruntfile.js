module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
        options: {
            separator: ';\n'
        },
        src: {
            src: [
                'WebContent/modules/utils.js',
                'WebContent/modules/components/**/*.js',
                'WebContent/modules/services/**/*.js',
                'WebContent/modules/pages/**/*.js'
            ],
            dest: 'target/js/app.js'
        },
        lib: {
            src: [
                'WebContent/lib/jquery-2.1.4.min.js',
                'WebContent/lib/bootstrap-3.3.6/js/bootstrap.min.js',
                'WebContent/lib/angular-1.4.8/angular.min.js',
                //'WebContent/lib/lib/angular-1.4.8/angular-mocks.js',
                'WebContent/lib/lib/angular-1.4.8/angular-resource.min.js',
                'WebContent/lib/angular-ui-0.2.15/angular-ui-router.js'
            ],
            dest: 'target/js/lib.min.js'
        }
    },

    uglify: {
        options: {
            mangle: false
        },
        src: {
            files: {
                'target/js/app.min.js': ['target/js/app.js']
            }
        }
    },

    htmlbuild: {
        index: {
            src: 'WebContent/index.html',
            dest: 'target/',
            options: {
                beautify: true,
                scripts: {
                    'app': 'target/js/app.min.js',
                    'lib': 'target/js/lib.min.js'
                },
                sections: {
                    'html': 'WebContent/html-tag.html'
                }
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('default', ['htmlbuild', 'concat', 'uglify']);

};