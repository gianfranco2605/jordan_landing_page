import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl text-palanquin fontbold">I Più <span className="text-red-600">Venduti</span></h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Vivi un&apos;esperienza di qualità e stile di prim&apos;ordine con le nostre ambitissime selezioni. Scopri un mondo di comfort, design e valore.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => ( 
          <PopularProductCard 
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts