import { v4 as uuid } from "uuid";
import norwegian from "../../assets/images/norwegian.jpeg";
import fiveac from "../../assets/images/fiveac.jpeg";
import thinkandgrow from "../../assets/images/thinkandgrow.jpeg";
import mindset from "../../assets/images/mindset.jpeg";
import kafka from "../../assets/images/kafka.jpeg";
import diary from "../../assets/images/diary.jpeg";
import wings from "../../assets/images/wings.jpg";
import spider from "../../assets/images/spider.jpeg";
import time_machine from "../../assets/images/time_machine.jpg";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Five AM Club",
    price: 342,
    originalPrice: 410,
    categoryName: "selfhelp",
    includeStock: true,
    image: fiveac,
    rating:5
  },
  {
    _id: uuid(),
    title: "The Time Machine",
    price: 120,
    originalPrice: 192,
    categoryName: "scifi",
    includeStock: true,
    image: time_machine,
    rating:3
  },
  {
    _id: uuid(),
    title: "The Mindset",
    price: 200,
    originalPrice: 333,
    categoryName: "selfhelp",
    includeStock: false,
    image: mindset,
    rating:5
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    price: 210,
    originalPrice: 267,
    categoryName: "selfhelp",
    includeStock: true,
    image: thinkandgrow,
    rating:3
  },
  {
    _id: uuid(),
    title: "Kafka on the Shore",
    price: 312,
    originalPrice: 411,
    categoryName: "fiction",
    includeStock: true,
    image: kafka,
    rating:4
  },
  {
    _id: uuid(),
    title: "The diary of a young girl",
    price: 113,
    originalPrice: 211,
    categoryName: "novel",
    includeStock: true,
    image: diary,
    rating:2
  },
  {
    _id: uuid(),
    title: "The wings of fire",
    price: 344,
    originalPrice: 534,
    categoryName: "biography",
    includeStock: true,
    image: wings,
    rating:5
  },
  {
    _id: uuid(),
    title: "The Spiderman",
    price: 200,
    originalPrice: 278,
    categoryName: "comic",
    includeStock: true,
    image: spider,
    rating:3
  },
  {
    _id: uuid(),
    title: "Norwegian Woods",
    price: 315,
    originalPrice: 418,
    categoryName: "fiction",
    includeStock: true,
    image: norwegian,
    rating:4
  },
];
