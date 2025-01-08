const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']  // Email validation
    },
    password: { 
        type: String, 
        required: true,
        minlength: 6  // Password must have at least 6 characters
    },
    role: { 
        type: String, 
        default: "user", 
        enum: ['user', 'admin'],  // Admin role validation
    },
    points: { 
        type: Number, 
        default: 0 
    },
    ecoActivities: [
        { 
            type: String,  // This could be `imageUpload`, `quizAnswer`, etc.
        }
    ],
});

module.exports = mongoose.model('User', userSchema);
