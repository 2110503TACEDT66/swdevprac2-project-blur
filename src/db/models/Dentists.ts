import mongoose from "mongoose";

const DentistSchema = new mongoose.Schema(
  {
    // Information specific to a dentist
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    yearsOfExperience: {
      type: Number,
      required: [true, "Please add the years of experience"],
      max: 50, // กำหนดค่าสูงสุด
      min:1,
    },
    areaOfExpertise: {
      type: String,
      required: [true, "Please specify the area of expertise"],
    },
    imageUrl: {
      type: String,
      validate: {
        validator: (url:any) => {
          // Add validation logic for valid image URLs (e.g., using a regular expression)
          return true; // Replace with your validation logic
        },
        message: (props:any) => `${props.value} is not a valid image URL`,
      },
    },
  },
);

const Dentist = mongoose.models.Dentist || mongoose.model("Dentist", DentistSchema)
export default Dentist