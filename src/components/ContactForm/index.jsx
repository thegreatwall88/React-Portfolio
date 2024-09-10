import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
    if (!message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      fetch('https://formspree.io/f/xgvwqrbb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      .then((response) => response.json())
      .then(() => {
        setSuccessMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        setErrors({ submit: 'Failed to send message. Please try again later.' });
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        p: 4,
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
        maxWidth: '600px',
        mx: 'auto',
        transform: 'translateZ(0)',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        Contact Me
      </Typography>

      <TextField
        fullWidth
        label="Name"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name}
        margin="normal"
        sx={{
          background: 'white',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      />

      <TextField
        fullWidth
        label="Email"
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={Boolean(errors.email)}
        helperText={errors.email}
        margin="normal"
        sx={{
          background: 'white',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      />

      <TextField
        fullWidth
        label="Message"
        id="message"
        name="message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={Boolean(errors.message)}
        helperText={errors.message}
        margin="normal"
        sx={{
          background: 'white',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
        }}
      />

      {errors.submit && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.submit}
        </Alert>
      )}

      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          transform: 'scale(1.05)',
          transition: 'transform 0.2s',
          '&:hover': {
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
            transform: 'scale(1.1)',
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
}

export default ContactForm;
