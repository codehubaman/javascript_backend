import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    price:{
      type:Number,
      default:0
    },
    stock:{
      type:Number,
      default:0
    },
    category:{
     type:mongoose.Schema.Types.ObjectID,
     ref ="Category",
     required:true,
    },
   
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', ProductSchema);
