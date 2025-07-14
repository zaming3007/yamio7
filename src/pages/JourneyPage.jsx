import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Home, Leaf } from 'lucide-react';
import JourneyProgress from '../components/common/JourneyProgress';
import CanvasStarfield from '../components/common/CanvasStarfield';

// Section components for the journey
const IntroSection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden" ref={ref}>
      {/* Simple starfield background */}
      <CanvasStarfield starCount={50} />
      
      {/* Constellation lines with enhanced styling */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.line 
          x1="20%" y1="20%" 
          x2="40%" y2="40%" 
          stroke="#ffffff" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line 
          x1="40%" y1="40%" 
          x2="60%" y2="30%" 
          stroke="#ffffff" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1.0 }}
        />
        <motion.line 
          x1="60%" y1="30%" 
          x2="80%" y2="60%" 
          stroke="#ffffff" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.line 
          x1="35%" y1="70%" 
          x2="60%" y2="65%" 
          stroke="#ffffff" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 2.0 }}
        />
        <motion.line 
          x1="60%" y1="65%" 
          x2="75%" y2="80%" 
          stroke="#ffffff" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 2.5 }}
        />
        
        {/* Star points at connection vertices */}
        {[
          { cx: "20%", cy: "20%" },
          { cx: "40%", cy: "40%" },
          { cx: "60%", cy: "30%" },
          { cx: "80%", cy: "60%" },
          { cx: "35%", cy: "70%" },
          { cx: "60%", cy: "65%" },
          { cx: "75%", cy: "80%" },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.cx}
            cy={point.cy}
            r="1.5"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.7] }}
            transition={{ 
              duration: 2,
              delay: i * 0.3 + 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5 + i
            }}
          />
        ))}
      </svg>
      
      <motion.div 
        className="text-center max-w-xl px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="flex justify-center mb-4">
          <Leaf className="text-green-600 opacity-80" size={24} />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-heading font-bold mb-8 text-[#1A1033] tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]"
          style={{ 
            scale: useTransform(progress, [0, 0.1], [1, 1.2]),
            opacity: useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]) 
          }}
          whileInView={{
            letterSpacing: ['.08em', '.05em'],
            transition: { duration: 1.5, ease: 'easeOut' }
          }}
        >
          Em
        </motion.h1>
        
        <motion.div 
          className="space-y-5 p-10 rounded-xl border border-white border-opacity-10 shadow-glass backdrop-blur-sm"
          style={{ opacity: useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]) }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-heading italic text-[#1A1033] leading-relaxed">
            "Hành Trình Dịu Dàng Về Với Chính Mình"
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <p className="text-lg md:text-xl font-body text-[#1A1033] leading-relaxed">
              Sinh ngày 2/10/2002 – 22:00 – TP. Hồ Chí Minh
            </p>
            <p className="text-lg md:text-xl font-body text-[#1A1033] leading-relaxed mt-2">
              Ascendant: Song Tử – Mặt Trời: Thiên Bình – Mặt Trăng: Sư Tử
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="fixed left-1/2 transform -translate-x-1/2 bottom-6 flex flex-col items-center"
          style={{ opacity: useTransform(progress, [0, 0.1], [1, 0]) }}
        >
          <motion.div 
            className="px-6 py-2 rounded-full flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <ChevronDown className="text-[#1A1033] opacity-80" size={18} />
            </motion.div>
            <span className="text-sm text-[#1A1033] font-body font-medium opacity-80">
              Cuộn xuống để bắt đầu hành trình
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Additional section for emotions
const EmotionsSection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.375, 0.4, 0.475, 0.5], 
    [0, 1, 1, 0]
  );
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ rotate: [-5, 5, -5], scale: 1.1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#1A1033] opacity-80"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-[#1A1033]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Em Nghĩ Nhiều
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="space-y-5 text-[#1a1033] text-lg pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading italic text-center">
            "Em nghĩ nhiều, anh cũng thế"
          </p>
          
          <p>
            Em có Sao Thủy Xử Nữ đi lùi trong nhà 4 – một trí óc tinh tường, phân tích sắc bén, nhưng thường hướng vào bên trong. Em thường tự nhai lại một chuyện trong đầu nhiều lần, chỉ vì muốn hiểu nó thật kỹ trước khi nói ra.
          </p>
          
          <p>
            Anh cũng vậy.
          </p>
          
          <p>
            Cả hai đứa mình đều thuộc kiểu: nghĩ trước khi nói, chọn từ thật kỹ, và đôi khi chọn im lặng khi không chắc điều mình nói có đúng không. Nhưng rồi, bằng cách nào đó – anh thấy em bắt đầu nói nhiều hơn, bộc lộ hơn, và rõ ràng hơn về những gì em thấy, em muốn, em không chấp nhận.
          </p>
          
          <motion.div 
            className="mt-6 p-4 rounded-lg border-l-2 border-[#1A1033] border-opacity-30 italic"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Không phải vì em thay đổi.
            Mà vì em đang dần tin rằng: cảm xúc của mình cũng xứng đáng được hiện diện.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SunSection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.1, 0.125, 0.2, 0.25], 
    [0, 1, 1, 0]
  );
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#1A1033] opacity-80"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-[#1A1033]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hành Trình Về Với Chính Mình
          </motion.h2>
          
          <motion.div 
            className="inline-block px-4 py-1 rounded-full text-[#1a1033] font-medium mb-4 border border-[#1A1033] border-opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Mặt Trời: Thiên Bình ♎︎ • Nhà 4
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-5 text-[#1a1033] text-lg pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading italic text-center">
            "Em sinh ra để giữ sự hài hòa – nhưng hành trình em đi là để tìm lại mình"
          </p>
          
          <p>
            Em mang trong mình ánh sáng Thiên Bình – dịu dàng, tinh tế, có khả năng làm mềm đi những góc cứng của thế giới. Em luôn để tâm đến cảm xúc người khác, luôn cố gắng giữ không khí yên ổn, ấm áp.
          </p>
          
          <p>
            Nhưng em không phải là người dễ dàng.
            Mặt Trời trong nhà 4 nói rằng: em sống sâu, sống thật. Em cần sự ổn định – nhưng không phải sự ổn định từ bên ngoài. Em tìm kiếm một "ngôi nhà" từ bên trong: nơi em được thở đúng với mình, được sống đúng với những gì em cảm mà không phải chỉnh sửa nó cho vừa vặn với ai.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Venus section
const VenusSection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.625, 0.65, 0.725, 0.75], 
    [0, 1, 1, 0]
  );
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#1A1033] opacity-80"
              >
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                <path d="M12 13v9"></path>
                <path d="M12 2v4"></path>
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-[#1A1033]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hành Trình Về Lại
          </motion.h2>
          
          <motion.div 
            className="inline-block px-4 py-1 rounded-full text-[#1a1033] font-medium mb-4 border border-[#1A1033] border-opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Nhà 4 - Cội nguồn và nội tâm
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-5 text-[#1a1033] text-lg pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading italic text-center">
            "Hành trình của em là hành trình về lại – không phải vươn ra"
          </p>
          
          <p>
            Với ba hành tinh trọng yếu nằm trong nhà 4 – em không sống vì ánh đèn sân khấu, danh vọng hay sự công nhận bên ngoài.
            Thứ em tìm kiếm là một nền tảng cảm xúc vững chắc, một chốn riêng bên trong mà dù cuộc đời có xô lệch đến đâu, em cũng có thể quay về đó và thở thật sâu.
          </p>
          
          <motion.div 
            className="mt-6 p-4 rounded-lg border-l-2 border-[#1A1033] border-opacity-30 italic"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Em cần một không gian tinh thần nơi em có thể bỏ lại mọi mặt nạ xã hội, mọi kỳ vọng từ bên ngoài, và chỉ đơn giản là hiện diện. Trong sâu thẳm, em khát khao một nơi chốn bình yên, không phải vì dịch chuyển ra ngoài, mà là đi sâu vào trong.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Life Path section
const LifePathSection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.75, 0.775, 0.85, 0.875], 
    [0, 1, 1, 0]
  );
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#1A1033] opacity-80"
              >
                <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-[#1A1033]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Đường Về
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="space-y-5 text-[#1a1033] text-lg pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            Em mang trong mình vẻ ngoài Song Tử linh hoạt, trí thông minh nhanh nhẹn, nhưng điểm đến lại là sự tĩnh lặng, ổn định, có gốc rễ. Hành trình này – sẽ không phải là đi tìm điều gì ở bên ngoài. Nó là cuộc trở về, là tự hiểu mình sâu sắc.
          </p>
          
          <p>
            Em sẽ đối diện với những cảm xúc thật, nhu cầu thật, và cả những nỗi sợ hãi thật – những thứ đã bị chối bỏ hoặc đè nén. Và hành trình ấy rất đáng để đi, dù nó có những lúc không dễ dàng gì.
          </p>
          
          <motion.div 
            className="mt-6 p-4 rounded-lg border-l-2 border-[#1A1033] border-opacity-30 italic"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Tình yêu thương thực sự chỉ đến khi em không còn phải là "phiên bản" nào khác ngoài chính mình. Và với em, tình yêu sẽ là một không gian an toàn để em phát triển, để em lớn lên thành con người em muốn là.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const MoonSection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.25, 0.275, 0.35, 0.375], 
    [0, 1, 1, 0]
  );
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ rotate: [-5, 5, -5], scale: 1.1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#1A1033] opacity-80"
              >
                <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-[#1A1033]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Khi Ở Bên Nhau
          </motion.h2>
          
          <motion.div 
            className="inline-block px-4 py-1 rounded-full text-[#1a1033] font-medium mb-4 border border-[#1A1033] border-opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Cung Mọc: Song Tử
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-5 text-[#1a1033] text-lg pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading italic text-center">
            "Em không còn phải giữ nữa. Em được là chính em, một cách trọn vẹn"
          </p>
          
          <p>
            Cung Mọc Song Tử khiến em lanh lợi, lí lắc, thích nói chuyện, thích chơi chữ, thích biến những điều bình thường thành thú vị.
          </p>
          
          <p>
            Nhưng anh biết, những lúc em "tăng động", "khùm điên", bày trò, phá lên cười, lắc người nhún vai,.. hay nói những câu nghe "kì quặc" – không phải vì em đang cố "làm vui"…
            Mà vì em đang thả lỏng. Đang được là mình – không cần giữ hình ảnh, không cần đo từng hành vi. Anh vui vì em được là mình khi ở bên anh.
          </p>
          
          <motion.div 
            className="mt-6 p-4 rounded-lg border-l-2 border-[#1A1033] border-opacity-30 italic"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Mặt Trăng Sư Tử cho em một ngọn lửa cảm xúc ấm áp, rực rỡ và thành thật. Khi em thấy an toàn, em sẽ sống rất thật – thậm chí có phần "kịch tính", lộ liễu, thừa năng lượng – nhưng đó chính là bản chất sáng rực rất riêng của em. Và em đâu cần giấu.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const MercurySection = ({ progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.5, 0.525, 0.6, 0.625], 
    [0, 1, 1, 0]
  );
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14 text-[#1A1033] opacity-80"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <path d="M12 9a3 3 0 0 0 0 6"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </motion.svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-[#1A1033]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Em Yêu Sâu
          </motion.h2>
          
          <motion.div 
            className="inline-block px-4 py-1 rounded-full text-[#1a1033] font-medium mb-4 border border-[#1A1033] border-opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Sao Kim: Bọ Cạp • Nhà 5
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-5 text-[#1a1033] text-lg pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading italic text-center">
            "Em yêu sâu – và không giấu nổi điều gì trong ánh mắt"
          </p>
          
          <p>
            Sao Kim ở Bọ Cạp – nhà 5 làm cho em yêu một cách toàn tâm, toàn ý. Em không biết yêu kiểu "tạm thời". Không biết "vui là được". Em chỉ biết trao – và trao hết.
          </p>
          
          <p>
            Điều khiến em dễ tổn thương không phải vì em yếu lòng. Mà vì em chân thành. Em để tâm, em tin – và em mong người ta cũng vậy.
            Chuyện tình cảm với em không chỉ là cảm xúc, nó là một phần rất gốc trong con người em – là nơi em khám phá chính mình thông qua người kia.
          </p>
          
          <motion.div 
            className="mt-6 p-4 rounded-lg border-l-2 border-[#1A1033] border-opacity-30 italic"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Em không biết yêu kiểu hời hợt. Em chỉ biết cách yêu bằng cả trái tim và linh hồn mình.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ConclusionSection = ({ progress, onJourneyComplete }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const opacityValue = useTransform(
    progress, 
    [0.875, 0.9, 1, 1], 
    [0, 1, 1, 1]
  );
  
  useEffect(() => {
    if (progress.get() > 0.9) {
      onJourneyComplete();
    }
  }, [progress, onJourneyComplete]);
  
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div 
        ref={ref}
        className="max-w-lg px-6 text-center relative z-10 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        style={{ opacity: opacityValue }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-[#1A1033] border-opacity-20"
            animate={{ 
              boxShadow: ['0 0 0 rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.3)', '0 0 0 rgba(255,255,255,0)'] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-[#1A1033] opacity-80"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
              }}
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8l-8.2-1.8a.53.53 0 0 0-.5.1.51.51 0 0 0-.1.5L7.5 14l-5 5c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l5-5 7.2 3.2c.2.1.3.1.4.1h.1c.1-.1.3-.2.3-.4Z"></path>
              <path d="m11.8 4.8.8-.8c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-1.6 1.6"></path>
              <path d="m4.8 17.8 1.6-1.6"></path>
            </motion.svg>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#1A1033]">
            Lời Nhắn Từ Anh
          </h2>
          
          <motion.div 
            className="space-y-5 mb-8 px-6 py-8 rounded-xl border border-white border-opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-[#1a1033] text-xl italic font-heading">
              "Bảo Ngọc, em được sinh ra để kết nối – nhưng không phải đánh mất mình để làm điều đó."
            </p>
            
            <p className="text-[#1a1033] text-lg">
              Em mạnh mẽ hơn vẻ ngoài dịu dàng của mình.
            </p>
            
            <p className="text-[#1a1033] text-lg">
              Em sâu sắc hơn những điều em nói ra.
            </p>
            
            <p className="text-[#1a1033] text-lg">
              Và em xứng đáng với một cuộc sống nơi em vừa được là chính mình, vừa được yêu thương như người yêu của anh.
            </p>
            
            <p className="text-[#1a1033] text-lg mt-6 italic">
              Yamin biết mọi thứ trong đây cũng dựa vào bản đồ sao - thứ anh học được ở em, mong là anh viết đúng, đủ, nếu chưa anh sẽ bổ sung thêm sau nhéenhée.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            <Link 
              to="/planets" 
              className="inline-block px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-[#1a1033] transition-all border border-[#1A1033] border-opacity-10"
            >
              Khám phá thêm các hành tinh
            </Link>
            
            <div>
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 mt-4 text-[#1a1033] opacity-80"
              >
                <Home size={16} /> 
                <span>Quay về trang chủ</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const JourneyPage = () => {
  const [journeyComplete, setJourneyComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const sections = [
    "Giới thiệu",
    "Hành trình",
    "Bên nhau", 
    "Suy nghĩ",
    "Yêu sâu",
    "Về lại",
    "Đường về",
    "Lời nhắn"
  ];
  
  const handleJourneyComplete = () => {
    setJourneyComplete(true);
  };
  
  const navigateToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({
      behavior: 'smooth'
    });
    setCurrentSection(index);
  };
  
  // Monitor scroll to update current section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      sectionRefs.forEach((ref, index) => {
        if (!ref.current) return;
        
        const { offsetTop, offsetHeight } = ref.current;
        const sectionTop = offsetTop;
        const sectionBottom = offsetTop + offsetHeight;
        
        // Check if the section is in view
        if (
          currentScrollPos >= sectionTop - viewportHeight/3 && 
          currentScrollPos < sectionBottom - viewportHeight/3
        ) {
          setCurrentSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const renderSectionWithRef = (Section, index, props = {}) => (
    <div ref={sectionRefs[index]}>
      <Section progress={smoothProgress} {...props} />
    </div>
  );
  
  return (
    <div className="journey-container bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#eef2ff]">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#1a1033] z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Section navigation */}
      <JourneyProgress 
        progress={smoothProgress} 
        sections={sections} 
        currentSection={currentSection} 
        onNavigate={navigateToSection}
      />
      
      {/* Navigation toggle button */}
      {journeyComplete && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <Link 
            to="/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm text-[#1a1033] opacity-80 hover:opacity-100 border border-[#1a1033] border-opacity-10"
          >
            <Home size={20} />
          </Link>
        </motion.div>
      )}
      
      {/* Journey sections */}
      {renderSectionWithRef(IntroSection, 0)}
      {renderSectionWithRef(SunSection, 1)}
      {renderSectionWithRef(MoonSection, 2)}
      {renderSectionWithRef(EmotionsSection, 3)}
      {renderSectionWithRef(MercurySection, 4)}
      {renderSectionWithRef(VenusSection, 5)}
      {renderSectionWithRef(LifePathSection, 6)}
      {renderSectionWithRef(ConclusionSection, 7, { onJourneyComplete: handleJourneyComplete })}
    </div>
  );
};

export default JourneyPage; 