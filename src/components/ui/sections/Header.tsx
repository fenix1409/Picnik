import { Close } from "../../../assets/Icons"

const Header = () => {
    return (
        <header className="bg-[#245D30] pr-[100px] flex items-center py-[9px] justify-between">
            <p className="text-[14px] leading-[100%] text-white ml-[544px]">Sign up and get 20% off to your first order. Sign Up Now</p>
            <button><Close /></button>
        </header>
    )
}

export default Header