import mongoose from "mongoose";

const Post = new mongoose.Schema({
  id: {type: String, required: true},
  name: {type: String, required: true},
  user_id: {type: String, required: true}
})

export default mongoose.model('Post', Post)