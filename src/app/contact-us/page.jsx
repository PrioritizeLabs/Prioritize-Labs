"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  MessageCircle,
  ArrowRight,
  User,
  AtSign,
  PhoneCall,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced animated background elements with more variation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[20%] w-[600px] h-[600px] bg-purple-500/12 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-[10%] w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
            y: [0, -40, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Additional subtle gradient orbs */}
        <motion.div 
          className="absolute top-[60%] left-[5%] w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative px-6 py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Enhanced Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20 md:mb-24 text-center"
          >
            {/* Improved Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl px-6 py-3 mb-8 border border-white/20 shadow-xl shadow-emerald-500/5"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white tracking-wide">Online & Ready to Help</span>
              <motion.div 
                className="h-2 w-2 rounded-full bg-emerald-400"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Enhanced Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </motion.h1>
            
            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Have a project in mind? We're here to turn your ideas into reality.
              <br className="hidden md:block" />
              <span className="text-slate-500">
                Get in touch and let's start the conversation.
              </span>
            </motion.p>

            {/* Enhanced Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-4 mt-10"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 border border-white/20 shadow-lg shadow-blue-500/5"
              >
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white font-medium">24h Response</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 border border-white/20 shadow-lg shadow-yellow-500/5"
              >
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-white font-medium">Fast Support</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 border border-white/20 shadow-lg shadow-emerald-500/5"
              >
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-white font-medium">Secure & Private</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Enhanced CONTACT FORM - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-black/30">
                {!submitted ? (
                  <>
                    <div className="mb-12">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/25"
                        >
                          <MessageCircle size={24} />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          Send us a message
                        </h2>
                      </div>
                      <p className="text-slate-400 text-lg">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-7"
                    >
                      {/* Name & Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-emerald-400 transition-colors pointer-events-none z-10" />
                            <input
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField("")}
                              className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/5 backdrop-blur-sm text-white placeholder:text-slate-500 transition-all duration-300 outline-none ${
                                focusedField === "name"
                                  ? "border-emerald-500 ring-4 ring-emerald-500/20 bg-white/10 shadow-lg shadow-emerald-500/10"
                                  : "border-white/10 hover:border-white/20 hover:bg-white/10"
                              }`}
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.75 }}
                        >
                          <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <div className="relative group">
                            <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors pointer-events-none z-10" />
                            <input
                              required
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField("")}
                              className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/5 backdrop-blur-sm text-white placeholder:text-slate-500 transition-all duration-300 outline-none ${
                                focusedField === "email"
                                  ? "border-blue-500 ring-4 ring-blue-500/20 bg-white/10 shadow-lg shadow-blue-500/10"
                                  : "border-white/10 hover:border-white/20 hover:bg-white/10"
                              }`}
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Phone Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                          Phone Number <span className="text-slate-500 font-normal normal-case">(Optional)</span>
                        </label>
                        <div className="relative group">
                          <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-purple-400 transition-colors pointer-events-none z-10" />
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white/5 backdrop-blur-sm text-white placeholder:text-slate-500 transition-all duration-300 outline-none ${
                              focusedField === "phone"
                                ? "border-purple-500 ring-4 ring-purple-500/20 bg-white/10 shadow-lg shadow-purple-500/10"
                                : "border-white/10 hover:border-white/20 hover:bg-white/10"
                            }`}
                          />
                        </div>
                      </motion.div>

                      {/* Message Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.85 }}
                      >
                        <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                          Your Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, ideas, or how we can help you..."
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField("")}
                          maxLength={500}
                          rows={6}
                          className={`w-full px-4 py-4 rounded-xl border-2 bg-white/5 backdrop-blur-sm text-white placeholder:text-slate-500 transition-all duration-300 resize-none outline-none ${
                            focusedField === "message"
                              ? "border-emerald-500 ring-4 ring-emerald-500/20 bg-white/10 shadow-lg shadow-emerald-500/10"
                              : "border-white/10 hover:border-white/20 hover:bg-white/10"
                          }`}
                        />
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-xs text-slate-500">
                            {formData.message.length}/500 characters
                          </div>
                          {formData.message.length > 450 && (
                            <div className="text-xs text-yellow-400 font-medium">
                              Almost at the limit!
                            </div>
                          )}
                        </div>
                      </motion.div>

                      {/* Enhanced Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </span>
                      </motion.button>

                      {/* Enhanced Response Time Info */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center gap-4 p-5 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm"
                      >
                        <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/20">
                          <Clock size={20} className="text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium mb-0.5">
                            Quick Response Time
                          </div>
                          <div className="text-xs text-slate-400">
                            Average response: <strong className="text-emerald-400">Under 24 hours</strong>
                          </div>
                        </div>
                      </motion.div>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="mb-8"
                    >
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-400/50 mb-6 relative">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-emerald-400/20"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <CheckCircle size={48} className="text-emerald-400 relative z-10" />
                      </div>
                    </motion.div>
                    <h3 className="text-4xl font-bold mb-4 text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-400 mb-3 text-lg">
                      Thanks for reaching out. We'll get back to you shortly at
                    </p>
                    <p className="text-xl font-bold text-emerald-400 mb-10">
                      {formData.email}
                    </p>
                    <motion.button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", message: "" });
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg shadow-black/10"
                    >
                      Send another message
                      <ArrowRight size={18} />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Enhanced CONTACT INFO SIDEBAR - Takes 1 column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6"
            >
              {/* Enhanced Contact Information Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl shadow-black/10 p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
                  Contact Info
                </h3>

                <div className="space-y-3">
                  <motion.a
                    href="mailto:support@yourdomain.com"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-emerald-500 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-emerald-500/20">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Email
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                        support@yourdomain.com
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-blue-500/20">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Phone
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                        +91 98765 43210
                      </div>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-purple-500/20">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Address
                      </div>
                      <div className="text-sm font-medium text-white leading-relaxed">
                        Prioritize Labs HQ<br />
                        Agra, Uttar Pradesh<br />
                        India
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-yellow-500/20">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Business Hours
                      </div>
                      <div className="text-sm font-medium text-white leading-relaxed">
                        Mon–Fri<br />
                        10:00 AM – 6:00 PM (IST)
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Social Media Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-xl shadow-black/10 p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  Follow Us
                </h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Stay connected for updates and insights
                </p>

                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    aria-label="LinkedIn"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 border border-white/20 hover:border-blue-400"
                  >
                    <FaLinkedin size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="Twitter"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-sky-500/30 border border-white/20 hover:border-sky-400"
                  >
                    <FaTwitter size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="GitHub"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 border border-white/20 hover:border-purple-400"
                  >
                    <FaGithub size={22} />
                  </motion.a>
                </div>
              </div>

              {/* Enhanced Quick Stats */}
              <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-3xl shadow-2xl shadow-emerald-500/20 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-4xl font-black mb-2 bg-gradient-to-br from-white to-emerald-100 bg-clip-text text-transparent">24h</div>
                      <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Response</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-4xl font-black mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">98%</div>
                      <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Satisfied</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-4xl font-black mb-2 bg-gradient-to-br from-white to-purple-100 bg-clip-text text-transparent">500+</div>
                      <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Clients</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 overflow-hidden border border-white/10"
          >
            <div className="p-8 lg:p-10 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
              <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
                  <MapPin size={28} />
                </div>
                Visit Our Office
              </h3>
              <p className="text-slate-400 mt-3 ml-16">
                We'd love to meet you in person. Drop by anytime during business hours.
              </p>
            </div>
            <div className="h-96 lg:h-[500px] relative">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Agra%20India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border-t border-white/5" />
            </div>
          </motion.div>

          {/* Enhanced FAQ CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 px-10 py-7 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <p className="text-slate-400 text-lg">
                Looking for quick answers?{" "}
                <a
                  href="/faq"
                  className="font-bold text-white hover:text-emerald-400 inline-flex items-center gap-2 group transition-colors"
                >
                  Visit our FAQ
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
    </main>
  );
}

