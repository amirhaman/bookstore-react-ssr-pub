import { BookType } from "./@types.book"
export interface ShoppingCartType {
  items: BookType[];
  shipping?: {
    streetAddress: string;
    unitNumber?: string;
    state: string
    country: string
  }
}