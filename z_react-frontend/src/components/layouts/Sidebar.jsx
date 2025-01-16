import { FaPlus } from 'react-icons/fa'; 
import { IoHome, IoNotifications, IoCall, IoLogIn } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { RiPassValidFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const Sidebar = () => {
  const location = useLocation(); 
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeLinkIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
    setActiveLink(activeLinkIndex);
  }, [location]);

  const SIDEBAR_LINKS = [
    { id: 1, path: '/', name: "Accueil", name_ar: "الرئيسية", icon: IoHome },
    { id: 2, path: '/create_adh', name: "Ajout d'une famille", name_ar: "إضافة عائلة", icon: FaPlus },
    { id: 3, path: '/adherents', name: "Familles en cours", name_ar: "العائلات قيد الموافقة", icon: FaRegPenToSquare },
    { id: 4, path: '/adhesions', name: "Mes adhésions", name_ar: "إفاداتي", icon: MdMenuBook },
    { id: 5, path: '/adherents_valid', name: "Familles validées", name_ar: "قائمة العائلات المصدقة", icon: RiPassValidFill },
    { id: 6, path: '#', name: "Notifications", name_ar: "إشعارات", icon: IoNotifications },
    { id: 7, path: '/contact', name: "Contactez CNASS", name_ar: "CNASS اتصل بـ ", icon: IoCall },
  ];

  const { token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    const res = await fetch('/api/logout', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    if (res.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate('/login');
    }
  }

  return (
    <div className='w-20 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
      {/* Logo */}
      <div className="card-header flex justify-center md:justify-start">
        <img src="/assets/img/logo2.png" className="w-16 md:w-48" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className='mt-8 space-y-6'>
        {SIDEBAR_LINKS.map((link, index) => (
          <li key={index}
            className={`font-medium rounded-md py-3 pr-2 hover:bg-transparent hover:text-violet-700 hover:shadow-inner
              ${activeLink === index ? "bg-slate-300 rounded-e-2xl text-indigo-900" : ""}`}>
            <Link to={link.path}
              className='flex justify-center pl-2 md:justify-start items-center text-3xl md:text-base space-x-0 md:space-x-5'
              onClick={() => setActiveLink(index)}>
              <span>{link.icon()}</span>
              <span className='hidden md:flex text-sm font-semibold'>{link.name}<br />{link.name_ar}</span>
            </Link>
          </li>
        ))}

        {/* Logout */}
        <div className='w-full absolute md:bottom-5 bottom-24 left-0 px-4 py-2'>
          <form onSubmit={handleLogout}>
            <button 
            className="flex items-center justify-center gap-2 md:justify-start py-3 px-4 md:mx-auto md:py-2 md:px-6 bg-violet-700 text-white text-base md:text-sm font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-300"
            >
              <IoLogIn className="text-2xl md:text-xl mr-0" />
              <span className="hidden md:inline">Déconnexion</span>

            </button>
          </form>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar;
