
import React from 'react';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Payment Successful!</h1>
      <p style={styles.message}>Thank you for your payment.</p>
      <p style={styles.message}>Have a nice day!</p>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    color: '#28a745',
    fontSize: '2em',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2em',
  },
};

export default ThankYou;