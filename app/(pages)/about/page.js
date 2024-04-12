import React from "react";
import Image from "next/image";

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
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center my-10">
        WHO WE ARE
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
        <div className="flex items-center justify-center w-full md:w-1/2 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          excepturi a omnis, doloribus inventore placeat quod consequuntur,
          ullam nam temporibus porro modi provident nemo nisi explicabo maiores
          aperiam accusamus labore tenetur ipsum suscipit aut laudantium ex?
          Libero culpa cum laboriosam qui nisi consectetur, ad placeat, quos
          accusamus, expedita iste assumenda? Nemo ut facere praesentium, quos
          quod error veniam neque laboriosam voluptate, provident atque
          nesciunt! Nihil similique, itaque dolor veritatis quo est molestias
          ratione reiciendis officia voluptatem molestiae quam corrupti beatae!
          Culpa consectetur eum minus earum, nobis nisi numquam quod, cum quasi
          aliquam autem atque exercitationem ratione animi doloribus sed iste
          adipisci commodi. Possimus asperiores atque itaque. At dolore in
          accusamus aut beatae deserunt, aspernatur recusandae rem ducimus
          laborum nisi ex omnis aliquam provident fuga. Voluptate vero ut
          officiis earum perspiciatis laborum cum minima aspernatur corrupti
          beatae. Dolor quibusdam eos perferendis expedita, eligendi similique
          voluptas eum reprehenderit repellat. Provident, eum! Nobis nemo labore
          aperiam nam? Tempora adipisci quam perferendis officiis inventore
          quidem temporibus neque molestias beatae iusto aperiam, ad error
          impedit alias sequi praesentium, similique sapiente voluptatem aliquid
          ratione magnam cum.
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center">
        <div className="flex items-center justify-center w-full md:w-1/2 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          excepturi a omnis, doloribus inventore placeat quod consequuntur,
          ullam nam temporibus porro modi provident nemo nisi explicabo maiores
          aperiam accusamus labore tenetur ipsum suscipit aut laudantium ex?
          Libero culpa cum laboriosam qui nisi consectetur, ad placeat, quos
          accusamus, expedita iste assumenda? Nemo ut facere praesentium, quos
          quod error veniam neque laboriosam voluptate, provident atque
          nesciunt! Nihil similique, itaque dolor veritatis quo est molestias
          ratione reiciendis officia voluptatem molestiae quam corrupti beatae!
          Culpa consectetur eum minus earum, nobis nisi numquam quod, cum quasi
          aliquam autem atque exercitationem ratione animi doloribus sed iste
          adipisci commodi. Possimus asperiores atque itaque. At dolore in
          accusamus aut beatae deserunt, aspernatur recusandae rem ducimus
          laborum nisi ex omnis aliquam provident fuga. Voluptate vero ut
          officiis earum perspiciatis laborum cum minima aspernatur corrupti
          beatae. Dolor quibusdam eos perferendis expedita, eligendi similique
          voluptas eum reprehenderit repellat. Provident, eum! Nobis nemo labore
          aperiam nam? Tempora adipisci quam perferendis officiis inventore
          quidem temporibus neque molestias beatae iusto aperiam, ad error
          impedit alias sequi praesentium, similique sapiente voluptatem aliquid
          ratione magnam cum.
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 p-3 mt-5">
          <Image
            src="/about/3.jpg"
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
