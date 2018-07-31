// test/index.spec.js

// This file serves as the entry point for the Webpack bundling/building process.
// Here, we need to require all of our unit test files so that the bundler can
// pick them up.

// Requiring and calling jsdom-global takes care of creating a DOM environemnt,
// effectively making the tests run in a browser-like environment. @vue/test-utils
// needs this to run.
require("jsdom-global")();

// Requiring the file that contains our unit tests.
require("./specs/App.spec");