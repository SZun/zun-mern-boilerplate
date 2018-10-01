import keys from '../config/keys';

const mongooseConnection = async mongoose => {
  try {
    await mongoose.connect(keys.mongoURI);
    console.log(`Connected To MongoDB`);
  } catch (err) {
    console.log(`Error: ${err.messages}`);
  }
};

export default mongooseConnection;
