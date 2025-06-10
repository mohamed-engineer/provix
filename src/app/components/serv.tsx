"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Reveal from './reveal';
import {
  GlobeAltIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ServerIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n"; // المسار حسب مشروعك

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
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // ← ✅ ده اللي لازم
  options: Option[];
};
 



export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

 const { t } = useTranslation("common");


const services: Service[] = [
  {
    id: 1,
    name: t("Web Design"),
    description: t("Professional website design tailored to your business."),
    icon: GlobeAltIcon,
    options: [
      {
        label: t("Website Type"),
        type: "select",
        name: "siteType",
        choices: [
          t("Landing Page"),
          t("E-commerce Store"),
          t("Blog"),
          t("Web Portal"),
        ],
      },
      {
        label: t("Admin Dashboard"),
        type: "select",
        name: "dashboard",
        choices: [t("Yes"), t("No")],
      },
      {
        label: t("Colors or Notes"),
        type: "textarea",
        name: "notes",
      },
    ],
  },
  {
    id: 2,
    name: t("Graphic Design"),
    description: t("Professional design for logos, posters, and business cards."),
    icon: PaintBrushIcon,
    options: [
      {
        label: t("Design Type"),
        type: "select",
        name: "designType",
        choices: [
          t("Logo"),
          t("Poster"),
          t("Business Card"),
          t("Social Media Design"),
        ],
      },
      {
        label: t("Preferred Colors"),
        type: "text",
        name: "colors",
      },
      {
        label: t("Design Style"),
        type: "text",
        name: "style",
      },
    ],
  },
  {
    id: 3,
    name: t("Digital Marketing"),
    description: t("Effective marketing campaigns on social media platforms."),
    icon: MegaphoneIcon,
    options: [
      {
        label: t("Platforms"),
        type: "select",
        name: "platforms",
        choices: [
          t("Facebook"),
          t("Instagram"),
          t("Twitter"),
          t("Google Ads"),
        ],
      },
      {
        label: t("Budget"),
        type: "text",
        name: "budget",
      },
      {
        label: t("Campaign Type"),
        type: "select",
        name: "campaignType",
        choices: [
          t("Sales Increase"),
          t("Website Traffic"),
          t("Brand Awareness"),
        ],
      },
    ],
  },
  {
    id: 4,
    name: t("Hosting"),
    description: t("Secure and fast hosting services for your website."),
    icon: ServerIcon,
    options: [
      {
        label: t("Hosting Type"),
        type: "select",
        name: "hostingType",
        choices: [t("Shared"), t("Dedicated"), t("Cloud")],
      },
      {
        label: t("Duration"),
        type: "select",
        name: "duration",
        choices: [
          t("1 Month"),
          t("3 Months"),
          t("6 Months"),
          t("1 Year"),
        ],
      },
      {
        label: t("Special Requirements"),
        type: "textarea",
        name: "specialNeeds",
      },
    ],
  },
  {
    id: 5,
    name: t("Bots"),
    description: t("Smart bots programmed to meet your needs."),
    icon: CubeIcon,
    options: [
      {
        label: t("Platform"),
        type: "select",
        name: "platform",
        choices: [
          t("WhatsApp"),
          t("Telegram"),
          t("Facebook Messenger"),
          t("Websites"),
        ],
      },
      {
        label: t("Bot Type"),
        type: "select",
        name: "botType",
        choices: [
          t("Customer Service"),
          t("Marketing"),
          t("Educational"),
          t("Interactive"),
        ],
      },
      {
        label: t("Additional Details"),
        type: "textarea",
        name: "details",
      },
    ],
  },
];

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


      const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        // تغيير اتجاه الصفحة
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      };
  }

  return (
    <section className='bg-black'>
     <Reveal>
      <h1 className="text-3xl font-bold mb-10 text-center" >Our Services</h1>
     </Reveal>
    <div className="bg-black text-[#E6EDF3] py-10 px-4 w-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {services.map((service ,index) => {
          const Icon = service.icon;
          return (
            <Reveal key={index}>
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
                <p className="text-sm mt-1 text-[#006b96]">Click here to choose the service!!</p>
              </div>
            </motion.div>
              </Reveal>
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
    </section>
  );
}
