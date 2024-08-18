// interface

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
