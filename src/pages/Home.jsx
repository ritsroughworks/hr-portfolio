import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Zap, Shield, TrendingUp, Cpu, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // --- CHANGE START: Updated Data Source ---
    const defaultClients = [
        { src: '/assets/logo-ritsware.png', alt: 'Ritsware' },
        { src: '/assets/logo-havells.svg', alt: 'Havells India Ltd' },
        { src: '/assets/logo-erpmark.png', alt: 'ERP Mark Inc' },
        { src: '/assets/logo-themesoft.png', alt: 'Themesoft India Limited' },
        { src: '/assets/logo-softcrylic.png', alt: 'Softcrylic Technologies Ltd' },
        { src: '/assets/logo-informatics.png', alt: 'Informatics Technologies Inc' },
        { src: '/assets/logo-tnau.png', alt: 'Tamil Nadu Agricultural University' },
        { src: '/assets/logo-teksystems.svg', alt: 'TEK Systems' },
        { src: '/assets/logo-hcl.png', alt: 'HCL America' },
        { src: '/assets/logo-macmillan.jpg', alt: 'Macmillan' },
        { src: '/assets/logo-etsy.png', alt: 'ETSY' },
        { src: '/assets/logo-delta.svg', alt: 'Delta Air' },
        { src: '/assets/logo-toyota.svg', alt: 'Toyota' },
        { src: '/assets/logo-mercedes.png', alt: 'Mercedes Benz' },
        { src: '/assets/logo-carlson.png', alt: 'Carlson Rezidor (Radisson, Park Plaza)' },
        { src: '/assets/logo-cognizant.png', alt: 'Cognizant' },
        { src: '/assets/logo-dowjones.svg', alt: 'Dow Jones' },
        { src: '/assets/logo-att.svg', alt: 'AT&T' },
        { src: '/assets/logo-avaya.png', alt: 'Avaya' },
        { src: '/assets/logo-pepsico.svg', alt: 'PepsiCo' },
        { src: '/assets/logo-shell.png', alt: 'Shell Lubricants' },
        { src: '/assets/logo-target.svg', alt: 'Target Corp' },
    ];
    // --- CHANGE END ---

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-light pt-20 pb-32 lg:pt-32 lg:pb-40">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">A Demand Generation HR Consultancy</h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-1.5 mb-8 border border-blue-100"
                        >
                            <span className="text-blue-900 text-sm font-medium">Technology accelerates the process.
                                Human wisdom defines the direction.</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold font-display text-brand-primary leading-tight mb-8"
                        >
                            Where Human Insight <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Meets Innovation</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-brand-secondary mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            Barani HR Firm brings over 20 years of industry expertise. We believe technology empowers, but human wisdom leads. Experience the perfect balance of premium consultancy and modern efficiency.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link to="/services-rfq" className="px-8 py-4 bg-brand-primary text-white text-lg font-medium rounded-full hover:bg-brand-secondary transition-all shadow-xl hover:shadow-2xl flex items-center justify-center group">
                                Request a Proposal
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link to="/services-rfq" className="px-8 py-4 bg-white text-brand-primary border border-gray-200 text-lg font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center">
                                Our Services
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Inspirational Message - Dark Section */}
            <section className="bg-brand-primary text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Human Element in a Digital World</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                In an era where algorithms drive decisions, we remember the heartbeat of every organization: its people. Artificial Intelligence is a tool, but empathy, intuition, and strategic foresight are uniquely human traits that no code can replicate.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At Barani, we don't just implement systems; we cultivate cultures. We are your partner in navigating the digital transformation without losing the human touch that defines true leadership.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <Users className="text-brand-accent mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">People First</h3>
                                <p className="text-sm text-gray-400">Strategies built around human potential.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm mt-8">
                                <Cpu className="text-brand-accent mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Tech Enabled</h3>
                                <p className="text-sm text-gray-400">Leveraging AI for operational excellence.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <Award className="text-brand-accent mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">20+ Years</h3>
                                <p className="text-sm text-gray-400">Two decades of proven success.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm mt-8">
                                <Globe className="text-brand-accent mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Global Vision</h3>
                                <p className="text-sm text-gray-400">World-class standards and practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Strengths */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">Core Strengths</h2>
                        <p className="text-xl text-brand-secondary max-w-2xl mx-auto">Delivering measurable outcomes through strategic excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: "Talent Strategy", desc: "Aligning workforce capabilities with business goals." },
                            { icon: Shield, title: "Organization Design", desc: "Structuring for agility, clarity, and growth." },
                            { icon: TrendingUp, title: "Change Management", desc: "Navigating transitions with minimal disruption." },
                            { icon: Zap, title: "HR Tech Impl.", desc: "Seamless integration of modern HRIS platforms." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="text-brand-accent" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                                <p className="text-brand-secondary leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Block */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-accent/5 blur-3xl"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">Our Philosophy</h2>
                                <p className="text-brand-secondary text-lg mb-8">
                                    We believe in providing relief from operational burdens. Our solutions are not just about fixing problems, but about creating seamless, tailored ecosystems where your people can thrive.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Tailored solutions for unique challenges",
                                        "Experienced HR professionals at the helm",
                                        "Seamless execution and integration",
                                        "Operational relief for leadership"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-brand-primary font-medium">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-brand-primary flex items-center justify-center">
                                {/* Abstract visual instead of image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary"></div>
                                <div className="relative z-10 text-center p-8">
                                    <span className="block text-6xl font-display font-bold text-white/10 mb-2">TRUST</span>
                                    <span className="block text-6xl font-display font-bold text-white/20 mb-2">GROWTH</span>
                                    <span className="block text-6xl font-display font-bold text-white/30">HARMONY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Showcase */}
            {/* --- CHANGE START: Updated JSX for Images --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Projects done for organizations worldwide</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
                    {defaultClients.map((client, index) => (
                        <div
                            key={index}
                            className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 group"
                        >
                            <img
                                src={client.src}
                                alt={client.alt}
                                title={client.alt}
                                className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.innerText = client.alt;
                                    e.target.parentNode.classList.add('text-xs', 'text-gray-400', 'font-bold', 'text-center');
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
            {/* --- CHANGE END --- */}

            {/* CTA Section */}
            <section className="py-24 bg-brand-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to transform your workforce?</h2>
                    <p className="text-xl text-gray-300 mb-10">Join the forward-thinking companies that trust Barani HR Firm.</p>
                    <Link to="/services-rfq" className="px-10 py-5 bg-brand-accent text-white text-lg font-bold rounded-full hover:bg-blue-500 transition-all inline-block shadow-lg hover:shadow-brand-accent/50 transform hover:-translate-y-1">
                        Start Your Journey
                    </Link>
                </div>
            </section>
        </div>
    );
};


export default Home;


