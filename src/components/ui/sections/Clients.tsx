import { Stars, Symbol } from "../../../assets/Icons"

const Clients = () => {
    const data = [
        {
            id: 1,
            name: "Sarah M.",
            feedback: "Shop.co orqali olgan jihozlarim sifati va uslubi meni hayratda qoldirdi. Kundalik foydalanishdan tortib, maxsus tadbirlar uchun hamma narsa yuqori darajada!"
        },
        {
            id: 2,
            name: "Alex K.",
            feedback: "Shaxsiy uslubimga mos keladigan jihozlarni topish qiyin edi, lekin Shop.co bilan tanishganimdan so‘ng, barcha kerakli narsalarni bir joydan topa oldim. Ularning tanlovi ajoyib!"
        },
        {
            id: 3,
            name: "James L.",
            feedback: "Yangi va o‘ziga xos jihozlar qidirib yurganimda Shop.co saytini topdim. Ularning assortimentlari xilma-xil va dolzarb."
        }
    ]
    return (
        <section className='px-[100px] mb-[130px]'>
            <h1 className='text-[55px] leading-[100%] font-bold mb-[35px]'>Bizning mamnun mijozlarimiz</h1>
            <div className="flex items-center gap-[20px]">
                {data.map(item => (
                    <div key={item.id} className="w-[400px] pt-[28px] px-[32px] pb-[50px] rounded-[20px] border-[1px] border-[#0000001A]">
                        <div className="mb-[15px]"><Stars /></div>
                        <div className="flex items-center gap-[4px] mb-[12px]">
                            <h2 className="text-[20px] leading-[22px] font-bold">{item.name}</h2>
                            <span><Symbol /></span>
                        </div>
                        <p className="text-[16px] leading-[22px] text-[#00000099]">{item.feedback}</p>
                    </div>
                ))}
            </div>
            <div></div>
        </section>
    )
}

export default Clients