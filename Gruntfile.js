module.export = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
      entry: "./client/src/app.jsx",
      output: {
        path: __dirname + "/client/build",
        filename: "app.js"
      },
      module: {
        loaders: [
          { test: /\.jsx$/, loader: "jsx-loader" }
        ]
      }
    },

  });

  grunt.loadNpmTask('webpack');
  grunt.loadNpmTask('webpack');

  grunt.registerTask('build', function(n){
    grunt.task.run(['webpack']);
  });
}