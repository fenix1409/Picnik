import { useNavigate, useParams } from "react-router-dom"
import getSinglePRoduct from "../service/getSinglePRoduct"
import { Arrow, Stars2 } from "../../assets/Icons"
import getProducts from "../service/getProducts"
import { IMAGE_API } from "../hooks/getEnv"
import { Product } from "../types/ProductType"

const SinlgeProduct = () => {
  const { id } = useParams()
  const productid = Array.isArray(id) ? id[0] : id
  const { data, isLoading } = getSinglePRoduct(productid)
  console.log(data)
  const navigate = useNavigate()
  const products: Product = getProducts()

  return (
    <div className="mt-[13px] px-[100px]">
      <button className="inline-block cursor-pointer mb-[30px]" onClick={() => navigate(-1)}><Arrow /></button>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px]">
          <div className="w-[120px] my-auto">
            <div className="w-[120px] h-[120px] bg-[#E9F8EC] rounded-[20px]">
              <img src={`${IMAGE_API}/${products.image_src}`} alt="image" width={50} height={50} />
            </div>
          </div>
          {/* <img src={`${IMAGE_API}/${data.image_src}`} alt="image" width={444} height={530} /> */}
        </div>
        <div className="w-[612px]">
          <div className="space-y-[14px] mb-[43px]">
            {/* <h1 className="text-[36px] leading-[100%] font-bold">{data.title}</h1>
            <div className=""><Stars2 /></div>
            <span className="inline-block text-[32px] leading-[100%] font-bold">{data.price} so'm</span> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default SinlgeProduct