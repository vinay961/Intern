import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Task name is empty before saving its desc."]
    },
    desc:{
        type:String,
        required:[true,"Add the task desc."]
    }
})

export const task = mongoose.model("task",taskSchema)