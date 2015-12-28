module.exports = function(grunt) {

  grunt.initConfig({

    srcFolder: "src/client",
    distFolder: "target",
      
    concat: {
        options: {
            separator: ';\n'
        },
        src: {
            src: [
                '<%=srcFolder%>/modules/utils.js',
                '<%=srcFolder%>/modules/components/**/*.js',
                '<%=srcFolder%>/modules/services/**/*.js',
                '<%=srcFolder%>/modules/pages/**/*.js'
            ],
            dest: 'target/js/app.js'
        },
        lib: {
            src: [
                '<%=srcFolder%>/lib/jquery-2.1.4.min.js',
                '<%=srcFolder%>/lib/bootstrap-3.3.6/js/bootstrap.min.js',
                '<%=srcFolder%>/lib/angular-1.4.8/angular.min.js',
                //'<%=srcFolder%>/lib/lib/angular-1.4.8/angular-mocks.js',
                '<%=srcFolder%>/lib/lib/angular-1.4.8/angular-resource.min.js',
                '<%=srcFolder%>/lib/angular-ui-0.2.15/angular-ui-router.js'
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
            src: '<%=srcFolder%>/index.html',
            dest: 'target/',
            options: {
                beautify: true,
                scripts: {
                    'app': 'target/js/app.min.js',
                    'lib': 'target/js/lib.min.js'
                },
                sections: {
                    'html': '<%=srcFolder%>/html-tag.html'
                }
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('default', ['concat', 'uglify', 'htmlbuild']);

};