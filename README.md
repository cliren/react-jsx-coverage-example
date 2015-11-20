# react-jsx-coverage-example
react jsx test coverage with gulp-jsx-coverage

# Build
```sh
$ npm install
$ gulp test

```

# Issue - Test failure stack trace is not pointing to the correct line number in source

```
/usr/local/bin/node /Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/gulp/bin/gulp.js --color --gulpfile /Users/surenrk/suren/react/react-jsx-coverage-example/gulpfile.js test
[10:02:44] Using gulpfile ~/suren/react/react-jsx-coverage-example/gulpfile.js
[10:02:44] Starting 'test'...


  Util
    1) should add two numbers

  UserProfileLink
    2) should render link


  0 passing (28ms)
  2 failing

  1) Util should add two numbers:

      AssertionError: expected 4 to equal 5
      + expected - actual

      -4
      +5

      at Assertion.fail (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/should/lib/assertion.js:196:17)
      at Assertion.prop.(anonymous function) [as eql] (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/should/lib/assertion.js:81:17)
      at Context.<anonymous> (/Users/surenrk/suren/react/react-jsx-coverage-example/src/__tests__/util_spec.js:9:833)
  TRANSPILED: var _should2 = _interopRequireDefault(_should);
      at callFn (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runnable.js:286:21)
      at Test.Runnable.run (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runnable.js:279:7)
      at Runner.runTest (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:421:10)
      at /Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:528:12
      at next (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:341:14)
      at /Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:351:7
      at next (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:283:14)

  2) UserProfileLink should render link:

      AssertionError: expected 'My Profile' to equal 'My Profile2'
      + expected - actual

      -My Profile
      +My Profile2

      at Assertion.fail (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/should/lib/assertion.js:196:17)
      at Assertion.prop.(anonymous function) [as eql] (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/should/lib/assertion.js:81:17)
      at Context.<anonymous> (/Users/surenrk/suren/react/react-jsx-coverage-example/src/react-components/__tests__/UserProfileLink_spec.jsx:26:28)
      at callFn (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runnable.js:286:21)
      at Test.Runnable.run (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runnable.js:279:7)
      at Runner.runTest (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:421:10)
      at /Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:528:12
      at next (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:341:14)
      at /Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:351:7
      at next (/Users/surenrk/suren/react/react-jsx-coverage-example/node_modules/mocha/lib/runner.js:283:14)



[10:02:45] 'test' errored after 603 ms
[10:02:45] Error in plugin 'gulp-mocha'
Message:
    2 tests failed.

=============================== Coverage summary ===============================
Statements   : 100% ( 12/12 )
Branches     : 75% ( 3/4 )
Functions    : 100% ( 4/4 )
Lines        : 100% ( 11/11 )
================================================================================

Process finished with exit code 1

```