// components/ContactSection.tsx
"use client";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiMapPin } from "react-icons/ci";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">تواصل معنا</h2>
        <p className="text-gray-400">راسلنا لأي استفسار أو طلب خدمة.</p>
        <form className="space-y-4 text-right">
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="رسالتك"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-[#58A6FF] hover:bg-[#4178e7] text-black font-bold py-2 rounded"
          >
            إرسال
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-6">
          أو راسلنا مباشرة على
          <a
            href="https://wa.me/201556157843"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58A6FF] underline ml-1"
          >
            واتساب
          </a>
        </p>
        <div className="text-sm text-gray-400 space-y-1">
         <p><MdOutlineMailOutline />  info@youragency.com</p>
         <p> <FaPhoneAlt /> +20 123 456 7890</p>
        <p><CiMapPin /> Alexandria , Egypt</p>
        </div>
      </div>
    </section>
  );
}
