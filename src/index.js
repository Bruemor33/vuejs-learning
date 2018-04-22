const vue = require('vue');

// Declaritive Rendering
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    // App2 is using v-bind, this is a directive
    // Directives are prefixed by a v- to indicate they are special
    // attributes provided by vue. They apply reactive behavior to the DOM
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleDateString()
    }
})

// Conditionals and Loops
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: "learn javascript" },
            { text: "learn VueJS" },
            { text: "Build Something Awesome" }
        ]
    }
})

// Handling User Input
var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue!'
    },
    // In this method we update the state of our app without touching the DOM
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// Vue also provides the v-model directive that makes two way binding between
// form input and app state a breeze.
var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello you meme loving fuck.'
    }
})