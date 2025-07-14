import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaChartPie, FaUser, FaStar, FaBookOpen, FaMagic, FaHeart } from 'react-icons/fa';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Trang Chủ', icon: <FaHome /> },
    { path: '/birth-chart', label: 'Bản Đồ Sao', icon: <FaChartPie /> },
    { path: '/planets', label: 'Các Hành Tinh', icon: <FaStar /> },
    { path: '/personality', label: 'Tính Cách', icon: <FaUser /> },
    { path: '/insights', label: 'Phân Tích', icon: <FaBookOpen /> },
    { path: '/love-timer', label: 'Tình Yêu', icon: <FaHeart className="text-planet-venus" /> },
  ];

  return (
    <motion.nav 
      className="main-nav"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center space-x-2 w-full items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <motion.span 
              className="nav-icon"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
            </motion.span>
            <span className="nav-text">{item.label}</span>
          </NavLink>
        ))}
        
        {/* Special journey button */}
        <NavLink
          to="/journey"
          className={({ isActive }) => 
            `journey-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <motion.div
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-mystic-peach to-mystic-blue rounded-full text-[#1a1033] font-semibold"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(159, 111, 255, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1, 1.05, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaMagic className="text-xl" />
          </motion.div>
          <span className="block text-xs mt-1 text-[#1a1033] font-medium">Hành Trình</span>
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default Navigation; 