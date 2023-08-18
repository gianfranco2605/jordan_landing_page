import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Chi Siamo" },
    { href: "#products", label: "Prodotti" },
    { href: "#contact-us", label: "Contattaci" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marchi' },
    { value: '500+', label: 'Negozi' },
    { value: '250k+', label: 'Clienti' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "€200,20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "€210,20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "€220,20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "€230,20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Spedizione Gratuita",
        subtext: "Goditi uno shopping senza problemi con il nostro servizio di spedizione gratuito."
    },
    {
        imgURL: shieldTick,
        label: "Pagamento Sicuro",
        subtext: "Fai transazioni senza preoccupazioni con le nostre opzioni di pagamento sicuro."
    },
    {
        imgURL: support,
        label: "Felici di Aiutarti",
        subtext: "Il nostro team dedicato è qui per assisterti in ogni passo."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "L'attenzione ai dettagli e la qualità del prodotto hanno superato le mie aspettative. Altamente raccomandato!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Il prodotto non solo ha soddisfatto, ma superato le mie aspettative. Sarò sicuramente un cliente fedele!"
    }
];

export const footerLinks = [
    {
        title: "Prodotti",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Aiuto",
        links: [
            { name: "Chi siamo", link: "/" },
            { name: "Domande frequenti", link: "/" },
            { name: "Come funziona", link: "/" },
            { name: "Informativa sulla privacy", link: "/" },
            { name: "Informativa sui pagamenti", link: "/" },
        ],
    },
    {
        title: "Contattaci",
        links: [
            { name: "cliente@nike.com", link: "mailto:cliente@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "logo facebook" },
    { src: twitter, alt: "logo twitter" },
    { src: instagram, alt: "logo instagram" },
];
