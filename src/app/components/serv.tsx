"use client";

import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ServerIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

// ✅ تعريف نوع الخيار داخل كل خدمة
type Option = {
  label: string;
  type: "select" | "text" | "textarea";
  name: string;
  choices?: string[];
};

// ✅ تعريف نوع الخدمة
type Service = {
  id: number;
  name: string;
  description: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  options: Option[];
};

const services: Service[] = [
  {
    id: 1,
    name: "تصميم المواقع",
    description: "تصميم مواقع احترافية تناسب أعمالك.",
    icon: GlobeAltIcon,
    options: [
      {
        label: "نوع الموقع",
        type: "select",
        name: "siteType",
        choices: ["موقع تعريفي", "متجر إلكتروني", "مدونة", "بوابة إلكترونية"],
      },
      {
        label: "لوحة تحكم",
        type: "select",
        name: "dashboard",
        choices: ["نعم", "لا"],
      },
      {
        label: "الألوان أو ملاحظات",
        type: "textarea",
        name: "notes",
      },
    ],
  },
  {
    id: 2,
    name: "تصميم الجرافيك",
    description: "تصميم شعارات وبوسترات وبطاقات احترافية.",
    icon: PaintBrushIcon,
    options: [
      {
        label: "نوع التصميم",
        type: "select",
        name: "designType",
        choices: ["شعار", "بوستر", "بطاقة أعمال", "تصميم سوشيال ميديا"],
      },
      {
        label: "الألوان",
        type: "text",
        name: "colors",
      },
      {
        label: "أسلوب التصميم",
        type: "text",
        name: "style",
      },
    ],
  },
  {
    id: 3,
    name: "التسويق الرقمي",
    description: "حملات تسويقية ناجحة على منصات التواصل.",
    icon: MegaphoneIcon,
    options: [
      {
        label: "المنصات",
        type: "select",
        name: "platforms",
        choices: ["فيسبوك", "إنستجرام", "تويتر", "جوجل أدز"],
      },
      {
        label: "الميزانية",
        type: "text",
        name: "budget",
      },
      {
        label: "نوع الحملة",
        type: "select",
        name: "campaignType",
        choices: ["زيادة مبيعات", "زيادة زيارات", "بناء وعي بالعلامة"],
      },
    ],
  },
  {
    id: 4,
    name: "الاستضافة",
    description: "خدمات استضافة آمنة وسريعة لموقعك.",
    icon: ServerIcon,
    options: [
      {
        label: "نوع الخدمة",
        type: "select",
        name: "hostingType",
        choices: ["مشترك", "مخصص", "سحابي"],
      },
      {
        label: "المدة",
        type: "select",
        name: "duration",
        choices: ["شهر", "3 أشهر", "6 أشهر", "سنة"],
      },
      {
        label: "احتياجات خاصة",
        type: "textarea",
        name: "specialNeeds",
      },
    ],
  },
  {
    id: 5,
    name: "البوتات",
    description: "برمجة بوتات ذكية تلبي احتياجاتك.",
    icon: CubeIcon,
    options: [
      {
        label: "المنصة",
        type: "select",
        name: "platform",
        choices: ["واتساب", "تيليجرام", "فيسبوك مسنجر", "مواقع ويب"],
      },
      {
        label: "نوع البوت",
        type: "select",
        name: "botType",
        choices: ["خدمة عملاء", "تسويق", "تعليمي", "تفاعلي"],
      },
      {
        label: "تفاصيل إضافية",
        type: "textarea",
        name: "details",
      },
    ],
  },
];

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  // ✅ تم تعريف نوع service هنا
  function openModal(service: Service) {
    setSelectedService(service);
    setFormData({});
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedService(null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedService) return;

    let message = `مرحباً، أود حجز خدمة ${selectedService.name} مع التفاصيل التالية:%0A`;

    selectedService.options.forEach((opt) => {
      const val = formData[opt.name] || "لم يتم التحديد";
      message += `- ${opt.label}: ${val}%0A`;
    });

    const whatsappUrl = `https://wa.me/201556157843?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-black text-[#E6EDF3] py-10 px-4 max-w-5xl w-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">خدماتنا</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              onClick={() => openModal(service)}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-[#161B22] rounded-lg p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="h-12 w-12 text-[#58A6FF]" />
              <div>
                <h2 className="text-xl font-semibold">{service.name}</h2>
                <p className="text-sm mt-1 text-[#8B949E]">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
 
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      >
        <Dialog.Panel className="bg-[#0D1117] rounded-lg max-w-lg w-full p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-[#8B949E] hover:text-[#58A6FF] transition"
            aria-label="Close modal"
          >
            &#10005;
          </button>
          <Dialog.Title className="text-2xl font-bold mb-4">{selectedService?.name}</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto">
            {selectedService?.options.map((opt) => (
              <div key={opt.name} className="flex flex-col">
                <label className="mb-1">{opt.label}:</label>
                {opt.type === "select" && (
                  <select
                    name={opt.name}
                    onChange={handleChange}
                    value={formData[opt.name] || ""}
                    className="bg-[#161B22] border border-[#30363D] rounded-md p-2 text-[#E6EDF3] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
                    required
                  >
                    <option value="" disabled>
                      اختر
                    </option>
                    {opt.choices?.map((choice) => (
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                )}
                {opt.type === "textarea" && (
                  <textarea
                    name={opt.name}
                    onChange={handleChange}
                    value={formData[opt.name] || ""}
                    rows={3}
                    placeholder="أدخل التفاصيل هنا..."
                    className="bg-[#161B22] border border-[#30363D] rounded-md p-2 text-[#E6EDF3] resize-none focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
                  />
                )}
                {opt.type === "text" && (
                  <input
                    type="text"
                    name={opt.name}
                    onChange={handleChange}
                    value={formData[opt.name] || ""}
                    className="bg-[#161B22] border border-[#30363D] rounded-md p-2 text-[#E6EDF3] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full mt-4 bg-[#58A6FF] hover:bg-[#4178e7] text-[#0D1117] font-semibold py-2 rounded-md transition"
            >
              إرسال الطلب عبر واتساب
            </button>
          </form>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
