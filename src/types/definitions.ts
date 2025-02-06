
export interface CategoryItem {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export interface CartItem extends CategoryItem {
  quantity: number;
}


export interface UserData {
    displayName: string
    email: string
    createdAt: Date
}