import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: String,
    author: String,
    tags: {
      type: Array,
    },
    message: String,
    isPublished: Boolean,
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;
