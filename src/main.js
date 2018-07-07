// We need to import the vue library and our main Single File Component
import Vue from 'vue'
import App from './App.vue'

// Creating the Vue instance
new Vue({
    // This is the element in the HTML where Vue will mount
    el: '#app',

    // The components that we will use. For now, 
    // we only need the main app component.
    components: {
        App
    },

    // This is the data that is available for the view. We can
    // use it in any methods as well.
    data: {
        name: "My App"
    }
});