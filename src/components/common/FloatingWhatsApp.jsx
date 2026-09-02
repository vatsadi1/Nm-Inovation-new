import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const phoneNumber = "+917065985868";
  const message = "Hello, I’m interested in Digital solutions for my Business.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp-pill"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      <span className="whatsapp-text">Chat</span>
    </a>
  );
};

export default FloatingWhatsApp;
