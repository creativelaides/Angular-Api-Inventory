export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;  // Esta propiedad debe ser obligatoria
  quantity: number;  // Esta propiedad debe ser obligatoria
}
