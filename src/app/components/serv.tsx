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


const services: Service[] = [
  {
    id: 1,
    name: "Web Design",
    description: "Professional website design tailored to your business.",
    icon: GlobeAltIcon,
    options: [
      {
        label: "Website Type",
        type: "select",
        name: "siteType",
        choices: ["Landing Page", "E-commerce Store", "Blog", "Web Portal"],
      },
      {
        label: "Admin Dashboard",
        type: "select",
        name: "dashboard",
        choices: ["Yes", "No"],
      },
      {
        label: "Colors or Notes",
        type: "textarea",
        name: "notes",
      },
    ],
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "Professional design for logos, posters, and business cards.",
    icon: PaintBrushIcon,
    options: [
      {
        label: "Design Type",
        type: "select",
        name: "designType",
        choices: ["Logo", "Poster", "Business Card", "Social Media Design"],
      },
      {
        label: "Preferred Colors",
        type: "text",
        name: "colors",
      },
      {
        label: "Design Style",
        type: "text",
        name: "style",
      },
    ],
  },
  {
    id: 3,
    name: "Digital Marketing",
    description: "Effective marketing campaigns on social media platforms.",
    icon: MegaphoneIcon,
    options: [
      {
        label: "Platforms",
        type: "select",
        name: "platforms",
        choices: ["Facebook", "Instagram", "Twitter", "Google Ads"],
      },
      {
        label: "Budget",
        type: "text",
        name: "budget",
      },
      {
        label: "Campaign Type",
        type: "select",
        name: "campaignType",
        choices: ["Sales Increase", "Website Traffic", "Brand Awareness"],
      },
    ],
  },
  {
    id: 4,
    name: "Hosting",
    description: "Secure and fast hosting services for your website.",
    icon: ServerIcon,
    options: [
      {
        label: "Hosting Type",
        type: "select",
        name: "hostingType",
        choices: ["Shared", "Dedicated", "Cloud"],
      },
      {
        label: "Duration",
        type: "select",
        name: "duration",
        choices: ["1 Month", "3 Months", "6 Months", "1 Year"],
      },
      {
        label: "Special Requirements",
        type: "textarea",
        name: "specialNeeds",
      },
    ],
  },
  {
    id: 5,
    name: "Bots",
    description: "Smart bots programmed to meet your needs.",
    icon: CubeIcon,
    options: [
      {
        label: "Platform",
        type: "select",
        name: "platform",
        choices: ["WhatsApp", "Telegram", "Facebook Messenger", "Websites"],
      },
      {
        label: "Bot Type",
        type: "select",
        name: "botType",
        choices: ["Customer Service", "Marketing", "Educational", "Interactive"],
      },
      {
        label: "Additional Details",
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
    <section className='bg-black'>
     <Reveal>
      <h1 className="text-3xl font-bold mb-10 text-center" >Our Services</h1>
     </Reveal>
    <div className="bg-black text-[#E6EDF3] py-10 px-4 w-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Reveal key={service}>
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
