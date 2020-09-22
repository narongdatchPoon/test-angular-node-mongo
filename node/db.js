var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/test_db',{useNewUrlParser:true})

mongoose.connection.on('connected',function(){
    console.log('mongoose default connection open...')
})

mongoose.connection.on('error',function(){
    console.log('mongoose default connection error...')
})

mongoose.connection.on('disconnected',function(){
    console.log('mongoose default connection disconnected...')
})

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection discounnected through app termination')
        process.exit(0)
    })
})



