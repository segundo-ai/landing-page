import { useState } from "react";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormEmail(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formName,
        email: formEmail,
      }),
    });
    console.log(response);
    if (!response || !response.ok) {
      setResult(false);
      return;
    } else {
      setResult(true);
    }
    // Reset form fields
    setFormName("");
    setFormEmail("");
  };

  return (
    <div className="md:min-h-[422px] px-[30px] md:px-[104px] flex flex-col gap-[56px] md:gap-[104px] pt-[30px] md:pt-[100px] md:pb-[10px] md:grid md:grid-cols-2 items-center">
      <div className="w-full md:w-auto flex flex-row justify-center">
        <div className="md:min-h-[312px] w-full md:w-[70%] flex flex-col gap-[27px] md:gap-[51px]">
          <p
            className="text-[21px] md:text-[40px] leading-[100%] text-[#FFFFFF]"
            style={{ fontFamily: "Satoshi-Bold" }}
          >
            Request a free AI-readiness diagnostic
          </p>
          <p
            className="leading-[155%] text-[10px] md:text-[16px] text-[#FFFFFF]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            Our forward deployed engineering team will get to know your team and
            identify the highest ROI opportunities for AI implementation. Free
            of charge!
          </p>
          <div
            className="flex flex-row gap-[6px] md:gap-[12px] text-[#FFFFFF]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            <p className="text-[8px] md:text-[14px] leading-[100%]">
              CONTACT US
            </p>
            <div className="w-0 border-1 border-white/20"></div>
            <div className="text-[10px] md:text-[16px] flex flex-col gap-[5px]">
              <p>jose@segundo.ai</p>
              <p>andres@segundo.ai</p>
            </div>
          </div>
        </div>
      </div>
      <form
        className="w-full md:w-[90%] md:min-h-[260px] flex flex-col gap-[11px] md:gap-[20px]"
        onSubmit={handleSubmit}
      >
        <div
          className="text-[#FFFFFF] flex flex-col gap-[17px] md:gap-[32px]"
          style={{ fontFamily: "Satoshi-Regular" }}
        >
          <div className="md:gap-[16px] flex flex-col">
            <label
              htmlFor="contact-form-name"
              className="text-[10px] md:text-[18px]"
            >
              Name
            </label>
            <input
              id="contact-form-name"
              type="text"
              placeholder="Enter your name"
              onChange={handleNameChange}
              value={formName}
              className="h-[23px] md:h-[43px] text-[10px] md:text-[14px] border-b-1 border-[#FFFFFF]/20"
            ></input>
          </div>
          <div className="md:gap-[16px] flex flex-col">
            <label
              htmlFor="contact-form-email"
              className="text-[10px] md:text-[18px]"
            >
              E-mail
            </label>
            <input
              id="contact-form-email"
              type="email"
              placeholder="Enter your e-mail"
              onChange={handleEmailChange}
              value={formEmail}
              className="h-[23px] md:h-[43px] text-[10px] md:text-[14px] border-b-1 border-[#FFFFFF]/20"
            ></input>
          </div>
        </div>
        <button className="bg-[#1D1D1F] text-[#FBFBFB] leading-[100%] text-[7px] md:text-[14px] p-[9px] md:p-[16px] w-fit md:rounded-[3px]">
          Submit Message
        </button>
        {result !== null && (
          <p
            className={`${result ? "text-[#00FF00]" : "text-[#FF0000]"}
           text-[7px] md:text-[14px] mt-2`}
          >
            {result ? "Form submitted successfully!" : "Failed to submit form."}
          </p>
        )}
      </form>
    </div>
  );
}
