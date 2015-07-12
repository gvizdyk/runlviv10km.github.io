module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            // development: {
            //     options: {
            //         paths: ["css"]
            //     },
            //     files: {"css/lvivtenrunning.css": "less/bootstrap.less"}
            // },
            production: {
                options: {
                    paths: ["css"],
                    compress: true,
                    optimization: 2,
                    cleancss: true
                },
                files: {"css/lvivtenrunning.css": "less/bootstrap.less"}
            }
        },
        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['watch']);
};
