export type DishProps = {
    allergies : string
    available : boolean
    category : string 
    createdAt : string 
    description : string
    imageUrlThumb : string 
    imageUrlFull : string
    ingredients : string 
    name : string 
    origin : string
    popularity : number 
    price : number
    rating : number
    slug : string
    tags : string[]
    type : string
    id : string
}

export type DishForCart = {
  dishId: string;
  name: string;
  price: number;
};

export type CartItem = {
  cartItemId: string;
  dishId: string;
  name: string;
  price: number;
  qty: number;
};

export type PastOrder = {
  id: string;
  price: number;
  date: unknown      
  dateLabel?: string; 
  items?: CartItem[];

}