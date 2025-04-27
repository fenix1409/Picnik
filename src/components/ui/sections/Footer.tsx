import { Link } from "react-router-dom"
import Logo from '../../../assets/footer-logo.svg'
import { Facebook, GitHub, Instagram, Twitter } from "../../../assets/Icons"
import Paymants from '../../../assets/payments.svg'

const Footer = () => {
    const apps = [
        { id: 1, icon: <Twitter />, href: "#" },
        { id: 2, icon: <Facebook />, href: "#" },
        { id: 3, icon: <Instagram />, href: "#" },
        { id: 4, icon: <GitHub />, href: "#" }
    ]
    const company = [
        { id: 1, name: 'Biz haqimizda' },
        { id: 2, name: 'Xususiyatlar' },
        { id: 3, name: 'Ishlash jarayoni' },
        { id: 4, name: 'Karyera imkoniyatlari' }
    ]
    const help = [
        { id: 1, name: 'Mijozlarni qo`llab-quvvatlash' },
        { id: 2, name: 'Yetkazib berish tafsilotlari' },
        { id: 3, name: 'Shartlar va qoidalar' },
        { id: 4, name: 'Maxfiylik siyosati' }
    ]
    const questions = [
        { id: 1, name: 'Hisob' },
        { id: 2, name: 'Yetkazib bersihni boshqarish' },
        { id: 3, name: 'Buyurtmalar' },
        { id: 4, name: 'To`lovlar' }
    ]
    const resources = [
        { id: 1, name: 'Bepul e-kitoblar' },
        { id: 2, name: 'Dasturlash bo`yicha qo`llanmalar' },
        { id: 3, name: 'Blog' },
        { id: 4, name: 'YouTube playlist' }
    ]
    return (
        <footer className="pt-[78px] px-[100px] bg-[#245D30]">
            <div className="flex items-center justify-around gap-[79.5px] pb-[75px] mb-[80px]">
                <div className="flex items-center flex-col">
                    <Link to={'/'} className="mb-[49px]">
                        <img src={Logo} alt="logo" width={100} height={100} />
                    </Link>
                    <div className="flex items-center gap-[12px]">
                        {apps.map(app => (
                            <Link to={app.href} key={app.id}>{app.icon}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-start flex-col space-y-[26px]">
                    <strong className="inline-block text-[16px] leading-[18px] font-medium text-white">Kompaniya</strong>
                    {company.map(item => (
                        <Link to={'#'} className="text-[16px] leading-[19px] text-[#FFFFFF99]" key={item.id}>{item.name}</Link>
                    ))}
                </div>
                <div className="flex items-start flex-col space-y-[26px]">
                    <strong className="inline-block text-[16px] leading-[18px] font-medium text-white">Yordam</strong>
                    {help.map(item => (
                        <Link to={'#'} className="text-[16px] leading-[19px] text-[#FFFFFF99]" key={item.id}>{item.name}</Link>
                    ))}
                </div>
                <div className="flex items-start flex-col space-y-[26px]">
                    <strong className="inline-block text-[16px] leading-[18px] font-medium text-white">Savollar</strong>
                    {questions.map(item => (
                        <Link to={'#'} className="text-[16px] leading-[19px] text-[#FFFFFF99]" key={item.id}>{item.name}</Link>
                    ))}
                </div>
                <div className="flex items-start flex-col space-y-[26px]">
                    <strong className="inline-block text-[16px] leading-[18px] font-medium text-white">Resurslar</strong>
                    {resources.map(item => (
                        <Link to={'#'} className="text-[16px] leading-[19px] text-[#FFFFFF99]" key={item.id}>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between py-[20px] border-t-[1px] border-[#245D30]">
                <span className="inline-block text-[14px] leading-[100%] text-[#FFFFFF99]">Shop.co © 2000-2023, All Rights Reserved</span>
                <img src={Paymants} alt="image" width={281} height={30} />
            </div>
        </footer>
    )
}

export default Footer