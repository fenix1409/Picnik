import StatsSection from "../Stats"
import Heroimg from '../../../assets/images/hero-image.png'

const Hero = () => {
    return (
        <section className='mt-[147px] mx-[100px] mb-[157px]'>
            <div className="flex items-center justify-between">
                <div className="w-[596px]">
                    <h1 className="text-[60px] leading-[64px] font-bold text-black mb-[32px]">Zo'r jihozlar bilan sarguzashtlarni kashf eting</h1>
                    <p className="text-[16px] leading-[22px] text-[#00000099] mb-[32px]">Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.</p>
                    <button className="w-[210px] inline-block py-[16px] rounded-[62px] bg-[#245D30] text-[16px] leading-[100%] font-medium mb-[48px] text-white">Xarid qiling</button>
                    <div><StatsSection /></div>
                </div>
                <img src={Heroimg} alt="image" width={614} height={463}/>
            </div>
        </section>
    )
}

export default Hero