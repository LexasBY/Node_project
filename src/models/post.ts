import mongoose from "mongoose";

const Post = new mongoose.Schema({ 
  name: {type: 'String', required: true},
  user_id: {type: 'String', required: true, unique: true}
})

export default mongoose.model('Post', Post)