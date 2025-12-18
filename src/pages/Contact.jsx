import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Check } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactNumber: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Assuming the backend is running on localhost:8000
            const response = await fetch("http://localhost:8000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            setSubmitStatus('success');
            setFormData({ companyName: '', contactNumber: '', email: '', message: '' });
        } catch (error) {
            console.error('FAILED...', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-brand-secondary max-w-2xl mx-auto">Get in touch with our expert team.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-brand-primary mb-8">Reach Out</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="p-3 bg-brand-light rounded-lg mr-4 text-brand-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary mb-1">Locations</h3>
                                    <p className="text-gray-600">Coimbatore, Chennai, Bengaluru</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="p-3 bg-brand-light rounded-lg mr-4 text-brand-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary mb-1">Phone</h3>
                                    <p className="text-gray-600">+91 96290 14120</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="p-3 bg-brand-light rounded-lg mr-4 text-brand-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-primary mb-1">Email</h3>
                                    <p className="text-gray-600">contact.barani.hrfirm@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-brand-light p-8 rounded-2xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6">Send a Message</h2>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center">
                                <Check size={20} className="mr-2" />
                                <span>Message sent successfully!</span>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                <span>Failed to send message. Please try again.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    required
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                    placeholder="Company Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    required
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-brand-accent text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
