const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 1 },
    gender: { type: String, required: true, enum: ['Male', 'Female'] },
    major: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
