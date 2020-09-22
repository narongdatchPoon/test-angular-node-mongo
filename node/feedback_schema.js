var mongoose = require('mongoose')

var feedbackSchema = mongoose.Schema({
    username: {type: String,required: true},
    feedback: { type: String, required: true}
})


var feedbackModel = mongoose.model('feedbacks',feedbackSchema)

module.exports = feedbackModel