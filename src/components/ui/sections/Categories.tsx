import { memo, useCallback, useState } from "react"
import useGetCategory from "../../service/getCategory"
import { CategoryType } from "../../types/CategoryType"
import getProducts from "../../service/getProducts"
import { IMAGE_API } from "../../hooks/getEnv"
const Categories = () => {
  const categories = useGetCategory()
  const products = getProducts()
  const [activeIndex, setActiveIndex] = useState('')
  console.log(categories);
  const handleClick = useCallback((id: string) => {
    if (id !== activeIndex) {
      setActiveIndex(id)
    }
  }, [activeIndex])

  return (
    <section className="px-[100px]">
      <div className="text-center mx-auto">
        <h1 className="text-[50px] leading-[100%] font-bold mb-[70px]">Kategoriya va Mahsulotlar</h1>
      </div>
      <div className="flex gap-6 items-center justify-start overflow-x-auto px-4 py-4">
        {categories.map((item: CategoryType) => (
          <button key={item.id} onClick={() => handleClick(item.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300${item.id === activeIndex ? 'bg-black text-black border-black' : 'text-black border-transparent'}`}>
            <img src={`${IMAGE_API}/${item.image_src}`} alt={item.name} className="w-6 h-6" />
            <span className="whitespace-nowrap text-sm">{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default memo(Categories)