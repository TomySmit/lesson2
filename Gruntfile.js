module.exports = function(grunt){

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    "less": {
      "style": {
        "files": {
          "src/css/style.css": ["src/less/style.less"]
        }
      }
    },
    "autoprefixer": {
      options: {
        browsers: ["last 2 version"]
      },
      style: {
        src: "src/css/style.css"
      }
    },
    "cmq": {
      style: {
        files: {
          "src/css/style.css": ["src/css/style.css"]
        }
      }
    },
    "copy": {
      build: {
        options: {
          processContentExclude: [
            '**/*.{png,gif,jpg,ico,psd}'
        ]
        },
        files: [{
          expand: true,
          cwd: "src",
          src: [
            "js/**/*",
            "css/**/*",
            "index.html"
          ],
          dest: "build",
        }]

      }
    },
    "clean": {
      build: ["build/","!build/img/**/*"]
    }
  });

  grunt.registerTask("build", ["less", "autoprefixer", "cmq","copy"]);

};