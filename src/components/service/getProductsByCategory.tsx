import { instance } from "../hooks/useAxios"

export const getProductsByCategory = async (categoryId: string) => {
  const res = await instance().get(`/products`)
  const allProducts = res.data.data
  return allProducts.filter((product: any) => product.category_id === categoryId)
}