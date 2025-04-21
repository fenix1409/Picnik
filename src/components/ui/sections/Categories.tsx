import { useState } from "react"
import getCategory from "../../service/getCategory"
import { CategoryType } from "../../types/CategoryType"
const Categories = () => {
  const categories = getCategory()
  const [activeIndex, setActiveIndex] = useState('')
  console.log(categories);
  return (
    <section className="px-[100px]">
      <div className="text-center mx-auto">
        <h1 className="text-[50px] leading-[100%] font-bold mb-[70px]">Kategoriya va Mahsulotlar</h1>
      </div>
      <div className="flex gap-6 items-center justify-start overflow-x-auto px-4 py-4">
        {categories.map((item: CategoryType) => (
          <button key={item.id} onClick={() => setActiveIndex(item.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300${item.id === activeIndex ? 'bg-black text-white border-black' : 'border-black/30 text-black'}`}>
            <img src={item.image_src} alt={item.name} className="w-6 h-6" />
            <span className="whitespace-nowrap text-sm">{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories