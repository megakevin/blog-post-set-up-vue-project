// test/specs/App.spec.js

// Contains unit tests for the App component

// Including our assertion library and setting up
// the assert object for use in the tests.
var chai = require("chai");
var assert = chai.assert;

// Importing Vue.js, the test utils and the component
import Vue from 'vue';
import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

// Setting up our tests with Mocha's describe and it statements
describe("App.vue", () => {
    it("should show welcome message", () => {
        // Arrange
        // The "mount" function creates a live instance of the Vue.js component
        // and returns a wrapper that allows our tests to interact with it.
        let wrapper = mount(App);

        // Act & Assert
        // Simple assertion for testing whether the msg property of the view model
        // is as expected.
        assert.equal(wrapper.vm.msg, "Welcome to Your Vue.js App");
    });
});
