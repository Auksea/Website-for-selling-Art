import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://art-bernadeta.ch:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Server response:', response);

      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
        setError('');
        setSuccess(true);
      } else {
        console.error('Error sending email');
        setError(t('contact.error'));
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      console.error('Error sending email:', error);
      setError(t('contact.unexpectedError'));
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="row">
        <div className="contact-form">
          <h4>{t('contact.title')}</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t('contact.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder={t('contact.email')}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder={t('contact.message')}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? t('contact.submitting') : t('contact.submit')}
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{t('contact.success')}</div>}
          </form>
        </div>
      </div>
      <div className="row">
        <div className="google-maps">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54742.30162992537!2d6.61148313559679!3d46.54310131578654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c293ecd89a7e5%3A0xeb173fc9cae2ee5e!2sLausanne%2C%20Switzerland!5e0!3m2!1sen!2sdk!4v1712048957957!5m2!1sen!2sdk"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

