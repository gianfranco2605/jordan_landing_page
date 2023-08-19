import { useState } from "react";
import Button from "../components/Button";

import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe3 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";


const Hero = () => {

  const [bigShoeImg, setBigShoeIMg] = useState(bigShoe3);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container justify-center"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-52">
        <p className="text-xl font-montserrat text-red-600">La Nostra Collezione Estiva</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Le Ultime Novità</span>
          <br />
          <span className="text-red-600 inline-block mt-3">Jordan </span> Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Scopri le eleganti novità Jordan, la qualità del comfort e l&apos;innovazione per la tua vita attiva.</p>
        <Button label="Compra Adesso" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* hero image */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeIMg(shoe)}
                bigShoeImg={bigShoeImg}
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero