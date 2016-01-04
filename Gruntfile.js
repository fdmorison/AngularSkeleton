module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg      : grunt.file.readJSON('package.json'),
        srcDir   : "src/webapp",
        buildDir : "target",
        stageDir : "<%=buildDir%>/.tmp",

        clean : {
            build : [ "<%=buildDir%>/" ],
            stage : [ "<%=stageDir%>/" ]
        },

        copy : {
            main: {
                files:[
                    {// index.html
                        src : '<%=srcDir%>/index.html',
                        dest: '<%=buildDir%>/index.html'
                    },
                    {// images
                        expand: true,
                        cwd: '<%=srcDir%>/img',
                        src: ['**'], 
                        dest: '<%=buildDir%>/img'
                    },
                    {// bootstrap fonts and images
                        expand: true,
                        cwd: '<%=srcDir%>/lib/bootstrap-3.3.6/fonts',
                        src: '**',
                        dest: '<%=buildDir%>/fonts'
                    },
                    {// templates
                        expand: true,
                        cwd: '<%=srcDir%>/modules',
                        src: '**/*.html',
                        dest: '<%=buildDir%>/modules'
                        //,flatten: true
                    }
                ]
            },
            test: {
                files:[
                    {// v1
                        expand: true,
                        cwd: '<%=srcDir%>/v1',
                        src: '**',
                        dest: '<%=buildDir%>/v1'
                    }
                ]
            },
        },

        useminPrepare: {
            html: '<%=buildDir%>/index.html',
            options: {
                root: '<%=srcDir%>',
                dest: '<%=buildDir%>',
                staging: '<%=stageDir%>'
            }
        },

        usemin: {
            html: '<%=buildDir%>/index.html'
        },

        cssmin : {
            options : {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            }
        },

        uglify: {
            options: {
                mangle: false
            }
        },

        htmlbuild : {
            index_html : {
                options : {
                    beautify : true,
                    parseTag: "build-html"
                },
                src : '<%=buildDir%>/index.html',
                dest: '<%=buildDir%>',
            }
        },

        replace : {
            index_html : {
                src : [ '<%=buildDir%>/index.html' ],
                overwrite : true,
                replacements : [ {
                    from : 'fakeBackend',
                    to : 'main',
                } ]
            }
        }

    });

    grunt.registerTask('default', [
        'clean:build',
        'copy:main',
        'htmlbuild',
        'replace',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'clean:stage',
    ]);
    
    grunt.registerTask('build-mock', [
        'clean:build',
        'copy:main',
        'copy:test',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'clean:stage',
    ]);

};
