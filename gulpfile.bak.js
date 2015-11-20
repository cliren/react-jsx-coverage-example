var gulp = require("gulp");
var gutil = require("gulp-util");
var _ = require("lodash");
var del = require("del");
var rename = require("gulp-rename");
var runSequence = require("run-sequence");
var gulpif = require("gulp-if");
var gulpJsxCoverage = require("gulp-jsx-coverage");


var jsSources = [
  "./src/**/*.jsx"
];
var testSources = [
  "./tests/**/*.spec.js"
];

var dest = "./tmp";
var output = {
  src: dest + "/src",
  specs: dest + "/specs"
};
/**
 * START:Copy
 */

var copy = function(source, dest) {
  return gulp.src(source)
    //.pipe(rename(function(path) {
    //  if (path.extname === ".jsx") {
    //    path.extname = ".js";
    //  }
    //}))
    .pipe(gulp.dest(dest));
};

gulp.task("copy-js-sources", _.partial(copy, jsSources, output.src));
gulp.task("copy-test-sources", _.partial(copy, testSources, output.specs));


gulp.task("copy", function(callback) {

  return runSequence([
      "copy-js-sources",
      "copy-test-sources"
    ],
    callback
  );

});

/**
 * END:Copy
 */

/**
 * START:Clean
 */
gulp.task("clean", function(callback) {
  return del([dest], callback);
});
/**
 * END:Clean
 */


/**
 * START:Tests
 */

var testSetup = function() {
  var babel = require("babel/register");

  //babel({
  //  extensions: ".jsx"
  //});

  var jsdomDoc = require("jsdom");

  global.document = jsdomDoc.jsdom("<!doctype html><html><body></body></html>");

};


var testWithCoverage = function(sources) {
  testSetup();
  return gulpJsxCoverage.createTask({
    src: sources,
    istanbul: {
      coverageVariable: "__MY_TEST_COVERAGE__",
      exclude: /node_modules|specs/
    },
    coverage: {
      reporters: ["text-summary", "json", "lcov"],
      directory: "coverage"
    },
    transpile: {
      babel: {
        include: /\.(js)?$/
      }
    },
    mocha: {
      reporter: "spec"
    },
    babel: {
      sourceMap: "both",
      retainLines:true
    }
  });
};


gulp.task("test", testWithCoverage(['./tmp/**/*/*_spec*']));

gulp.task("plainTest", testWithCoverage([
  './src/**/*/*_spec*'
]));

gulp.task("copySourcesAndTest", function(callback) {
  return runSequence(
    "clean",
    "copy",
    "test",
    callback
  );
});


gulp.task("default", ["copySourcesAndTest"]);

/**
 * END:Tests
 */


