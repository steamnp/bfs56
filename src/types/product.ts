//? before colon to make the property optional
// interface

export type IPerson = {
  age: number;
  name: string;
  favNum?: number;
};

interface IImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IProduct {
  image: IImage;
  name: string;
  category: string;
  price: number;
}

export interface IItem {
  item: IProduct;
}
