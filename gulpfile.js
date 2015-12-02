var gulp = require("gulp");
var gutil = require("gulp-util");
var runSequence = require("run-sequence");
var gulpJsxCoverage = require("gulp-jsx-coverage");


/**
 * START:Tests
 */

var testSetup = function() {
  var jsdomDoc = require("jsdom");

  global.document = jsdomDoc.jsdom("<!doctype html><html><body></body></html>");

};


var testWithCoverage = function(sources) {
  testSetup();
  return gulpJsxCoverage.createTask({
    src: sources,
    istanbul: {
      coverageVariable: "__MY_TEST_COVERAGE__",
      include: /\.(jsx|js)?$/,
      exclude: /node_modules|spec/
    },
    coverage: {
      reporters: ["text-summary", "json", "lcov"],
      directory: "coverage"
    },
    transpile: {
      babel: {
        include: /\.(jsx|js)?$/,
        exclude: /node_modules/
      }
    },
    mocha: {
      reporter: "spec"
    },
    babel: {
        presets: ['es2015', 'react'],
        sourceMap: 'both'
    }
  });
};


gulp.task("test", testWithCoverage(['./src/**/*/*_spec*']));


gulp.task("default", ["test"]);

/**
 * END:Tests
 */


