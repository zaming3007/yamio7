import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PieChart, Star, User, BookOpen, ArrowRight, Heart } from 'lucide-react';
import AnimatedRoute from '../components/common/AnimatedRoute';

const HomePage = () => {
  const features = [
    {
      path: '/birth-chart',
      icon: <PieChart className="text-4xl text-[#1A1033] opacity-80 mb-3" size={36} />,
      title: 'Bản Đồ Sao',
      description: 'Khám phá bản đồ sao chi tiết và ý nghĩa của từng vị trí',
    },
    {
      path: '/planets',
      icon: <Star className="text-4xl text-[#1A1033] opacity-80 mb-3" size={36} />,
      title: 'Các Hành Tinh',
      description: 'Tìm hiểu về ảnh hưởng của từng hành tinh lên tính cách của bạn',
    },
    {
      path: '/personality',
      icon: <User className="text-4xl text-[#1A1033] opacity-80 mb-3" size={36} />,
      title: 'Tính Cách',
      description: 'Phân tích chi tiết tính cách dựa trên chiêm tinh học',
    },
    {
      path: '/insights',
      icon: <BookOpen className="text-4xl text-[#1A1033] opacity-80 mb-3" size={36} />,
      title: 'Phân Tích',
      description: 'Những insight sâu sắc và lời khuyên từ bản đồ sao của bạn',
    },
  ];

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

  return (
    <AnimatedRoute>
      <div className="container pt-8 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h1
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
            style={{ WebkitTextStroke: '0.4px rgba(0,0,0,0.1)' }}
          >
            Văn Bảo Ngọc
          </h1>


          <motion.div
            className="mt-4 inline-flex space-x-2 items-center bg-white bg-opacity-10 p-2 px-4 rounded-full text-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[#1a1033] text-opacity-70">02/10/2002</span>
            <span className="text-[#1a1033] text-opacity-50">•</span>
            <span className="text-[#1a1033] text-opacity-70">22:00</span>
            <span className="text-[#1a1033] text-opacity-50">•</span>
            <span className="text-[#1a1033] text-opacity-70">TP. Hồ Chí Minh</span>
          </motion.div>
        </motion.div>

        {/* Journey call-to-action */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="/journey"
            className="block bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-40 transition-all duration-300 rounded-xl p-6 border border-white border-opacity-20 shadow-glass text-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#1a1033]">
                Bắt Đầu Hành Trình Khám Phá
              </h2>
              <p className="text-[#1a1033] font-medium mb-4">
                Trải nghiệm những hiểu biết sâu sắc về bản thân thông qua một hành trình đắm chìm vào thế giới chiêm tinh học
              </p>

              <motion.div
                className="inline-flex items-center space-x-2 px-5 py-2 bg-[#1a1033] text-white rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Khám phá ngay</span>
                <ArrowRight size={16} />
              </motion.div>
            </div>

            {/* Decorative background */}
            <div className="absolute inset-0 opacity-30 z-0">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-r from-mystic-peach to-mystic-blue blur-xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-r from-mystic-blue to-mystic-purple blur-xl"></div>
            </div>
          </Link>
        </motion.div>

        {/* Love Timer call-to-action */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/love-timer"
            className="block bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-40 transition-all duration-300 rounded-xl p-6 border border-white border-opacity-20 shadow-glass text-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#1a1033]">
                Mio <Heart className="inline text-red-500 mx-2" size={24} /> Yamin
              </h2>
              <p className="text-[#1a1033] font-medium mb-4">
                Hành trình tình yêu bắt đầu từ 14.06.2025 - Theo dõi khoảng thời gian chúng mình bên nhau
              </p>

              <motion.div
                className="inline-flex items-center space-x-2 px-5 py-2 bg-red-500 text-white rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Xem ngay</span>
                <ArrowRight size={16} />
              </motion.div>
            </div>

            {/* Decorative background */}
            <div className="absolute inset-0 opacity-30 z-0">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-r from-pink-300 to-red-300 blur-xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-r from-red-300 to-pink-300 blur-xl"></div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Link to={feature.path} className="block text-center">
                {feature.icon}
                <h3 className="text-xl font-display mb-2 text-[#1a1033]">{feature.title}</h3>
                <p className="text-[#1a1033] text-opacity-70 text-sm">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedRoute>
  );
};

export default HomePage; 