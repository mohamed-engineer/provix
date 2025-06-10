// components/FaqSection.tsx
"use client";
import { useState } from "react";
import Reveal from './reveal'
const faqs = [
  { question: "ما هي مدة تنفيذ التصميم؟", answer: "عادة بين 3 إلى 7 أيام حسب نوع الطلب." },
  { question: "هل يمكن الدفع عند التسليم؟", answer: "نقبل دفعات مسبقة لضمان الجدية." },
  { question: "هل تشمل الخدمة الدعم الفني؟", answer: "نعم، نقدم دعمًا فنيًا مجانيًا لمدة شهر." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-[#0D1117] text-white py-16 px-4">

      <div className="max-w-2xl mx-auto space-y-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-center">الأسئلة الشائعة</h2>
      </Reveal>
        {faqs.map((faq, i) => (
          <Reveal key={i}>

          <div key={i} className="border-b border-gray-700">
            <button
              onClick={() => toggle(i)}
              className="w-full text-right py-3 text-lg font-medium flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <p className="text-gray-400 py-2">{faq.answer}</p>
            )}
          </div>
            </Reveal>
        ))}
      </div>
    </section>
  );
}
