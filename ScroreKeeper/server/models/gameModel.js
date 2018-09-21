const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    PlayerName:{
        Player1:String,
        Player2:String,
        Player3:String,
        Player4:String
    },
    Round:[{
        Score1:Number,
        Score2:Number,
        Score3:Number,
        Score4:Number,
    }]
    
});

module.exports = mongoose.model('game',GameSchema);