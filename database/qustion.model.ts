import {model, Schema, models, Document} from "mongoose";


export interface IQuestion extends Document {
    titile: string,
    content: string,
    tags: Schema.Types.ObjectId[],
    views: number,
    upvotes: Schema.Types.ObjectId[],
    downvotes: Schema.Types.ObjectId[],
    auther: Schema.Types.ObjectId[],
    answer:Schema.Types.ObjectId[],
    createdAt: Date
}

const QuestionSchema = new Schema({
    titile:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    tags:{
        ref:"Tag",
        type: Schema.Types.ObjectId
    },
    upvotes:{
        ref:"User",
        type: Schema.Types.ObjectId
    },
    downvotes:{
        ref:"User",
        type: Schema.Types.ObjectId
    },
    author:{
        ref:"User",
        type: Schema.Types.ObjectId
    },
    answers:{
        ref:"Answer",
        type: Schema.Types.ObjectId
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Question = models.Qustion || model("Qustion", QuestionSchema);

export default Question