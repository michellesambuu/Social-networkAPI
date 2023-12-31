const {Schema, model}= require("mongoose");
const dateFormat= require("../utils/dateFormat");
const reactionSchema = require('./Reaction')


const thoughtSchema =new Schema(
    {
        thoughtWords:{
            type: String,
            required: true,
            maxlength: 280,
            minlength:1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:timestamp=>dateFormat(timestamp)
        },
        username:{
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON:{
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
});

const Thought =model("Thought", thoughtSchema)

module.exports= Thought;