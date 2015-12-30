module.exports = function(grunt) {

    grunt.initConfig({

        srcDir : "src/webapp",
        buildDir : "target",

        clean : {
            build : [ "<%=buildDir%>/" ],
        },

        cssmin : {
            options : {
                shorthandCompacting : false,
                roundingPrecision : -1
            },
            target : {
                files : {
                    'target/css/style.css' : [ 
                        '<%=srcDir%>/lib/bootstrap*/css/bootstrap.min.css',
                        '<%=srcDir%>/css/base.css', 
                        '<%=srcDir%>/css/components.css',
                        '<%=srcDir%>/css/images.css', 
                        '<%=srcDir%>/css/fonts.css',
                        '<%=srcDir%>/css/layout.css', 
                    ]
                }
            }
        },

        uglify : {
            src : {
                options : {
                    mangle : false
                },
                files : {
                    'target/js/app.min.js' : [ 
                        '<%=srcDir%>/modules/utils.js',
                        '<%=srcDir%>/modules/components/**/*.js',
                        '<%=srcDir%>/modules/services/**/*.js',
                        '<%=srcDir%>/modules/pages/**/*.js' 
                    ]
                }
            },
            lib : {
                options : {
                    mangle : false
                },
                files : {
                    'target/js/lib.min.js' : [ 
                        '<%=srcDir%>/lib/jquery-2.1.4.min.js',
                        '<%=srcDir%>/lib/bootstrap-3.3.6/js/bootstrap.min.js',
                        '<%=srcDir%>/lib/angular-1.4.8/angular.min.js',
                        // '<%=srcDir%>/lib/lib/angular-1.4.8/angular-mocks.js',
                        '<%=srcDir%>/lib/lib/angular-1.4.8/angular-resource.min.js',
                        '<%=srcDir%>/lib/angular-ui-0.2.15/angular-ui-router.js'
                     ]
                }
            }
        },

        htmlbuild : {
            index_html : {
                options : {
                    beautify : true,
                    scripts : {
                        'app' : 'target/js/app.min.js',
                        'lib' : 'target/js/lib.min.js'
                    },
                    styles : {
                        'app' : 'target/css/style.css'
                    }
                },
                src : '<%=srcDir%>/index.html',
                dest : 'target/',
            }
        },

        replace : {
            index_html : {
                src : [ 'target/index.html' ],
                overwrite : true,
                replacements : [ {
                    from : 'data-ng-app="fakeBackend"',
                    to : 'data-ng-app="main"',
                } ]
            }
        },
        
        copy : {
            img: {
                expand: true, 
                cwd: '<%=srcDir%>/img', 
                src: ['**'], 
                dest: 'target/img'
            },
            bootstrap_fonts: {
                expand: true, 
                cwd: '<%=srcDir%>/lib/bootstrap-3.3.6/fonts', 
                src: '**', 
                dest: 'target/fonts'
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', 
            [ 'clean', 'copy', 'cssmin', 'uglify', 'htmlbuild', 'replace']
    );
  
};