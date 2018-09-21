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
        Score1:number,
        Score2:number,
        Score3:number,
        Score4:number,
    }],
    timestamps:true
    
});

module.exports = mongoose.model('game',GameSchema);