module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
      app: {
        entry: "./client/src/app.jsx",
        output: {
          path: __dirname + "/client/build",
          filename: "app.js"
        },
        module: {
          loaders: [
            { test: /\.jsx$/, loader: "jsx-loader", exclude: './node_modules' }
          ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('build', ['webpack']);
  
}