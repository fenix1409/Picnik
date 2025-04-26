import { useCallback, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import useGetCategory from "../../service/getCategory"
import { CategoryType } from "../../types/CategoryType"
import { Product } from "../../types/ProductType"
import { IMAGE_API } from "../../hooks/getEnv"
import { getProductsByCategory } from "../../service/getProductsByCategory"
import { ClipLoader } from "react-spinners"
import Stars from '../../../assets/images/star.svg'
import { Basket1 } from "../../../assets/Icons"

const Categories = () => {
  const categories = useGetCategory()
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const handleClick = useCallback((id: string) => {
    setActiveIndex(id)
  }, [])

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ['products', activeIndex],
    queryFn: () => {
      if (activeIndex) {
        return getProductsByCategory(activeIndex)
      }
      return Promise.resolve([])
    },
    enabled: !!activeIndex
  })

  return (
    <section className="px-[100px] mb-[57px]">
      <div className="text-center mx-auto">
        <h1 className="text-[50px] leading-[100%] font-bold mb-[70px]">Kategoriya va Mahsulotlar</h1>
      </div>
      <div className="flex gap-[40px] items-center justify-center overflow-x-auto px-4 py-4">
        {categories.map((item: CategoryType) => (
          <button key={item.id} onClick={() => handleClick(item.id)} className={`flex items-center gap-[8px] px-4 py-[10px] rounded-[30px] border transition-all duration-300 ${item.id === activeIndex ? 'border-black' : 'text-black border-transparent'}`}>
            <img src={`${IMAGE_API}/${item.image_src}`} alt={item.name} className="w-[70px] h-[70px]" />
            <span className="whitespace-nowrap text-sm leading-[100%]">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center flex-wrap gap-[20px] mt-[70px]">
        {isLoading && <div className="w-[50px] h-[50px] mx-auto"><ClipLoader /></div>}
        {isError && <p>Xatolik yuz berdi</p>}
        {!isLoading && products.length > 0 &&
          products.map((item: Product) => (
            <div key={item.id} className="w-[295px]">
              <div className="w-[295px] h-[298px] bg-[#E9F8EC] rounded-[20px] mb-[17px]">
                <img src={`${IMAGE_API}/${item.image_src}`} alt="image" width={200} height={200} className="mx-auto pt-[44px]" />
              </div>
              <h2 className="text-[20px] leading-[100%] font-bold mb-[10px]">{item.title}</h2>
              <img src={Stars} alt="stars" width={150} height={19} className="mb-[8px]" />
              <div className="flex items-center justify-between">
                <p className="text-[24px] leading-[100%] font-bold">{item.price} so'm</p>
                <button className="inline-block cursor-pointer"><Basket1 /></button>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Categories