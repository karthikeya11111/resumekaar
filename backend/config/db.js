// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://eeenglishmen:Venky2005.,M@cluster0.iythfpz.mongodb.net/Venkyr')
//         .then(() => console.log(" MongoDB Connected Broh...!"))
//         .catch((err) => {
//             console.error("MongoDB connection error:.....Venky", err);
//             process.exit(1); // Optional: exit app if DB fails
//         });
// };


import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI environment variable");
    process.exit(1);
  }

  await mongoose.connect(uri)
    .then(() => console.log("MongoDB Connected Broh...!"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
};
