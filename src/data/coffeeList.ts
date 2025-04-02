import Expresso from "../assets/Coffees/Tradicional.svg";
import Americano from "../assets/Coffees/Americano.svg";
import Cremoso from "../assets/Coffees/Cremoso.svg";
import Gelado from "../assets/Coffees/Gelado.svg";
import CafeComLeite from "../assets/Coffees/CafeComLeite.svg";
import Latte from "../assets/Coffees/Latte.svg";
import Capuccino from "../assets/Coffees/Capuccino.svg";
import Macchiato from "../assets/Coffees/Macchiato.svg";
import Mocaccino from "../assets/Coffees/Mocaccino.svg";
import ChocolateQuente from "../assets/Coffees/ChocolateQuente.svg";
import Cubano from "../assets/Coffees/Cubano.svg";
import Havaiano from "../assets/Coffees/Havaiano.svg";
import Arabe from "../assets/Coffees/Arabe.svg";
import Irlandes from "../assets/Coffees/Irlandes.svg";

export const coffeeListData = [
  {
    id: "1",
    image: Expresso,
    tags: [{ title: "Tradicional" }],
    title: "Expresso Tradicional",
    content: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    id: "2",
    image: Americano,
    tags: [{ title: "Tradicional" }],
    title: "Expresso Americano",
    content: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    id: "3",
    image: Cremoso,
    tags: [{ title: "Tradicional" }],
    title: "Expresso Cremoso",
    content: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: "4",
    image: Gelado,
    tags: [{ title: "Tradicional" }, { title: "Gelado" }],
    title: "Expresso Gelado",
    content: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
  {
    id: "5",
    image: CafeComLeite,
    tags: [{ title: "Tradicional" }, { title: "Com leite" }],
    title: "Café com Leite",
    content: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
  },
  {
    id: "6",
    image: Latte,
    tags: [{ title: "Tradicional" }, { title: "Com leite" }],
    title: "Latte",
    content: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
  },
  {
    id: "7",
    image: Capuccino,
    tags: [{ title: "Tradicional" }, { title: "Com leite" }],
    title: "Capuccino",
    content: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
  },
  {
    id: "8",
    image: Macchiato,
    tags: [{ title: "Tradicional" }, { title: "Com leite" }],
    title: "Macchiato",
    content: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
  },
  {
    id: "9",
    image: Mocaccino,
    tags: [{ title: "Tradicional" }, { title: "Com leite" }],
    title: "Mocaccino",
    content: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: "10",
    image: ChocolateQuente,
    tags: [{ title: "Tradicional" }, { title: "Com leite" }],
    title: "Chocolate Quente",
    content: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
  },
  {
    id: "11",
    image: Cubano,
    tags: [
      { title: "Tradicional" },
      { title: "Alcoólico" },
      { title: "Gelado" },
    ],
    title: "Cubano",
    content: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
  },
  {
    id: "12",
    image: Havaiano,
    tags: [{ title: "Especial" }],
    title: "Havaiano",
    content: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
  },
  {
    id: "13",
    image: Arabe,
    tags: [{ title: "Especial" }],
    title: "Árabe",
    content: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
  },
  {
    id: "14",
    image: Irlandes,
    tags: [{ title: "Especial" }, { title: "Alcoólico" }],
    title: "Irlandês",
    content: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
  },
];
