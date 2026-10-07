// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   User,
//   Phone,
//   Mail,
//   ChevronDown,
//   ArrowRight,
//   CheckCircle2,
//   Loader2,
// } from "lucide-react";

// // ─── CONFIG ───────────────────────────────────────────────────────────────────
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGfy46V8PY5561MoiFaLQuOojdjwelF4JtgcpjXLVJGpifBFBOj2W4fwLHP9tpTfnZ/exec"; // 🔁 Replace with your deployed Apps Script URL

// const SERVICES = [
//   "Graphic Design",
//   "Video Editing",
//   "Website Development",
//   "App Development",
//   "Social Media Marketing",
//   "Digital Marketing",
//   "Video Production",
//   "Other",
// ];

// // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
// const backdropVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.25 } },
//   exit: { opacity: 0, transition: { duration: 0.2 } },
// };

// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.92, y: 24 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 380, damping: 30, delay: 0.05 },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.92,
//     y: 24,
//     transition: { duration: 0.18, ease: "easeIn" },
//   },
// };

// const fieldVariants = {
//   hidden: { opacity: 0, y: 14 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.12 + i * 0.07, duration: 0.35, ease: "easeOut" },
//   }),
// };

// const successVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 300, damping: 20 },
//   },
// };

// // ─── FIELD COMPONENT ─────────────────────────────────────────────────────────
// function Field({ icon: Icon, label, error, index, children }) {
//   return (
//     <motion.div
//       custom={index}
//       variants={fieldVariants}
//       initial="hidden"
//       animate="visible"
//       className="flex flex-col gap-1.5"
//     >
//       <label className="text-xs font-semibold tracking-widest uppercase text-black/80">
//         {label}
//       </label>
//       <div
//         className={`relative flex items-center rounded-xl border bg-violet-400/60 transition-all duration-200 ${
//           error
//             ? "border-red-500/70 "
//             : "border-violet-700/60 "
//         }`}
//       >
//         <Icon
//           size={16}
//           className={`absolute left-3.5 shrink-0 transition-colors duration-200 ${
//             error ? "text-red-400" : "text-violet-600"
//           }`}
//         />
//         {children}
//       </div>
//       <AnimatePresence>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -4 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -4 }}
//             className="text-xs text-red-600 font-medium pl-1"
//           >
//             {error}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // ─── MAIN MODAL COMPONENT ────────────────────────────────────────────────────
// export default function CTAModal({ isOpen, onClose, source = "Website CTA" }) {
//   const [form, setForm] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     service: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error

//   // Lock body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//       // Reset form when modal closes
//       setTimeout(() => {
//         setForm({ name: "", contact: "", email: "", service: "" });
//         setErrors({});
//         setStatus("idle");
//       }, 300);
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   // Close on Escape key
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === "Escape" && isOpen) onClose();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [isOpen, onClose]);

//   const validate = () => {
//     const errs = {};
//     if (!form.name.trim()) errs.name = "Your name is required";
//     if (!form.contact.trim()) {
//       errs.contact = "Contact number is required";
//     } else if (!/^[+\d\s\-()]{7,15}$/.test(form.contact.trim())) {
//       errs.contact = "Enter a valid phone number";
//     }
//     if (!form.email.trim()) {
      
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
//       errs.email = "Enter a valid email address";
//     }
//     if (!form.service) errs.service = "Please select a service";
//     return errs;
//   };

//   const handleChange = (field) => (e) => {
//     setForm((prev) => ({ ...prev, [field]: e.target.value }));
//     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
//   };

//   const handleSubmit = async () => {
//     const errs = validate();
//     if (Object.keys(errs).length) {
//       setErrors(errs);
//       return;
//     }

//     setStatus("loading");

//     try {
//       await fetch(GOOGLE_SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, source }),
//       });
//       setStatus("success");
//     } catch {
//       setStatus("error");
//     }
//   };

//   const inputClass =
//     "w-full bg-transparent pl-9 pr-4 py-3 text-sm text-black placeholder:text-black/40 outline-none rounded-xl";

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* ── Backdrop ── */}
//           <motion.div
//             key="backdrop"
//             variants={backdropVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             onClick={onClose}
//             className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
//           />

//           {/* ── Modal ── */}
//           <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
//             <motion.div
//               key="modal"
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-slate-700/50  bg-gradient-to-r from-violet-200 to-purple-200 text-white shadow-2xl shadow-black/60 overflow-hidden"
//             >
//               {/* Decorative top bar */}
//               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

//               {/* Decorative glow */}
//               <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-24 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

//               <div className="relative px-6 py-7">
//                 {/* ── Close Button ── */}
//                 <button
//                   onClick={onClose}
//                   className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-purple-800/60 transition-all duration-150"
//                   aria-label="Close"
//                 >
//                   <X size={18} />
//                 </button>

//                 {/* ── Header ── */}
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.08, duration: 0.3 }}
//                   className="mb-6"
//                 >
//                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-400/20 mb-3">
//                     <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
//                     <span className="text-xs font-semibold text-violet-600 tracking-wider uppercase">
//                       Free Consultation
//                     </span>
//                   </div>
//                   <h2 className="text-xl font-bold text-white tracking-tight">
//                     Let's Build Something Great
//                   </h2>
//                   <p className="mt-1 text-sm text-black/80">
//                     Fill in your details and we'll get back to you within 24 hours.
//                   </p>
//                 </motion.div>

//                 {/* ── Success State ── */}
//                 <AnimatePresence mode="wait">
//                   {status === "success" ? (
//                     <motion.div
//                       key="success"
//                       variants={successVariants}
//                       initial="hidden"
//                       animate="visible"
//                       className="py-8 flex flex-col items-center gap-4 text-center"
//                     >
//                       <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
//                         <CheckCircle2 size={32} className="text-green-700" />
//                       </div>
//                       <div>
//                         <p className="text-lg font-semibold text-green-700">
//                           We've got your details!
//                         </p>
//                         <p className="mt-1 text-sm text-black/80">
//                           Our team will reach out to you shortly.
//                         </p>
//                       </div>
//                       <button
//                         onClick={onClose}
//                         className="mt-2 px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-slate-200 text-sm font-medium transition-colors"
//                       >
//                         Close
//                       </button>
//                     </motion.div>
//                   ) : (
//                     <motion.div key="form" className="flex flex-col gap-4 text-black!">
//                       {/* Name */}
//                       <Field
//                         icon={User}
//                         label="Full Name"
//                         error={errors.name}
//                         index={0}
//                       >
//                         <input
//                           type="text"
//                           placeholder="Anubhav Singh"
//                           value={form.name}
//                           onChange={handleChange("name")}
//                           className={inputClass}
//                         />
//                       </Field>

//                       {/* Contact */}
//                       <Field
//                         icon={Phone}
//                         label="Contact Number"
//                         error={errors.contact}
//                         index={1}
//                       >
//                         <input
//                           type="tel"
//                           placeholder="+91 98765 43210"
//                           value={form.contact}
//                           onChange={handleChange("contact")}
//                           className={inputClass}
//                         />
//                       </Field>

//                       {/* Email */}
//                       <Field
//                         icon={Mail}
//                         label="Email Address"
//                         error={errors.email}
//                         index={2}
//                       >
//                         <input
//                           type="email"
//                           placeholder="john@example.com"
//                           value={form.email}
//                           onChange={handleChange("email")}
//                           className={inputClass}
//                         />
//                       </Field>

//                       {/* Service */}
//                       <Field
//                         icon={ChevronDown}
//                         label="Service Interested In"
//                         error={errors.service}
//                         index={3}
//                       >
//                         <select
//                           value={form.service}
//                           onChange={handleChange("service")}
//                           className={`${inputClass} appearance-none cursor-pointer`}
//                         >
//                           <option value="" disabled className="bg-[#0f1117]">
//                             Select a service…
//                           </option>
//                           {SERVICES.map((s) => (
//                             <option
//                               key={s}
//                               value={s}
//                               className="bg-[#0f1117] text-slate-100"
//                             >
//                               {s}
//                             </option>
//                           ))}
//                         </select>
//                       </Field>

//                       {/* Error message */}
//                       <AnimatePresence>
//                         {status === "error" && (
//                           <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="text-xs text-rose-400 text-center"
//                           >
//                             Something went wrong. Please try again.
//                           </motion.p>
//                         )}
//                       </AnimatePresence>

//                       {/* Submit */}
//                       <motion.button
//                         custom={4}
//                         variants={fieldVariants}
//                         initial="hidden"
//                         animate="visible"
//                         onClick={handleSubmit}
//                         disabled={status === "loading"}
//                         whileHover={{ scale: 1.015 }}
//                         whileTap={{ scale: 0.985 }}
//                         className="mt-1 w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-slate-100 text-sm font-bold tracking-wide transition-colors duration-150 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-400/20"
//                       >
//                         {status === "loading" ? (
//                           <>
//                             <Loader2 size={16} className="animate-spin" />
//                             Sending…
//                           </>
//                         ) : (
//                           <>
//                             Get Free Consultation
//                             <ArrowRight size={16} />
//                           </>
//                         )}
//                       </motion.button>

//                       <p className="text-center text-xs text-slate-600 mt-1">
//                         No spam, ever. We respect your privacy.
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           </div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGfy46V8PY5561MoiFaLQuOojdjwelF4JtgcpjXLVJGpifBFBOj2W4fwLHP9tpTfnZ/exec"; 

const SERVICES = [
  "Growth Marketing",
  "Creative Production",
  "Technology & Automation",
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 30, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 24,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.07, duration: 0.35, ease: "easeOut" },
  }),
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// ─── FIELD COMPONENT ─────────────────────────────────────────────────────────
function Field({ icon: Icon, label, error, index, children }) {
  return (
    <motion.div
      custom={index}
      variants={fieldVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-1.5"
    >
      <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
        {label}
      </label>
      <div
        className={`relative flex items-center rounded-xl border bg-white/[0.03] transition-all duration-200 focus-within:border-violet-500 focus-within:bg-white/[0.05] ${
          error
            ? "border-red-500/50"
            : "border-white/10"
        }`}
      >
        <Icon
          size={16}
          className={`absolute left-3.5 shrink-0 transition-colors duration-200 ${
            error ? "text-red-400" : "text-violet-400"
          }`}
        />
        {children}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 font-medium pl-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── MAIN MODAL COMPONENT ────────────────────────────────────────────────────
export default function CTAModal({ isOpen, onClose, source = "Website CTA" }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setForm({ name: "", contact: "", email: "", service: "" });
        setErrors({});
        setStatus("idle");
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Your name is required";
    if (!form.contact.trim()) {
      errs.contact = "Contact number is required";
    } else if (!/^[+\d\s\-()]{7,15}$/.test(form.contact.trim())) {
      errs.contact = "Enter a valid phone number";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!form.service) errs.service = "Please select a service";
    return errs;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent pl-9 pr-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none rounded-xl transition-all";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
          />

          {/* ── Modal ── */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-white/10 bg-[#13111C] text-white shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

              {/* Decorative glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-24 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative px-6 py-7">
                {/* ── Close Button ── */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all duration-150"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {/* ── Header ── */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.3 }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                      Free Consultation
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-100 tracking-tight">
                    Let&apos;s Build Something Great
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Fill in your details and we&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>

                {/* ── Content States ── */}
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      className="py-8 flex flex-col items-center gap-4 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <CheckCircle2 size={32} className="text-green-400" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-green-400">
                          We&apos;ve got your details!
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                          Our team will reach out to you shortly.
                        </p>
                      </div>
                      <button
                        onClick={onClose}
                        className="mt-2 px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" className="flex flex-col gap-4">
                      {/* Name */}
                      <Field
                        icon={User}
                        label="Full Name"
                        error={errors.name}
                        index={0}
                      >
                        <input
                          type="text"
                          placeholder="Anubhav Singh"
                          value={form.name}
                          onChange={handleChange("name")}
                          className={inputClass}
                        />
                      </Field>

                      {/* Contact */}
                      <Field
                        icon={Phone}
                        label="Contact Number"
                        error={errors.contact}
                        index={1}
                      >
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.contact}
                          onChange={handleChange("contact")}
                          className={inputClass}
                        />
                      </Field>

                      {/* Email */}
                      <Field
                        icon={Mail}
                        label="Email Address"
                        error={errors.email}
                        index={2}
                      >
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange("email")}
                          className={inputClass}
                        />
                      </Field>

                      {/* Service */}
                      <Field
                        icon={ChevronDown}
                        label="Service Interested In"
                        error={errors.service}
                        index={3}
                      >
                        <select
                          value={form.service}
                          onChange={handleChange("service")}
                          className={`${inputClass} appearance-none cursor-pointer text-gray-300`}
                        >
                          <option value="" disabled className="bg-[#13111C] text-gray-500">
                            Select a service…
                          </option>
                          {SERVICES.map((s) => (
                            <option
                              key={s}
                              value={s}
                              className="bg-[#13111C] text-gray-200"
                            >
                              {s}
                            </option>
                          ))}
                        </select>
                      </Field>

                      {/* Error message */}
                      <AnimatePresence>
                        {status === "error" && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-400 text-center"
                          >
                            Something went wrong. Please try again.
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Submit */}
                      <motion.button
                        custom={4}
                        variants={fieldVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={handleSubmit}
                        disabled={status === "loading"}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="mt-1 w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold tracking-wide transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-950/50"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Get Free Consultation
                            <ArrowRight size={16} />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-gray-500 mt-1">
                        No spam, ever. We respect your privacy.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}