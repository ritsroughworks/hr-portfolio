import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Send } from 'lucide-react';

const servicesData = [
    {
        id: 'talent-acquisition',
        title: 'Recruitment and Talent Acquisition',
        subdivisions: ['Executive Search', 'Volume Hiring', 'Diversity & Inclusion Recruiting', 'RPO (Recruitment Process Outsourcing)', 'Employer Branding']
    },
    {
        id: 'learning-development',
        title: 'Learning & Development',
        subdivisions: ['Leadership Development', 'Technical Skills Training', 'Soft Skills Workshops', 'Onboarding Programs', 'LMS Implementation']
    },
    {
        id: 'people-operations',
        title: 'People Operations',
        subdivisions: ['Policy Development', 'Employee Relations', 'Compliance & Risk Management', 'HR Audit', 'Workforce Planning']
    },
    {
        id: 'performance-culture',
        title: 'Performance & Culture',
        subdivisions: ['Performance Management Systems', 'Culture Transformation', 'Engagement Surveys', 'Recognition Programs', 'Values Integration']
    },
    {
        id: 'hr-tech',
        title: 'HR Technology & Automation',
        subdivisions: ['HRIS Selection & Implementation', 'Process Automation', 'People Analytics', 'Digital HR Strategy', 'AI in HR Workshops']
    },
    {
        id: 'hrbp-outsourcing',
        title: 'HRBP Outsourcing',
        subdivisions: ['Virtual HR Director', 'Interim HR Management', 'Project-based HR Support', 'Strategic HR Advisory']
    },
    {
        id: 'coworking',
        title: 'Co-working Space Solutions',
        subdivisions: ['Office Space Sourcing', 'Community Management', 'Hybrid Work Policy Design', 'Space Utilization Analysis']
    },
    {
        id: 'office-setup',
        title: 'Office Setup & Expansion Services',
        subdivisions: ['Legal Entity Setup', 'Office Compliance', 'Facility Management Setup', 'Health & Safety Audits']
    },
    {
        id: 'strategic-hr',
        title: 'Strategic HR Methodologies',
        subdivisions: ['Agile HR Transformation', 'Design Thinking in HR', 'Change Management Frameworks', 'Succession Planning']
    }
];

const ServicesRFQ = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const toggleCategory = (id) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    const handleServiceToggle = (serviceName) => {
        setSelectedServices(prev =>
            prev.includes(serviceName)
                ? prev.filter(s => s !== serviceName)
                : [...prev, serviceName]
        );
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const payload = {
            companyName: formData.companyName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            selected_services: selectedServices.join(', ')
        };

        try {
            const response = await fetch("http://localhost:8000/rfq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            setSubmitStatus('success');
            setFormData({ companyName: '', email: '', phone: '', message: '' });
            setSelectedServices([]);
        } catch (error) {
            console.error('FAILED...', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-brand-light min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">Services & Request for Quote</h1>
                    <p className="text-xl text-brand-secondary max-w-2xl mx-auto">Explore our diverse HR solutions and build your custom package.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Services Selection (Left Column) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center">
                            1. Select Services
                            <span className="ml-3 text-sm font-normal text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                                {selectedServices.length} selected
                            </span>
                        </h2>

                        {servicesData.map((category) => (
                            <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${expandedCategory === category.id ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                                >
                                    <span className="text-lg font-bold text-brand-primary">{category.title}</span>
                                    {expandedCategory === category.id ? <ChevronUp className="text-brand-accent" /> : <ChevronDown className="text-gray-400" />}
                                </button>

                                {expandedCategory === category.id && (
                                    <div className="p-6 pt-2 border-t border-gray-100 bg-white animate-fade-in">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {category.subdivisions.map((sub, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => handleServiceToggle(sub)}
                                                    className={`
                            flex items-center p-3 rounded-lg cursor-pointer border transition-all
                            ${selectedServices.includes(sub)
                                                            ? 'bg-blue-50 border-brand-accent shadow-sm'
                                                            : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-gray-50'}
                          `}
                                                >
                                                    <div className={`
                            w-5 h-5 rounded border flex items-center justify-center mr-3 transition-colors
                            ${selectedServices.includes(sub) ? 'bg-brand-accent border-brand-accent' : 'border-gray-300'}
                          `}>
                                                        {selectedServices.includes(sub) && <Check size={14} className="text-white" />}
                                                    </div>
                                                    <span className={`text-sm font-medium ${selectedServices.includes(sub) ? 'text-brand-primary' : 'text-gray-600'}`}>{sub}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Form (Right Column - Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-brand-primary mb-6">2. Your Details</h2>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center">
                                        <Check size={20} className="mr-2" />
                                        <span>Quote request sent successfully!</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                        <span>Failed to send request. Please try again or email us directly.</span>
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none"
                                            placeholder="e.g. Acme Corp"
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none"
                                            placeholder="you@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none resize-none"
                                            placeholder="Tell us about your specific needs..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={selectedServices.length === 0 || isSubmitting}
                                        className={`
                       w-full py-4 rounded-lg font-bold text-white flex items-center justify-center transition-all shadow-lg
                       ${(selectedServices.length === 0 || isSubmitting)
                                                ? 'bg-gray-300 cursor-not-allowed'
                                                : 'bg-brand-accent hover:bg-blue-600 hover:shadow-xl transform hover:-translate-y-0.5'}
                     `}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Request'} <Send size={18} className="ml-2" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesRFQ;
