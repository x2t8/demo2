import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 group hover-caring-lift"
          >
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 animate-protective-pulse group-hover:animate-heartbeat" />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
              Công Dân Số An Toàn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              🏠 Trang chủ
            </Link>
            <Link
              to="/scam-types"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              🛡️ An toàn số
            </Link>
            <Link
              to="/digital-ethics"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              💜 Đạo đức số
            </Link>
            <Link
              to="/ai-safety"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              🤖 AI An toàn
            </Link>
            <Link
              to="/digital-law"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              ⚖️ Pháp luật số
            </Link>
            <Link
              to="/digital-skills"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              💻 Kỹ năng số
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 border-t" : "max-h-0"
          } bg-white dark:bg-gray-900`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-md transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ���� Trang chủ
            </Link>
            <Link
              to="/scam-types"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-red-50 font-medium rounded-md transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🛡️ An toàn số
            </Link>
            <Link
              to="/digital-ethics"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-purple-50 font-medium rounded-md transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              💜 Đạo đức số
            </Link>
            <Link
              to="/ai-safety"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-indigo-50 font-medium rounded-md transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🤖 AI An toàn
            </Link>
            <Link
              to="/digital-law"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-indigo-50 font-medium rounded-md transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ⚖️ Pháp luật s���
            </Link>
            <Link
              to="/digital-skills"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-green-50 font-medium rounded-md transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              💻 Kỹ năng số
            </Link>
            <div className="px-3 py-2 flex items-center justify-between">
              <span className="text-gray-600 font-medium">Chế độ tối:</span>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
