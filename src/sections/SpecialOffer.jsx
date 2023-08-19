import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
           src={offer}
           width={773}
           height={687}
           className='object-contain w-full'
        />
      </div>
      <div className="flex flex-1 flex-col">
      
      <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
        <span className="text-red-600"> Offerte </span>
        Speciali
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">Intraprendi un viaggio di shopping che ridefinisce la tua esperienza con offerte imbattibili. Dalle selezioni di prima classe ai risparmi incredibili, offriamo un valore senza paragoni che ci distingue.</p>
      <p className="mt-6 lg:max-w-lg info-text">Esplora un mondo di possibilità progettate per soddisfare i tuoi desideri unici, superando le aspettative più alte. Il tuo viaggio con noi è davvero straordinario.</p>
      <div className="flex flex-wrap mt-11 gap-4">
        <Button label="Compra Ora" iconURL={arrowRight} />
        <Button label="Di Più" iconURL={arrowRight} backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
      </div>
      
    </div>
    </section>
  )
}

export default SpecialOffer