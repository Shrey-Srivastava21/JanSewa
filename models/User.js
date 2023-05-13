import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dw2dqblhs/image/upload/v1683972719/Janseva/images_jgygs2.jpg",
  },
});

mongoose.models = {};
const User = mongoose.model('User', UserSchema);

export default User;