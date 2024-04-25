import React from "react";
import Image from "next/image";

export const metadata = {
  title:
    "About Us | EDAWS - Educational development And Agriculture Welfare Society | Donatation",
  description:
    "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",
};
const About = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <Image
          src="/about/1.jpg"
          alt="about"
          width={1920}
          height={1080}
          className="object-cover w-full md:h-[550px] filter brightness-[65%]"
        />
        <h1 className="absolute w-full md:w-auto px-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-4xl lg:text-5xl font-bold text-white">
          EDAWS - Educational development And Agriculture Welfare Society
        </h1>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center my-5 md:my-10">
        WHO WE ARE
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold text-center my-5 md:my-10">
        Edaws - Educational Development And Agriculture Welfare Society
      </h1>
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <div className="flex items-center justify-center w-full md:w-1/2 p-3">
          <Image
            src="/about/2.jpg"
            alt="about"
            width={1920}
            height={1080}
            className="object-cover rounded-md  shadow-2xl"
          />
        </div>

        <div className="flex items-start justify-center w-full md:w-1/2 p-3 flex-col">
          <h2 className="text-2xl font-semibold my-1 text-black">
            NGO&apos;s Journey
          </h2>
          <p className="text-md text-gray-800">
            Edaws - Educational Development And Agriculture Welfare Society, was
            founded with a vision to uplift the underprivileged and uneducated
            families by providing them with the tools and resources to excel in
            education and agricultural practices. Our journey began with the aim
            to address the lack of awareness and guidance that hindered the
            social and economic progress of many communities.
          </p>
          <h2 className="text-2xl font-semibold my-1 text-black">
            Purpose and Goals
          </h2>
          <p className="text-md text-gray-800">
            Our primary goal at Edaws is to promote educational development and
            modernize agriculture in order to create employment opportunities
            for individuals in society. We strive to remove social malpractices
            by empowering families below the poverty line with education and
            encourage them to reach their full potential. Our focus is on
            guiding individuals towards meaningful and sustainable paths that
            align with their abilities and interests, ultimately breaking the
            cycle of poverty.
          </p>
          <h2 className="text-2xl font-semibold my-1 text-black">
            Introduction to the Team
          </h2>
          <p className="text-md text-gray-800">
            Our team at Edaws is comprised of dedicated professionals who are
            passionate about making a positive impact in the community. From
            educators to agricultural experts, each member brings a unique set
            of skills and experiences that drive our mission forward. Together,
            we work tirelessly to support and guide individuals towards a
            brighter future.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center">
        <div className="flex items-start flex-col justify-center w-full md:w-1/2 p-3">
          <h2 className="text-2xl font-semibold my-1 text-black">Offerings</h2>
          <p className="text-md text-gray-800">
            At Edaws, we offer a wide range of educational and agricultural
            programs designed to meet the diverse needs of our beneficiaries.
            From literacy classes and vocational training to sustainable farming
            techniques, we provide comprehensive support to help individuals
            build a foundation for success. Additionally, our team offers
            personalized guidance and mentorship to ensure that each individual
            reaches their full potential.
          </p>
          <h2 className="text-2xl font-semibold my-1 text-black">
            {" "}
            Achievements
          </h2>
          <p className="text-md text-gray-800">
            Over the years, Edaws has made significant strides in promoting
            education and modernizing agriculture within the community. We have
            successfully helped numerous individuals break the cycle of poverty
            and achieve economic independence. Our dedication to providing
            awareness and guidance has resulted in tangible improvements in the
            lives of many families, making a lasting impact on the community.
          </p>
          <h2 className="text-2xl font-semibold my-1 text-black">
            Call to Action
          </h2>
          <p className="text-md text-gray-800">
            Join us in our mission to empower individuals through education and
            agriculture. Whether you are looking for support in your academic
            journey or seeking guidance in agricultural practices, Edaws is here
            to help. Together, we can create a brighter and more sustainable
            future for all members of society. Contact us today to learn more
            about our programs and how you can get involved. Let&apos;s make a
            difference together!
          </p>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 p-3 mt-5">
          <Image
            src="/about/3.png"
            alt="about"
            width={1920}
            height={1080}
            className="object-cover rounded-md  shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
