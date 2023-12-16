import mongoose from "mongoose";


const schema = new mongoose.Schema({
    Mname: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    myfile: {
      type: Buffer, 
      required: true,
    },
  });
  
  export default mongoose.model('files', schema);
  