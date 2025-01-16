/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Header from "../../components/layouts/Header";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "../../App.css"

const LoginPage = () => {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tel: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: 'post',
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErrors(data.errors);
    }
    localStorage.setItem('token', data.token);
    setToken(data.token);
    navigate("/");
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row justify-evenly items-center pt-20 gap-y-10 lg:gap-y-0">
  {/* Form Container */}
  <div className="px-4 lg:px-20 w-full lg:w-1/2">
        <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
        <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="py-10 px-6 lg:px-12">
          {/* <div className="flex justify-between py-2">
            <Link
              to={"/signup"}
              className="mx-2 px-4 py-3 rounded-xl bg-violet-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Création de compte
            </Link>
            <Link
              to={"#"}
              className="mx-2 px-4 py-3 rounded-xl bg-violet-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Activation de compte
            </Link>
          </div> */}

          <form onSubmit={handleLogin}>
            <label className="text-sm font-medium">
              Téléphone<span className="text-red-600">*</span>
              <input
                type="text"
                className="border w-full h-12 px-3 py-2 mt-2 font-semibold rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="Téléphone"
                value={formData.tel}
                onChange={(e) =>
                  setFormData({ ...formData, tel: e.target.value })
                }
              />
              {errors.tel && (
                <p className="error text-red-600">
                  {errors.tel[0]}
                </p>
              )}
            </label>

            <br />

            <label className="text-sm font-medium">
              Mot de Passe<span className="text-red-600">*</span>
              <input
                type="password"
                className="border w-full h-12 px-3 py-2 mt-2 font-semibold rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="Mot de Passe"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="error text-red-600">
                  {errors.password[0]}
                </p>
              )}
            </label>

<div className="flex justify-end py-5">
  <button
    type="submit"
    className="px-4 py-2 bg-violet-700 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold"
  >
    Connexion
  </button>
</div>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* Carousel Container */}
  {/* <div className="w-full lg:w-1/2 px-4 lg:px-20">
    <div className="container mx-auto rounded-sm w-full">
      <div className="relative rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-[485px]">
          {["assets/img/slides-1.jpg", "assets/img/slides-2.jpg", "assets/img/slides-3.jpg", "assets/img/slides-4.jpg"].map(
            (src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[4000ms] ${
                  index === 0 ? "opacity-100" : "opacity-0"
                } animate-carousel-fade`}
              >
                <img
                  src={src}
                  alt={`slide-${index + 1}`}
                  className="block w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div> */}
</div>

    </div>
  );
};

export default LoginPage;
