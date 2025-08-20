const mongoose = require('mongoose');

const todoSchema  = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true
        },
        description:{
                 type: String,
                 required: true ,
                 maxLength: 50
        },

    },
            { timestamps: true }
);

module.exports = mongoose.model("Todo",todoSchema)