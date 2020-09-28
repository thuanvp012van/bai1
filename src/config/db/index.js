const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ql_sv', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connect Success fully!!");
    } catch (error) {
        console.log("Connect failed!!!");
    }
}

module.exports = { connect };
