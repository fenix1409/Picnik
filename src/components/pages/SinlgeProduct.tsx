import { useNavigate, useParams } from "react-router-dom";
import getSinglePRoduct from "../service/getSinglePRoduct";
import { Arrow, Minus, Plus, Stars2 } from "../../assets/Icons";
import { IMAGE_API } from "../hooks/getEnv";
import { Product } from "../types/ProductType";
import getProducts from "../service/getProducts";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrement, increment } from "../../store/productSlice";

const SinlgeProduct = () => {
  const count = useSelector((state: RootState) => state.product.count);
  const dispatch = useDispatch();
  const { id } = useParams()
  const productid = Array.isArray(id) ? id[0] : id
  const { data, isLoading, isError } = getSinglePRoduct(productid)
  const navigate = useNavigate()
  const products: Product = getProducts()
  console.log(products);
  const descriptionsData = [
    {
      id: 1,
      title: "Yuqori sifatli materiallar:",
      text: "Ushbu chodir suvga chidamli va bardoshli materiallardan ishlab chiqarilgan bo‘lib, u sizni yomg‘irli va shamolli ob-havoda ishonchli himoya qiladi."
    },
    {
      id: 2,
      title: "Keng ichki hajm:",
      text: "Ichki hajmi katta bo‘lib, bir nechta odam yoki oilangiz uchun yetarli joy taqdim etadi. Yotish, dam olish va jihozlaringizni joylashtirish uchun qulay."
    },
    {
      id: 3,
      title: "Oson o‘rnatish:",
      text: "Chodirni tez va oson o‘rnatish mumkin, bu uni tajribali sayohatchilar ham, yangi boshlovchilar uchun ham ideal qiladi. Yig‘ishtirish ham oddiy va ixchamdir, bu uni olib yurishni osonlashtiradi."
    }
  ]


  if (isLoading) return <div className="w-[100px] h-[100px] mx-auto py-56"><ClipLoader /></div>
  if (isError || !data) return <div>Xatolik yuz berdi</div>

  return (
    <div className="mt-[13px] px-[100px] pb-[151px]">
      <button onClick={() => navigate(-1)} className="inline-block cursor-pointer mb-[30px]">
        <Arrow />
      </button>
      <div className="flex items-center justify-between mb-[120px]">
        <div className="flex items-center gap-[18px]">
          <div className="w-[120px] my-auto">
            <div className="w-[120px] h-[120px] bg-[#E9F8EC] rounded-[20px] pt-[30px]">
              <img src={`${IMAGE_API}/${products.image_src}`} alt="image" width={70} height={70} className="mx-auto" />
            </div>
          </div>
          <div className="w-[444px] h-[530px] bg-[#E9F8EC] pt-[100px] rounded-[20px]">
            <img src={`${IMAGE_API}/${data.image_src}`} alt="image" width={300} height={330} className="mx-auto" />
          </div>
        </div>
        <div className="w-[612px]">
          <div className="space-y-[14px] mb-[43px]">
            <h1 className="text-[36px] leading-[100%] font-bold">{data.title}</h1>
            <div className=""><Stars2 /></div>
            <span className="inline-block text-[32px] leading-[100%] font-bold">{data.price} so'm</span>
          </div>
          <div className="flex items-center flex-col space-y-[18.5px] mb-[43px]">
            {descriptionsData.map(item => (
              <h2 key={item.id} className="text-[16px] leading-[24px] font-semibold">{item.title} <span className="font-medium text-[#727272]">{item.text}</span></h2>
            ))}
          </div>
          <div className="flex items-center gap-[19px]">
            <div className="flex items-center gap-[49.5px] bg-[#F0F0F0] w-[193px] rounded-[62px] py-[14px] px-[20px]">
              <button onClick={() => dispatch(decrement())} className="inline-block cursor-pointer"><Minus /></button>
              <span className="text-[16px] leading-[100%] font-medium">{count}</span>
              <button onClick={() => dispatch(increment())} className="inline-block cursor-pointer"><Plus /></button>
            </div>
            <button className="w-[400px] py-[15px] px-[157px] text-[16px] leading-[100%] font-medium rounded-[62px] bg-[#245D30] text-white">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center">
        <h2 className="text-[36px] leading-[100%] font-bold mb-[60px]">Mahsulot Videosi va Xususiyatlari</h2>
        <video controls width="100%" height="649px" className="rounded-[20px]">
          <source src={`${IMAGE_API}/${products.video_src}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default SinlgeProduct