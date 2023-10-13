import mongoose from 'mongoose';

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.once('connected', () => {
      console.log('MongoDB database connection established successfully');
    });

    connection.error('error', (error) => {
      console.log(`Error connecting to database: ${error}`);
      process.exit();
    });
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
}
