import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-white pt-16 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <Image
                  src="/assets/dlclogo.png"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                WINNING IN WARFARES
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A prophetic and deliverance conference designed to equip believers
              with divine weapons for supernatural victory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Conference
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Program Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+61 461 427 265</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">
                  info@dclm-au.org
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  49-51 Cameron Street, Cranbourne
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Connect With Us
            </h4>
            {/* <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div> */}
            <p className="text-gray-500 text-xs">
              © 2026 Winning in Warfares. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Powered by Deeper Life Bible Church | Worship • Word • Warfare •
            Winners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
