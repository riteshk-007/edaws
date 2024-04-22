import React from "react";

const Faq = () => {
  const faqsList = [
    {
      q: "What is the mission of EDAWS?",
      a: "Our mission is to provide quality education and opportunities to underprivileged children in the poorest states of India. We believe that education is a fundamental right and a powerful tool for breaking the cycle of poverty.",
    },
    {
      q: " How do you select the beneficiaries for your programs?",
      a: "We work closely with local communities and organizations to identify children from families living below the poverty line. Our selection process ensures that those most in need receive priority access to our educational initiatives.",
    },
    {
      q: "What types of programs do you offer?",
      a: "Our programs include establishing and maintaining schools in remote areas, providing scholarships and educational materials, offering vocational training and skill development workshops, and raising awareness about the importance of education, particularly for girls.",
    },
    {
      q: " How can I donate to your cause?",
      a: "You can make a donation through our secure online platform by visiting edaws.com/donate. We accept donations via credit card, debit car, UPI, and other popular payment methods.",
    },
    {
      q: "Are my donations tax-deductible?",
      a: " Yes, your donations to EDAWS are tax-deductible to the extent permitted by law. You will receive a receipt for your records after making a contribution.",
    },
    {
      q: " How can I ensure that my donation is being used effectively?",
      a: "We prioritize transparency and accountability in our operations. Our annual reports and financial statements are available on our website, providing a detailed breakdown of how your donations are utilized. We also welcome inquiries and are happy to share updates on our programs and their impact.",
    },
  ];
  return (
    <section className="leading-relaxed max-w-screen-xl my-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {faqsList.map((item, idx) => (
          <div className="space-y-3 mt-5" key={idx}>
            <h4 className="text-xl text-gray-700 font-medium">{item.q}</h4>
            <p className="text-gray-500">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
