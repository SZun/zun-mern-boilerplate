import keys from '../config/keys';

const mongooseConnection = async mongoose => {
  try {
    await mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
    console.log(`Connected To MongoDB`);
  } catch (err) {
    console.log(`Error: ${err.messages}`);
  }
};

export default mongooseConnection;
