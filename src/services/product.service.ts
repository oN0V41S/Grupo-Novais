import { api } from './api';

interface Product {
  nome: string,
  preco: number,
  moeda: string;
  link: string;
  linkImagem: string;
  freteEst: number;
  impostoEst: number;
  totPago: number;
}

export const productsService = {
  getAllProducts: (): Promise<Product[]> => api.get('/products'),

  getProductById: (id: number): Promise<Product> => api.get(`/products/${id}`),

  createProduct: (product: Omit<Product, 'id'>): Promise<Product> =>
    api.post('/products', product),

  updateProduct: (id: number, product: Product): Promise<Product> =>
    api.put(`/products/${id}`, product),

  deleteProduct: (id: number): Promise<void> => api.delete(`/products/${id}`),
};