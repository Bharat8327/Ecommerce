import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import visa from '../../assets/visa.png';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 flex gap-3">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 flex items-center gap-2"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 flex items-center gap-2"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:example@example.com"
                className="hover:text-gray-400 flex items-center gap-2"
              >
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/shipping-policy" className="hover:text-gray-400">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="/terms-conditions" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/return-policy" className="hover:text-gray-400">
                Return Policy
              </a>
            </li>
            <li>
              <a href="/emergency" className="hover:text-gray-400">
                Emergency
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row  justify-between items-center">
        <div>
          <div className="flex gap-4 ">
            <img src={visa} alt="Visa" className="h-8" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-8"
            />
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Enjoyd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
