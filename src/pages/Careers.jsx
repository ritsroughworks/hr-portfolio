import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Upload, Send, Check } from 'lucide-react';

const jobs = [
    {
        id: 1,
        title: 'Sales Manager',
        location: 'Chennai, Tamil Nadu',
        type: 'Full-time',
        description: 'We are looking for an experienced Sales Manager with 5-10 Years of experience. Good understanding of local market is prefered. Soft drinks/FCMG sales and marketting experience is an added advantage'
    },
    {
        id: 2,
        title: 'HR Executive',
        location: 'Coimbatore, Tamil Nadu',
        type: 'Full-time',
        description: 'Specialist needed for executive search and technical recruiting initiatives.'
    },
];

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(jobs[0].title);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: 'Prefer not to say',
    });
    const [resumeFile, setResumeFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resumeFile) {
            alert("Please attach your resume.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("age", formData.age);
        data.append("gender", formData.gender);
        data.append("position", selectedJob);
        data.append("resume", resumeFile);

        try {
            // Assuming the backend is running on localhost:8000
            // In production, this URL should be an environment variable
            const response = await fetch("http://localhost:8000/apply", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Submission failed");
            }

            setSubmitStatus('success');
            setFormData({ name: '', email: '', age: '', gender: 'Prefer not to say' });
            setResumeFile(null);
            // Reset file input manually if needed, or rely on key change
        } catch (error) {
            console.error("Error submitting application:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-wider uppercase text-sm">Join the Team</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4 mt-2">Careers at Barani</h1>
                    <p className="text-xl text-brand-secondary max-w-2xl mx-auto">Build the future of work with us. We are always looking for visionary talent.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Job Listings */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6">Open Positions</h2>
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className={`
                  p-6 rounded-xl border transition-all cursor-pointer group hover:shadow-lg
                  ${selectedJob === job.title ? 'border-brand-accent bg-blue-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}
                `}
                                onClick={() => setSelectedJob(job.title)}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{job.title}</h3>
                                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">{job.type}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                    <span className="flex items-center"><MapPin size={14} className="mr-1" /> {job.location}</span>
                                    <span className="flex items-center"><Clock size={14} className="mr-1" /> Posted 2 days ago</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Application Form */}
                    <div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                            <h2 className="text-2xl font-bold text-brand-primary mb-2">Apply Now</h2>
                            <p className="text-gray-600 mb-6 text-sm">Applying for: <span className="font-bold text-brand-accent">{selectedJob}</span></p>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center">
                                    <Check size={20} className="mr-2" />
                                    <span>Application submitted successfully!</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                    <span>Failed to submit. Please check your connection or try again.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
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
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                                        <input
                                            type="number"
                                            name="age"
                                            required
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Non-binary</option>
                                            <option>Prefer not to say</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 overflow-hidden">Resume (PDF/DOC)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:bg-gray-50 transition-colors relative">
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            required
                                        />
                                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-600">
                                            {resumeFile ? resumeFile.name : "Click or drag to upload"}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">Maximum file size: 5MB</p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`
                                        w-full py-3.5 rounded-lg font-bold text-white flex items-center justify-center transition-all shadow-lg
                                        ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-primary hover:bg-brand-secondary hover:shadow-xl'}
                                    `}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send size={16} className="ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Careers;
