import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#D12727' }}>Contact Us</h2>
      <p style={{ textAlign: 'center' }}>
        We’d love to hear from you! Feel free to reach out through any of the following methods.
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3>Contact Information</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>Email:</strong> <a href="mailto:info@mogollar.com">info@mogollar.com</a></li>
          <li><strong>Phone:</strong> +90 212 555 1234</li>
          <li><strong>Address:</strong> Istiklal Street, No: 123, Istanbul, Turkey</li>
        </ul>

        <h3>Follow Us</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="https://www.facebook.com/mogollar" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/mogollar" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/mogollar" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>

        <h3>Send Us a Message</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            <span>Name:</span>
            <input type="text" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </label>
          <label>
            <span>Email:</span>
            <input type="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </label>
          <label>
            <span>Message:</span>
            <textarea name="message" rows="5" style={{ width: '100%', padding: '8px', marginTop: '5px' }}></textarea>
          </label>
          <button type="submit" style={{ padding: '10px', backgroundColor: '#D12727', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

