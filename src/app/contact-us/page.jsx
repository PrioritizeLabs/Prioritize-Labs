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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Animated background orbs - light theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[20%] w-[600px] h-[600px] bg-blue-200/35 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-[10%] w-[450px] h-[450px] bg-violet-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[60%] left-[5%] w-[350px] h-[350px] bg-amber-200/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, #475569 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative px-6 py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mb-20 md:mb-24 text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-xl px-6 py-3 mb-8 border border-emerald-200 shadow-lg shadow-emerald-100/60"
            >
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">Online & Ready to Help</span>
              <motion.div
                className="h-2 w-2 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Have a project in mind? We're here to turn your ideas into reality.
              <br className="hidden md:block" />
              <span className="text-slate-400">Get in touch and let's start the conversation.</span>
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-4 mt-10"
            >
              {[
                { icon: <Clock className="h-4 w-4 text-blue-500" />, label: "24h Response", shadow: "shadow-blue-100" },
                { icon: <Zap className="h-4 w-4 text-amber-500" />, label: "Fast Support", shadow: "shadow-amber-100" },
                { icon: <Shield className="h-4 w-4 text-emerald-500" />, label: "Secure & Private", shadow: "shadow-emerald-100" },
              ].map(({ icon, label, shadow }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-xl px-5 py-3 border border-slate-200 shadow-md ${shadow}`}
                >
                  {icon}
                  <span className="text-sm text-slate-700 font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/80 p-8 lg:p-12 border border-slate-200/80 hover:border-slate-300/80 transition-all duration-500 hover:shadow-slate-300/50">
                {!submitted ? (
                  <>
                    <div className="mb-12">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-200"
                        >
                          <MessageCircle size={24} />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                          Send us a message
                        </h2>
                      </div>
                      <p className="text-slate-500 text-lg">
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
                          <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors pointer-events-none z-10" />
                            <input
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField("")}
                              className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-slate-50/80 text-slate-800 placeholder:text-slate-400 transition-all duration-300 outline-none ${
                                focusedField === "name"
                                  ? "border-emerald-400 ring-4 ring-emerald-100 bg-white shadow-sm"
                                  : "border-slate-200 hover:border-slate-300 hover:bg-white"
                              }`}
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.75 }}
                        >
                          <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <div className="relative group">
                            <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors pointer-events-none z-10" />
                            <input
                              required
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField("")}
                              className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-slate-50/80 text-slate-800 placeholder:text-slate-400 transition-all duration-300 outline-none ${
                                focusedField === "email"
                                  ? "border-blue-400 ring-4 ring-blue-100 bg-white shadow-sm"
                                  : "border-slate-200 hover:border-slate-300 hover:bg-white"
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
                        <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                          Phone Number{" "}
                          <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                        </label>
                        <div className="relative group">
                          <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-violet-500 transition-colors pointer-events-none z-10" />
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-slate-50/80 text-slate-800 placeholder:text-slate-400 transition-all duration-300 outline-none ${
                              focusedField === "phone"
                                ? "border-violet-400 ring-4 ring-violet-100 bg-white shadow-sm"
                                : "border-slate-200 hover:border-slate-300 hover:bg-white"
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
                        <label className="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
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
                          className={`w-full px-4 py-4 rounded-xl border-2 bg-slate-50/80 text-slate-800 placeholder:text-slate-400 transition-all duration-300 resize-none outline-none ${
                            focusedField === "message"
                              ? "border-emerald-400 ring-4 ring-emerald-100 bg-white shadow-sm"
                              : "border-slate-200 hover:border-slate-300 hover:bg-white"
                          }`}
                        />
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-xs text-slate-400">
                            {formData.message.length}/500 characters
                          </div>
                          {formData.message.length > 450 && (
                            <div className="text-xs text-amber-500 font-medium">Almost at the limit!</div>
                          )}
                        </div>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-3">
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </span>
                      </motion.button>

                      {/* Response Time Info */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center gap-4 p-5 bg-emerald-50/80 rounded-xl border border-emerald-100 backdrop-blur-sm"
                      >
                        <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-100">
                          <Clock size={20} className="text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-700 font-medium mb-0.5">Quick Response Time</div>
                          <div className="text-xs text-slate-500">
                            Average response:{" "}
                            <strong className="text-emerald-600">Under 24 hours</strong>
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
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100 to-blue-100 border-2 border-emerald-300 mb-6 relative">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-emerald-200/60"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <CheckCircle size={48} className="text-emerald-500 relative z-10" />
                      </div>
                    </motion.div>
                    <h3 className="text-4xl font-bold mb-4 text-slate-800">Message Sent Successfully!</h3>
                    <p className="text-slate-500 mb-3 text-lg">
                      Thanks for reaching out. We'll get back to you shortly at
                    </p>
                    <p className="text-xl font-bold text-emerald-600 mb-10">{formData.email}</p>
                    <motion.button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", message: "" });
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-md shadow-slate-100"
                    >
                      Send another message
                      <ArrowRight size={18} />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6"
            >
              {/* Contact Information Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/60 p-8 border border-slate-200/80 hover:border-slate-300 transition-all duration-500">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                  <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
                  Contact Info
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      href: "mailto:support@yourdomain.com",
                      icon: <Mail size={18} className="text-white" />,
                      gradient: "from-emerald-500 to-blue-500",
                      shadow: "shadow-emerald-100",
                      hoverBorder: "hover:border-emerald-300",
                      hoverColor: "group-hover:text-emerald-600",
                      label: "Email",
                      value: "support@yourdomain.com",
                    },
                    {
                      href: "tel:+919876543210",
                      icon: <Phone size={18} className="text-white" />,
                      gradient: "from-blue-500 to-violet-500",
                      shadow: "shadow-blue-100",
                      hoverBorder: "hover:border-blue-300",
                      hoverColor: "group-hover:text-blue-600",
                      label: "Phone",
                      value: "+91 98765 43210",
                    },
                  ].map(({ href, icon, gradient, shadow, hoverBorder, hoverColor, label, value }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ x: 4 }}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 ${hoverBorder} transition-all duration-300 group`}
                    >
                      <div className={`bg-gradient-to-br ${gradient} p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-md ${shadow}`}>
                        {icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</div>
                        <div className={`text-sm font-medium text-slate-700 ${hoverColor} transition-colors`}>{value}</div>
                      </div>
                    </motion.a>
                  ))}

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-violet-300 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-violet-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-md shadow-violet-100">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</div>
                      <div className="text-sm font-medium text-slate-700 leading-relaxed">
                        Prioritize Labs HQ<br />
                        Agra, Uttar Pradesh<br />
                        India
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-300 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0 shadow-md shadow-amber-100">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</div>
                      <div className="text-sm font-medium text-slate-700 leading-relaxed">
                        Mon–Fri<br />
                        10:00 AM – 6:00 PM (IST)
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/60 p-8 border border-slate-200/80 hover:border-slate-300 transition-all duration-500">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Follow Us</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Stay connected for updates and insights
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      href: "#",
                      label: "LinkedIn",
                      icon: <FaLinkedin size={22} />,
                      hover: "hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-400 hover:shadow-blue-200",
                    },
                    {
                      href: "#",
                      label: "Twitter",
                      icon: <FaTwitter size={22} />,
                      hover: "hover:bg-gradient-to-br hover:from-sky-400 hover:to-sky-500 hover:text-white hover:border-sky-400 hover:shadow-sky-200",
                    },
                    {
                      href: "#",
                      label: "GitHub",
                      icon: <FaGithub size={22} />,
                      hover: "hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-800 hover:text-white hover:border-slate-600 hover:shadow-slate-200",
                    },
                  ].map(({ href, label, icon, hover }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center w-14 h-14 bg-slate-100 rounded-xl text-slate-600 transition-all duration-300 shadow-sm border border-slate-200 ${hover}`}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-500 rounded-3xl shadow-2xl shadow-blue-200/60 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "24h", label: "Response" },
                      { value: "98%", label: "Satisfied" },
                      { value: "500+", label: "Clients" },
                    ].map(({ value, label }) => (
                      <motion.div
                        key={label}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="text-center bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
                      >
                        <div className="text-3xl font-black mb-2 text-white drop-shadow">{value}</div>
                        <div className="text-xs text-white/90 font-semibold uppercase tracking-wide">{label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-200/80"
          >
            <div className="p-8 lg:p-10 border-b border-slate-200/80 bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 shadow-lg shadow-violet-200 text-white">
                  <MapPin size={28} />
                </div>
                Visit Our Office
              </h3>
              <p className="text-slate-500 mt-3 ml-16">
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
              <div className="absolute inset-0 pointer-events-none border-t border-slate-200/50" />
            </div>
          </motion.div>


        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 via-slate-50/60 to-transparent pointer-events-none" />
    </main>
  );
}