import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Ti Offriamo
          <span className="text-red-600"> Scarpe </span>
          <span className="text-red-600">di eccellente </span>Qualità.
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Garantendo comfort e stile di prima classe, le nostre calzature realizzate con meticolosa cura sono progettate per elevare la tua esperienza, offrendoti qualità ineguagliabile, innovazione e un tocco di eleganza.</p>
        <p className="mt-6 lg:max-w-lg info-text">La nostra dedizione ai dettagli e all&apos;eccellenza garantisce la tua soddisfazione.</p>
        <div className="mt-11">
          <Button label="Dettagli" iconURL={arrowRight} />
        </div>
        
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality