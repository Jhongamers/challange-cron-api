import mongoose, { Schema } from 'mongoose';

const history = new Schema({

    name:{
        type: String,
        required:true,
    }


})

export default mongoose.model('history', history);