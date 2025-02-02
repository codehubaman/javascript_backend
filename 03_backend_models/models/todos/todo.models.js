import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    //  yaha apan do schema ko connect kar rhe hai
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
// array of subtodos 
    subtTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo'
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
