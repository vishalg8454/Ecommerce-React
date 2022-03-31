import { v4 as uuid } from "uuid";
import norwegian from "../../assets/images/norwegian.jpeg";
import fiveac from "../../assets/images/fiveac.jpeg";
import thinkandgrow from "../../assets/images/thinkandgrow.jpeg";
import mindset from "../../assets/images/mindset.jpeg";
import kafka from "../../assets/images/kafka.jpeg";
import diary from "../../assets/images/diary.jpeg";
import wings from "../../assets/images/wings.jpg";
import spider from "../../assets/images/spider.jpeg";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Five AM Club",
    price: "340",
    categoryName: "selfhelp",
    includeStock:true,
    image: fiveac
  },
  {
    _id: uuid(),
    title: "The Mindset",
    price: "200",
    categoryName: "selfhelp",
    includeStock:false,
    image: mindset
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    price: "210",
    categoryName: "selfhelp",
    includeStock:true,
    image: thinkandgrow
  },
  {
    _id: uuid(),
    title: "Kafka on the Shore",
    price: "312",
    categoryName: "fiction",
    includeStock:true,
    image: kafka
  },
  {
    _id: uuid(),
    title: "The diary of a young girl",
    price: "113",
    categoryName: "novel",
    includeStock:true,
    image: diary
  },
  {
    _id: uuid(),
    title: "The wings of fire",
    price: "344",
    categoryName: "biography",
    includeStock:false,
    image: wings
  },
  {
    _id: uuid(),
    title: "The Spiderman",
    price: "200",
    categoryName: "comic",
    includeStock:true,
    image: spider
  },
  {
    _id: uuid(),
    title: "Norwegian Woods",
    price: "315",
    categoryName: "fiction",
    includeStock:true,
    image: norwegian
  },
];
