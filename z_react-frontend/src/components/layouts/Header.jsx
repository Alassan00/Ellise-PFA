import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";


const Header = () => {
  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown

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

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="flex justify-between items-center h-28 p-4 bg-gradient-to-r from-purple-500 to-orange-600">
      {user ? (
        <Link to={'/'} className="text-gray-300 text-2xl pl-2 font-semibold cursor-pointer "> <GiHealing size={40}/> </Link>
      ) : (
        <div className="flex-shrink-0">
          <Link to={'/'}>
            <img src="/assets/img/logo2.png" width="200" className="w-48 h-28 md:w-56" alt="Logo" />
          </Link>
        </div>
      )}

      {user ? (
        <div className="flex relative justify-between gap-2" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            <img
              src="/assets/img/avatar.png"
              alt="avatar"
              className="w-8 h-10 rounded-full border border-gray-800"
            />
            <span>{user.nom}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        <div>
          <img
            src="/assets/img/cigle.png"
            alt="cigle"
            className="w-16 h-16 rounded-full"
          />
        </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-16 w-48 bg-white shadow-lg rounded-lg">
              <Link
                to="/profile_compte"
                className="flex gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaUserTie size={20} /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex gap-3 w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <IoLogOut size={20} /> Déconnexion
              </button>
            </div>
          )}
        </div>
      ) : (
        
        <div className="flex space-x-6">
          <Link
            to={'/signup'}
            className="px-4 py-2 bg-violet-700 my-2 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold"
            >
            Inscription
          </Link>
          <Link
            to={'/login'}
            className="px-4 py-2 bg-violet-700 my-2 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold"
            >
            Connexion
          </Link>
          <img
            src="/assets/img/cigle.png"
            alt="cigle"
            className="w-16 h-16 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
