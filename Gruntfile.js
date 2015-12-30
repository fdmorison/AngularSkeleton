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
            dist: {
                files:[
                    {
                        src : '<%=srcDir%>/index.html',
                        dest: '<%=buildDir%>/index.html'
                    },
                    {
                        expand: true,
                        cwd: '<%=srcDir%>/img',
                        src: ['**'], 
                        dest: '<%=buildDir%>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%=srcDir%>/lib/bootstrap-3.3.6/fonts',
                        src: '**',
                        dest: '<%=buildDir%>/fonts'
                    }
                ]
            }
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
                    allowUnknownTags: true
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
        'copy',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'htmlbuild',
        'replace',
        'clean:stage',
    ]);

};
