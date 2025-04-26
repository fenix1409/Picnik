import { useState } from "react"
import { Add } from "../../../assets/Icons"

const Faq = () => {
    const data = [
        {
            id: 1,
            title: "Mahsulotlarni qanday buyurtma qilsa bo‘ladi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 2,
            title: "To‘lov usullari qanday?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 3,
            title: "Yetkazib berish qancha vaqt oladi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 4,
            title: "Mahsulotlarni qaytarish mumkinmi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 5,
            title: "Mahsulotlar kafolatlanganmi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 6,
            title: "Sayohat mahsulotlarini tanlashda yordam bera olasizmi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 7,
            title: "Yetkazib berish narxi qancha turadi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 8,
            title: "Agar buyurtma noto‘g‘ri kelsa, nima qilish kerak?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 9,
            title: "Mahsulotlarni ko‘rish uchun oflayn do‘koningiz bormi?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        },
        {
            id: 10,
            title: "Saytingizda qanday mahsulotlarni topish mumkin?",
            answer: "Siz tanlagan mahsulotni savatchaga qo‘shib, to‘lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay."
        }
    ]

    const [openId, setOpenId] = useState<number | null>(null)

    function toggleFaq(id: number) {
        if (openId === id) {
            setOpenId(null)
        }
        else {
            setOpenId(id)
        }
    }
    return (
        <section className="px-[286px] pt-[90px] border-t-[1px] border-[#0000001A] mb-[158px]">
            <h1 className="text-[50px] leading-[64px] font-bold text-center mb-[70px]">Tez-tez beriladigan savollar</h1>
            <div className="flex items-center gap-[12px] flex-col">
                {data.map(item => (
                    <div key={item.id} className="w-[792px]">
                        <div className="py-[20px] px-[24px] bg-[#F5F5F5] rounded-[16px] cursor-pointer transition-all duration-200 ease-in-out">
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] leading-[24px] font-semibold">{item.title}</p>
                                <button onClick={() => toggleFaq(item.id)} className={`cursor-pointer transition-transform duration-300 ${openId === item.id ? "rotate-[136deg]" : ""}`}>
                                    <Add />
                                </button>
                            </div>
                            <div className={`bg-[#F5F5F5] overflow-hidden transition-all duration-300 ease-in-out rounded-b-[16px] ${openId === item.id ? "max-h-[500px] py-[20px] px-[24px]" : "max-h-0 py-0 px-[24px]"}`}>
                                <p className="text-[14px] leading-[22px] text-[#666]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Faq