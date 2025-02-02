import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // we make a schema of order item and here array is storing all details of schema like quantity and from product schema it is fetching all details of product
    orderItems: {
      type: [orderItemSchema],
      //   type: [
      //     {
      //     productID: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: 'Product',
      //     },
      //     quantity: {
      //       type: Number,
      //       required: true,
      //     },
      //   }
      // ]
      address: {
        type: string,
        required: true,
      },
      state: {
        type: string,
        //  en 3 mai se hi choose karna hai
        enum: ['PENDING', 'DELIVERED', 'CANCELLED'],
        default: 'PENDING',
      },
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model.Schema('Order', orderSchema);
