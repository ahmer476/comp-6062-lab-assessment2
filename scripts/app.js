/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {

        };
    },
    /// Define the methods for the app
    methods: {
        activeStatusLevel(waterLevel) {
            /// Logic here for if the water level is within the level parameters return boolean
        }
    }
});

/// Mount the Vue app to the div with id "app"
app.mount('#app');
