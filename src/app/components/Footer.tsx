import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FFEAEA] via-[#FFB2B2]/75 to-[#FFB7B7]/0  w-full py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="font-medium mb-4">Web3Bridge</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/africa"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Web3Bridge Africa
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmaps"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - General */}
          <div>
            <h3 className="font-medium mb-4">General</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/community"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Join Community
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Logo */}
          <div className="flex justify-start md:justify-end items-start">
            <Image src={logo} alt="Web3Bridge Logo" width={120} height={40} />
          </div>
        </div>

        {/* Bottom section with email and social icons */}
        <div className="mt-8 pt-8  flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="mailto:Support@web3bridge.com"
            className="text-gray-600 hover:text-gray-900"
          >
            Support@web3bridge.com
          </a>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com/web3bridge"
              className="text-gray-600 hover:text-gray-900"
            >
            </Link>
            <Link
              href="https://linkedin.com/company/web3bridge"
              className="text-gray-600 hover:text-gray-900"
            >
            </Link>
            <Link
              href="https://instagram.com/web3bridge"
              className="text-gray-600 hover:text-gray-900"
            >
            </Link>
            <Link
              href="https://youtube.com/web3bridge"
              className="text-gray-600 hover:text-gray-900"
            >
            </Link>
          </div>
          <div className=" text-center text-gray-500 text-sm md:ml-24">
            © 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
