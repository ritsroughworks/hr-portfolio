import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services & RFQ', path: '/services-rfq' },
        { name: 'Careers', path: '/careers' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold font-display text-brand-primary tracking-tight">
                            Barani's<span className="text-brand-accent">HR Firm</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-brand-accent'
                                    : 'text-brand-secondary hover:text-brand-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="ml-4 px-5 py-2.5 bg-brand-primary text-white text-sm font-medium rounded-full shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all transform hover:-translate-y-0.5">
                            Get in Touch
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-secondary hover:text-brand-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-brand-accent bg-blue-50'
                                    : 'text-brand-secondary hover:text-brand-primary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold font-display text-white tracking-tight mb-6 block">
                            Barani's<span className="text-brand-accent">HR Firm</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering organizations with 20+ years of human resources expertise. Bridging the gap between human insight and modern technology.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/barani25" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            {/* <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a> */}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/services-rfq" className="hover:text-white transition-colors">Talent Strategy</Link></li>
                            <li><Link to="/services-rfq" className="hover:text-white transition-colors">Organization Design</Link></li>
                            <li><Link to="/services-rfq" className="hover:text-white transition-colors">HR Technology</Link></li>
                            <li><Link to="/services-rfq" className="hover:text-white transition-colors">Recruitment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-0.5 text-brand-accent" />
                                <span>Coimbatore,<br />Chennai,<br />Bengaluru</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-brand-accent" />
                                <span>+91 96290 14120</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-brand-accent" />
                                <span>contact.barani.hrfirm@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Barani HR Firm. All rights reserved.</p>
                    <p className="text-gray-600 text-xs mt-2 md:mt-0">Designed with precision.</p>
                </div>
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

