import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name should be at least 3 characters'],
    maxlength: [50, 'Name cannot be longer than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email']
  },
  age: {
    type: Number,
    min: [18, 'Age must be 18 or older'],
    max: [100, 'Age must be under 100']
  }
});

// Create and export User model
const User = mongoose.model('User', userSchema);
export default User;
