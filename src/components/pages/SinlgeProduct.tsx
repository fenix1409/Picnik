import { useNavigate, useParams } from "react-router-dom";
import getSinglePRoduct from "../service/getSinglePRoduct";
import { Arrow, Stars2 } from "../../assets/Icons";
import { IMAGE_API } from "../hooks/getEnv";
import { Product } from "../types/ProductType";
import getProducts from "../service/getProducts";

const SinlgeProduct = () => {
  const { id } = useParams()
  const productid = Array.isArray(id) ? id[0] : id
  const { data, isLoading, isError } = getSinglePRoduct(productid)
  const navigate = useNavigate()
  const products: Product = getProducts()
  console.log(products);


  if (isLoading) return <div>Yuklanmoqda...</div>
  if (isError || !data) return <div>Xatolik yuz berdi yoki ma'lumot yo'q</div>

  return (
    <div className="mt-[13px] px-[100px]">
      <button onClick={() => navigate(-1)} className="inline-block cursor-pointer mb-[30px]">
        <Arrow />
      </button>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px]">
          <div className="w-[120px] my-auto">
            <div className="w-[120px] h-[120px] bg-[#E9F8EC] rounded-[20px] pt-[30px]">
              <img src={`${IMAGE_API}/${products.image_src}`} alt="image" width={70} height={70} className="mx-auto" />
            </div>
          </div>
          <div className="w-[444px] h-[530px] bg-[#E9F8EC] pt-[100px] rounded-[20px]">
            <img src={`${IMAGE_API}/${data.image_src}`} alt="image" width={300} height={330} className="mx-auto"/>
          </div>
        </div>
        <div className="w-[612px]">
          <div className="space-y-[14px] mb-[43px]">
            <h1 className="text-[36px] leading-[100%] font-bold">{data.title}</h1>
            <div className=""><Stars2 /></div>
            <span className="inline-block text-[32px] leading-[100%] font-bold">{data.price} so'm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinlgeProduct