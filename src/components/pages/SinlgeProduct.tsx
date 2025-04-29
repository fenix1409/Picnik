import { useNavigate, useParams } from "react-router-dom"
import getSinglePRoduct from "../service/getSinglePRoduct"
import { Arrow } from "../../assets/Icons"
import getProducts from "../service/getProducts"

const SinlgeProduct = () => {
  const { id } = useParams()
  const productid = Array.isArray(id) ? id[0] : id
  const { data, isLoading } = getSinglePRoduct(productid)
  console.log(data)
  const navigate = useNavigate()
  const products = getProducts()

  return (
    <div className="mt-[13px] px-[100px]">
      <button className="inline-block cursor-pointer mb-[30px]" onClick={() => navigate(-1)}><Arrow /></button>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[18px]">

        </div>
      </div>
    </div>
  )
}

export default SinlgeProduct