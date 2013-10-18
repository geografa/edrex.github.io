module.exports = function(grunt) {

var bowerpath = "cache/bower_components/";

grunt.initConfig({
  less: {
    production: {
      options: {
        paths: [bowerpath+'bootstrap/less'],
        yuicompress: true
      },
      files: {
        "assets/css/application.min.css": "assets/less/application.less"
      }
    }
  },
  uglify: {
    jquery: {
      files: {
        'assets/js/jquery.min.js': bowerpath+'jquery/jquery.js'
      }
    },
    bootstrap: {
      files: {
        'assets/js/bootstrap.min.js': [bowerpath+'bootstrap/js/tooltip.js']
      }
    }
  },
  copy: {
    bootstrap: {
      files: [
        {expand: true, cwd: bowerpath+'bootstrap/img/', src: ['**'], dest: 'assets/img/'}
      ]
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    },
    deploy: {
      cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'exec:build' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
