import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get EmailJS credentials from environment variables
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // Check if all credentials are available
      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS credentials not configured');
      }

      // Initialize EmailJS with your public key
      emailjs.init(publicKey);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'zwinterfeldtt25@gmail.com'
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback function for mailto (in case EmailJS isn't configured yet)
  const handleMailtoFallback = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:zwinterfeldtt25@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      {/* Contact Header */}
      <section style={{ 
        padding: '4rem 2rem 2rem', 
        textAlign: 'center',
        backgroundColor: '#f8f9fa' 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          Get In Touch
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          I'd love to hear from you! Whether you have a project idea, want to collaborate, 
          or just want to say hello, feel free to reach out.
        </p>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row">
                {/* Contact Info */}
                <div className="col-md-6 mb-4">
                  <div style={{ 
                    padding: '2rem', 
                    backgroundColor: '#fff', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    height: '100%'
                  }}>
                    <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Contact Information</h3>
                    
                    <div className="mb-4">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📧</span>
                        <div>
                          <h5 style={{ margin: 0, color: '#495057' }}>Email</h5>
                          <a 
                            href="mailto:zwinterfeldt25@gmail.com"
                            style={{ color: '#007bff', textDecoration: 'none' }}
                          >
                            zwinterfeldt25@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📍</span>
                        <div>
                          <h5 style={{ margin: 0, color: '#495057' }}>Location</h5>
                          <p style={{ margin: 0, color: '#6c757d' }}>Minneapolis, Minnesota</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>💼</span>
                        <div>
                          <h5 style={{ margin: 0, color: '#495057' }}>Available For</h5>
                          <p style={{ margin: 0, color: '#6c757d' }}>
                            Full-time opportunities, freelance projects, collaborations
                          </p>
                        </div>
                      </div>
                    </div>

                    <div style={{ 
                      marginTop: '2rem', 
                      padding: '1rem', 
                      backgroundColor: '#e7f3ff', 
                      borderRadius: '6px',
                      border: '1px solid #007bff'
                    }}>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#495057' }}>
                        <strong>Response Time:</strong> I typically respond within 48 hours!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-md-6 mb-4">
                  <div style={{ 
                    padding: '2rem', 
                    backgroundColor: '#fff', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    height: '100%'
                  }}>
                    <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Send a Message</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ fontWeight: '500' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{ padding: '0.75rem' }}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontWeight: '500' }}>
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{ padding: '0.75rem' }}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label" style={{ fontWeight: '500' }}>
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What's this about?"
                          style={{ padding: '0.75rem' }}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="form-label" style={{ fontWeight: '500' }}>
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell me about your project, question, or just say hi!"
                          style={{ padding: '0.75rem' }}
                        />
                      </div>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="alert alert-success mb-3" role="alert">
                          ✅ Message sent successfully! I'll get back to you soon.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="alert alert-warning mb-3" role="alert">
                          ⚠️ EmailJS not configured yet. Using fallback method...
                        </div>
                      )}

                      <div className="d-flex gap-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                          style={{ 
                            flex: 1,
                            padding: '0.75rem',
                            fontSize: '1.1rem',
                            fontWeight: '500'
                          }}
                        >
                          {isSubmitting ? '🔄 Sending...' : '📧 Send Directly'}
                        </button>
                        
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={handleMailtoFallback}
                          style={{ 
                            flex: 1,
                            padding: '0.75rem',
                            fontSize: '1.1rem',
                            fontWeight: '500'
                          }}
                        >
                          � Open Email Client
                        </button>
                      </div>
                    </form>

                    <div style={{ 
                      marginTop: '1rem', 
                      padding: '1rem',
                      backgroundColor: '#e7f3ff',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}>
                      <p style={{ margin: '0 0 0.5rem 0', fontWeight: '500', color: '#495057' }}>
                        Two sending options:
                      </p>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#6c757d' }}>
                        • <strong>Send Directly:</strong> Sends email immediately from the browser (requires setup)
                      </p>
                      <p style={{ margin: 0, color: '#6c757d' }}>
                        • <strong>Open Email Client:</strong> Opens your default email app with message pre-filled
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;