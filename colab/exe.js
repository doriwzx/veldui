// main.js

const { writeConfig } = require('./configHelper');

const config = {
    database: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password'
    },
    server: {
        port: 8080
    }
};

writeConfig('config.json', config);
