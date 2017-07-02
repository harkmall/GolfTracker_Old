courseSchema = new db.Schema({
    name: String,
    tees: [{
        name: String,
        slope: Number,
        rating: Number
    }],
    holes: [{
        hole: Number,
        yards: [{
            name: String,
            distance: Number
        }],
        par: Number
    }],
    location: {
        lat: Number,
        long: Number
    },
})
