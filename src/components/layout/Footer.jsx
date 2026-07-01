import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/polsze", 
      label: "GitHub" 
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/pablo-barrios-2ba888231/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/pbxdigital_/",
      label: "Instagram",
    }
  ];

  return (
    <footer className="bg-dark-light border-t border-tertiary-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Pablo Barrios</h3>
            <p className="text-white/40 text-sm">
              Editor de Video & Diseñador Gráfico
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary-500 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-white/40 text-sm">
              © {currentYear} Pablo Barrios. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;