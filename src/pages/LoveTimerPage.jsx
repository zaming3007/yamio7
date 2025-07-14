import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import AnimatedRoute from '../components/common/AnimatedRoute';

const LoveTimerPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Start date: June 14, 2025
  const startDate = useMemo(() => new Date('2025-06-14T00:00:00'), []);
  
  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Calculate time difference
  const getTimeDifference = () => {
    const difference = currentTime - startDate;
    
    // For future dates (negative difference)
    if (difference < 0) {
      const totalSeconds = Math.floor(-difference / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      return {
        days, hours, minutes, seconds,
        isCountdown: true
      };
    }
    
    // For past dates (positive difference)
    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;
    
    return {
      days, hours, minutes, seconds,
      years, months, remainingDays,
      isCountdown: false
    };
  };
  
  const timeDiff = getTimeDifference();
  
  // Calculate important milestone dates
  const getMilestones = () => {
    const milestones = [];
    
    // Add 3 months, 6 months, 1 year, etc.
    const intervals = [
      { months: 3, label: 'Kỷ niệm 3 tháng' },
      { months: 6, label: 'Kỷ niệm 6 tháng' },
      { months: 9, label: 'Kỷ niệm 9 tháng' },
      { years: 1, label: 'Kỷ niệm 1 năm' },
      { years: 1, months: 6, label: 'Kỷ niệm 1 năm 6 tháng' },
      { years: 2, label: 'Kỷ niệm 2 năm' },
    ];
    
    intervals.forEach(interval => {
      const date = new Date(startDate);
      if (interval.years) {
        date.setFullYear(date.getFullYear() + interval.years);
      }
      if (interval.months) {
        date.setMonth(date.getMonth() + interval.months);
      }
      
      const diffTime = date - currentTime;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      milestones.push({
        date,
        label: interval.label,
        daysAway: diffDays,
        isPast: diffDays < 0
      });
    });
    
    return milestones;
  };
  
  const milestones = getMilestones();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  
  // Format date to Vietnamese format
  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', { 
      day: 'numeric', 
      month: 'numeric', 
      year: 'numeric' 
    });
  };
  
  return (
    <AnimatedRoute>
      <div className="container pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Mio <FaHeart className="inline text-planet-venus mx-2" /> Yamin
          </h1>
          <p className="text-overlay content-backdrop max-w-md mx-auto">
            Hành trình tình yêu của chúng mình
          </p>
        </motion.div>
        
        {/* Main timer card */}
        <motion.div
          className="glass-card mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative overflow-hidden p-4">
            {/* Floating hearts background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-planet-venus opacity-10"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 20 + 10}px`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: Math.random() * 2,
                  }}
                >
                  <FaHeart />
                </motion.div>
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-2">
                <FaCalendarAlt className="text-planet-venus mr-2" />
                <span className="text-[#1a1033] font-semibold">Ngày bắt đầu: 14.06.2025</span>
              </div>
              
              {timeDiff.isCountdown ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#1a1033]">
                    Còn <span className="text-planet-venus">{timeDiff.days}</span> ngày nữa
                  </h2>
                  
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <div className="text-2xl md:text-3xl font-bold text-[#1a1033]">{timeDiff.days}</div>
                      <div className="text-xs text-[#1a1033] opacity-70">Ngày</div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <div className="text-2xl md:text-3xl font-bold text-[#1a1033]">{timeDiff.hours}</div>
                      <div className="text-xs text-[#1a1033] opacity-70">Giờ</div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <div className="text-2xl md:text-3xl font-bold text-[#1a1033]">{timeDiff.minutes}</div>
                      <div className="text-xs text-[#1a1033] opacity-70">Phút</div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold text-[#1a1033]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {timeDiff.seconds}
                      </motion.div>
                      <div className="text-xs text-[#1a1033] opacity-70">Giây</div>
                    </div>
                  </div>
                  
                  <p className="text-[#1a1033] font-medium">
                    Đếm ngược đến khi chúng mình chính thức yêu nhau!
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-[#1a1033]">
                    Đã bên nhau <span className="text-planet-venus">{timeDiff.days}</span> ngày
                  </h2>
                  
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <div className="text-2xl md:text-3xl font-bold text-[#1a1033]">{timeDiff.years}</div>
                      <div className="text-xs text-[#1a1033] opacity-70">Năm</div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <div className="text-2xl md:text-3xl font-bold text-[#1a1033]">{timeDiff.months}</div>
                      <div className="text-xs text-[#1a1033] opacity-70">Tháng</div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <div className="text-2xl md:text-3xl font-bold text-[#1a1033]">{timeDiff.remainingDays}</div>
                      <div className="text-xs text-[#1a1033] opacity-70">Ngày</div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-lg p-3">
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold text-[#1a1033]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {timeDiff.seconds}
                      </motion.div>
                      <div className="text-xs text-[#1a1033] opacity-70">Giây</div>
                    </div>
                  </div>
                  
                  <div className="text-[#1a1033] font-medium">
                    <span className="block">
                      {timeDiff.years} năm, {timeDiff.months} tháng, {timeDiff.remainingDays} ngày, 
                    </span>
                    <span className="block">
                      {timeDiff.hours} giờ, {timeDiff.minutes} phút, {timeDiff.seconds} giây
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Calendar and important dates section */}
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[#1a1033] text-center">
          Những Mốc Quan Trọng
        </h2>
        
        <motion.div
          className="grid grid-cols-1 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`glass-card overflow-hidden relative ${
                milestone.isPast ? 'opacity-70' : ''
              }`}
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className={`p-4 ${milestone.isPast ? 'text-gray-500' : 'text-planet-venus'}`}>
                  <FaRegClock className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-[#1a1033]">
                    {milestone.label}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1a1033] text-sm">
                      {formatDate(milestone.date)}
                    </span>
                    {milestone.isPast ? (
                      <span className="text-xs bg-gray-400 bg-opacity-30 px-2 py-1 rounded-full">
                        Đã qua
                      </span>
                    ) : (
                      <span className="text-xs bg-planet-venus bg-opacity-30 px-2 py-1 rounded-full text-[#1a1033]">
                        Còn {milestone.daysAway} ngày
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Special quote section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl">
            <FaHeart className="text-planet-venus text-2xl mx-auto mb-3" />
            <p className="text-[#1a1033] font-display italic text-lg">
              "Mỗi khoảnh khắc bên nhau là một khoảnh khắc đáng trân trọng"
            </p>
            <div className="mt-3 text-sm text-[#1a1033] opacity-70">Mio & Yamin</div>
          </div>
        </motion.div>
      </div>
    </AnimatedRoute>
  );
};

export default LoveTimerPage; 