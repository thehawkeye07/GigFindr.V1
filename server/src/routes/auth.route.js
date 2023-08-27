const express = require('express');
const { authLogin, authLogout, authRegister, authStatus, verifyEmail } = require('../controllers/auth.controller');
const { authenticate } = require('../middlewares');

const app = express.Router();

// Register
app.post('/register', authRegister);

// Login
app.post('/login', authLogin);

// Logout
app.post('/logout', authLogout)

// Check Auth status
app.get('/me', authenticate, authStatus);

//Verify email route
app.post('/verify-email', verifyEmail);

module.exports = app;