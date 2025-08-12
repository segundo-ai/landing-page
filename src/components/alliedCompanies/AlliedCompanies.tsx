import styles from "./AlliedCompanies.module.css";

export default function AlliedCompanies() {
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "Apple",
    "Tesla",
    "Netflix",
    "Spotify",
    "Adobe",
  ];
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="overflow-hidden px-[40px] h-[76px]">
      <div className="relative">
        {/* Scrolling container */}
        <div className={`flex ${styles.animateScroll}`}>
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[215px] h-full flex items-center justify-center"
            >
              <div className="px-[20px] py-[15px] text-gray-500 font-medium text-lg whitespace-nowrap hover:text-gray-700 transition-colors duration-300">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
