interface IProduct {
  image: IImage;
  name: string;
  category: string;
  price: number;
}

interface IImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IItem {
  item: IProduct;
}
