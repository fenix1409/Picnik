import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat 1 marta ishlaydi
    threshold: 0.3,     // 30% ko‘rinsa yetarli
  });

  return (
    <div ref={ref} className="flex justify-center items-center gap-10 bg-white">
      {/* Stat 1 */}
      <div className="text-center border-r border-[#0000001A] w-[130px]">
        <div className="text-[40px] font-bold leading-[100%]">
          {inView && <CountUp end={200} duration={2} />}<span className="text-green-700">+</span>
        </div>
        <p className="text-[#00000099] mt-1 text-[16px] leading-[22px]">Xalqaro brendlar</p>
      </div>

      {/* Stat 2 */}
      <div className="text-center border-r border-[#0000001A] w-[200] pr-10">
        <div className="text-[40px] font-bold leading-[100%]">
          {inView && <CountUp end={2000} duration={2.5} separator="," />}<span className="text-green-700">+</span>
        </div>
        <p className="text-[#00000099] mt-1 text-[16px] leading-[22px]">Yuqori Sifatli Mahsulotlar</p>
      </div>

      {/* Stat 3 */}
      <div className="text-center pl-10 w-[166px]">
        <div className="text-[40px] font-bold leading-[100%]">
          {inView && <CountUp end={30000} duration={3} separator="," />}<span className="text-green-700">+</span>
        </div>
        <p className="text-[#00000099] mt-1 text-[16px] leading-[22px]">Baxtli mijozlar</p>
      </div>
    </div>
  );
};

export default StatsSection;