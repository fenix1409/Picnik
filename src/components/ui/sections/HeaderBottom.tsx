import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
import { Input } from 'antd'
import { Basket } from '../../../assets/Icons'
const HeaderBottom = () => {
    const list = [
        {
            id: 1,
            title: "Bosh sahifa",
            href: "/"
        },
        {
            id: 2,
            title: "Mahsulotlar",
            href: "#"
        },
        {
            id: 3,
            title: "Aloqa",
            href: "#"
        },
        {
            id: 4,
            title: "Blog",
            href: "#"
        }
    ]
    return (
        <div className="px-[100px] flex items-center justify-between pb-[10px] border-b-[1px] border-[#245D3033] py-[15px]">
            <Link to={'/'}>
                <img src={Logo} alt="logo image" width={60} height={60} />
            </Link>
            <div className='flex items-center gap-[35px]'>
                {list.map(item => (
                    <Link to={item.href} className='text-[16px] leading-[100%] font-medium text-black' key={item.id}>{item.title}</Link>
                ))}
            </div>
            <div className='flex items-center gap-[16px]'>
                <Input className='!rounded-[62px] !bg-[#F0F0F0]' width={280} placeholder='Mahsulotlarni qidirish' allowClear />
                <Link to={'#'}>
                    <Basket />
                </Link>
            </div>
        </div>
    )
}

export default HeaderBottom