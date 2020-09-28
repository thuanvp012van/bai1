module.exports = {
    convertMultiMongooseToObject(data){
        return data.map((data) => data.toObject());
    },

    convertMongooseToObject(data)
    {
        return data.toObject();
    }
};
