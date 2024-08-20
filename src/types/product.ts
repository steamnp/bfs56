// Define the type for images
export interface IImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

// Define the type for product details
export interface IProduct {
  image: IImage;
  name: string;
  category: string;
  price: number;
}

// Define the type for items in the cart (if different from product)
export interface ICartItem extends IProduct {
  id: string; // Added id for cart items
}
