import React, { useState } from 'react';
import { Mail, Send, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface Props {
  onNavigate: (route: string) => void;
}

export const ContactPage: React.FC<Props> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'letter_to_editor',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      <Breadcrumbs
        items={[{ label: 'Contact & Editorial Desk' }]}
        onNavigate={onNavigate}
      />

      <header className="border-b border-[#E8E1D5] pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2926]">
          Editorial Inquiries & Medical Desk
        </h1>
        <p className="text-base text-[#6A6560] max-w-2xl leading-relaxed">
          Have a letter for the editor, a suggestion for an in-depth clinical topic, or a scientific correction? We welcome thoughtful dialogue from readers, researchers, and physicians.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="p-8 bg-[#EEF3EF] rounded-2xl border border-[#C5D7C9] text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#586F60] text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C2926]">
                Message Received
              </h3>
              <p className="text-xs text-[#536D5A] leading-relaxed max-w-sm mx-auto">
                Thank you for contacting the JADORESHREY WELLNESS editorial desk. Our team reviews all reader correspondence and clinical feedback within 2 business days.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', department: 'letter_to_editor', subject: '', message: '' });
                }}
                className="text-xs font-semibold text-[#8C533C] hover:underline pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E1D5] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#2C2926] mb-2">
                Write to the Desk
              </h3>

              <div>
                <label className="block text-xs font-semibold text-[#5A3825] uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Sen"
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3825] uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. ananya@example.com"
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3825] uppercase tracking-wider mb-1">
                  Department
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926]"
                >
                  <option value="letter_to_editor">Letter to the Editor (General)</option>
                  <option value="medical_correction">Medical / Scientific Citation Query</option>
                  <option value="story_pitch">Reader Story / Wellness Journey</option>
                  <option value="press">Press & Media Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3825] uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Summary of your inquiry"
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3825] uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, suggestions, or feedback in detail..."
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#5A3825] hover:bg-[#462B1C] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Correspondence</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] space-y-3">
            <h4 className="font-serif text-base font-bold text-[#2C2926]">
              Direct Email Contacts
            </h4>
            <div className="space-y-2 text-xs text-[#6A6560]">
              <div>
                <span className="font-semibold text-[#5A3825] block">Editor-in-Chief:</span>
                <span>editor@jshreywellness.com</span>
              </div>
              <div>
                <span className="font-semibold text-[#5A3825] block">Medical Fact-Checking Desk:</span>
                <span>medical@jshreywellness.com</span>
              </div>
              <div>
                <span className="font-semibold text-[#5A3825] block">Community & Letters:</span>
                <span>letters@jshreywellness.com</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] space-y-2 text-xs text-[#6A6560]">
            <h4 className="font-serif text-base font-bold text-[#2C2926]">
              Clinical Corrections Policy
            </h4>
            <p className="leading-relaxed">
              We take scientific rigor seriously. If you identify an outdated citation, a misinterpreted study, or a dosage discrepancy, please select "Medical / Scientific Citation Query" with the exact journal citation. We review and amend articles within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
