import { useParams } from "react-router-dom"
import getSinglePRoduct from "../service/getSinglePRoduct"

const SinlgeProduct = () => {
  const { id } = useParams()
  const productid = Array.isArray(id) ? id[0] : id
  const { data, isLoading } = getSinglePRoduct(productid)
  console.log(data)
  
  return (
    <div className=""></div>
  )
}

export default SinlgeProduct