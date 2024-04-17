import { GiOpenBook } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";

const Mission = () => {
  const contactMethods = [
    {
      icon: <GiOpenBook />,

      desc: "Empower Dreams, Ignite Futures: With Your Donation, We Provide Education and Books to India's Underprivileged Children. Together, Let's Script a Brighter Tomorrow.",
    },
    {
      icon: <GiGraduateCap />,

      desc: "Transforming Lives, One Book at a Time: Your Contribution Brings Education to the Doorsteps of India's Underserved Youth. Join Us in Building a Foundation for Their Future Success.",
    },
  ];
  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
        <div className="max-w-md">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl uppercase">
            We are In a Mission Need To Help
          </h3>
          <p className="mt-3">
            We use donations to educate underprivileged children, transforming
            lives.
          </p>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12"
              >
                <div className="w-12 h-12 text-2xl rounded-full border flex items-center justify-center text-gray-700">
                  {item.icon}
                </div>

                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
