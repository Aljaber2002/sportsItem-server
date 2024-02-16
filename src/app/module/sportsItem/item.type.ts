export type Tproduct = {
  name: string;
  price: string | number;
  quantity: string | number;
  brand: string;
  type: string;
  size?: string;
  color: string;
  material: string;
  condition: string;
  image: string;
  status?: 'active' | 'inactive';
};
export type TitemOptionalPayload = {
  name?: string;
  price?: string | number;
  quantity?: string | number;
  brand?: string;
  type?: string;
  size?: string;
  color?: string;
  material?: string;
  condition?: string;
  status?: 'active' | 'inactive';
  id?: string;
  searchQuery?: string;
};
export type TqueryItem = {
  name?: string;
  price?: object;
  quantity?: string | number;

  brand?: string;
  type?: string;
  size?: string;
  color?: string;
  material?: string;
  condition?: string;
  id?: string;
};
