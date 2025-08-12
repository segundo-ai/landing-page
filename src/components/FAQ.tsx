import { useState } from "react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0); // First item open by default

  const faqItems = [
    {
      question: "What is Segundo?",
      answer:
        "Segundo is an AI enterprise platform. We work with Fortune 500 companies, building AI backoffice automations and tools to improve decision-making. Our products are built on top of our intelligence platform and integrate with our customers' systems and data. To keep it short: we help companies get 10x ROI from AI adoption.",
    },
    {
      question: "What features does the platform include?",
      answer:
        "Our platform includes advanced AI automation tools, intelligent decision-making systems, seamless integration capabilities, and comprehensive analytics dashboards designed specifically for enterprise environments.",
    },
    {
      question: "Can Segundo help me build custom products?",
      answer:
        "Yes, we specialize in building custom AI solutions tailored to your specific business needs. Our team works closely with clients to develop bespoke products that integrate seamlessly with existing workflows and systems.",
    },
    {
      question: "How does Segundo manage data security?",
      answer:
        "Data security is our top priority. We implement enterprise-grade encryption, follow SOC 2 compliance standards, maintain strict access controls, and ensure all data processing meets industry-specific regulatory requirements.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="bg-[#303040]/50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-white text-center text-[59px]"
          style={{ fontFamily: "Satoshi-Medium" }}
        >
          FAQS
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left py-6 flex items-center justify-between text-white hover:text-gray-300 transition-colors duration-200"
              >
                <span className="text-lg font-light pr-4">{item.question}</span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      openItem === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="text-gray-300 text-base leading-relaxed pr-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
