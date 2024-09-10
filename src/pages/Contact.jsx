import ContactForm from '../components/ContactForm';

function ContactPage() {
  const handleFormSubmit = (formData) => {
    alert('Form submitted.');
  };

  return (
    <div>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default ContactPage;
