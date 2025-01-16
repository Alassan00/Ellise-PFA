/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";

const SignupPage = () => {
  const navigate = useNavigate();
  // const { setToken } = useContext(AppContext);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    nom: "",
    tel: "",
    NNI: "",
    email: "",
    adresse: "",
    status: "",
    password: "",
    password_confirmation: "",
    code_inscription: "",
    codeEntrer: ""
  });

  useEffect(() => {
    const code_inscription = () => {
      const code = Math.floor(1000 + Math.random() * 9999); // Generates a 4-digit code
      setFormData((prevState) => ({ ...prevState, code_inscription: code }));
    };
    code_inscription();
  }, []);

  async function handleSignup(e) {
    e.preventDefault();

    if (formData.code_inscription == formData.codeEntrer) {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.errors) {
        setErrors(data.errors);
      } else {
        // navigate("/validation_code");
        navigate("/");
      }
    } else {
      setErrors({ codeEntrer: ["Le code d'inscription est incorrect."] });
    }
}


  return (
    <div>
      <Header />

      <div className="px-5 lg:px-40 pt-12">
        <div className="container mx-auto rounded-sm">
          <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
          <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
            <div className="py-8 px-6 lg:px-12">
              <form onSubmit={handleSignup}>
                <label className="block text-sm font-medium">
                  Nom Utilisateur <span className="text-red-600">*</span>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={(e) =>
                      setFormData({ ...formData, nom: e.target.value })
                    }
                  />
                  {errors.nom && (
                    <p className="text-red-700">{errors.nom[0]}</p>
                  )}
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2">
                  <label className="block text-sm font-medium">
                    NNI <span className="text-red-600">*</span>
                    <input
                      type="text"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="NNI"
                      value={formData.NNI}
                      onChange={(e) =>
                        setFormData({ ...formData, NNI: e.target.value })
                      }
                    />
                    {errors.NNI && (
                      <p className="text-red-700">{errors.NNI[0]}</p>
                    )}
                  </label>

                  <label className="block text-sm font-medium">
                    Téléphone <span className="text-red-600">*</span>
                    <input
                      type="text"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Téléphone"
                      value={formData.tel}
                      onChange={(e) =>
                        setFormData({ ...formData, tel: e.target.value })
                      }
                    />
                    {errors.tel && (
                      <p className="text-red-700">{errors.tel[0]}</p>
                    )}
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-2">
                  <label className="block text-sm font-medium">
                    Adresse électronique <span className="text-red-600">*</span>
                    <input
                      type="email"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-700">{errors.email[0]}</p>
                    )}
                  </label>

                  <label className="block text-sm font-medium">
                    Adresse de résidence <span className="text-red-600">*</span>
                    <input
                      type="text"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Adresse"
                      value={formData.adresse}
                      onChange={(e) =>
                        setFormData({ ...formData, adresse: e.target.value })
                      }
                    />
                    {errors.adresse && (
                      <p className="text-red-700">{errors.adresse[0]}</p>
                    )}
                  </label>
                </div>

                <div className="py-4">
                  <label className="block text-sm font-medium">Status:</label>
                  <div className="flex gap-5">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="Financeur"
                        className="mr-2 focus:ring-violet-400"
                        checked={formData.status === "Financeur"}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                      />
                      Finaceur
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="Chef de famille"
                        className="mr-2 focus:ring-violet-400"
                        checked={formData.status === "Chef de famille"}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                      />
                      Chef de famille
                    </label>
                  </div>
                  {errors.status && (
                    <p className="text-red-700">{errors.status[0]}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="block text-sm font-medium">
                    Password <span className="text-red-600">*</span>
                    <input
                      type="password"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    {errors.password && (
                      <p className="text-red-700">{errors.password[0]}</p>
                    )}
                  </label>

                  <label className="block text-sm font-medium">
                    Confirmation Password{" "}
                    <span className="text-red-600">*</span>
                    <input
                      type="password"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Confirmation Password"
                      value={formData.password_confirmation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password_confirmation: e.target.value,
                        })
                      }
                    />
                    {errors.password_confirmation && (
                      <p className="text-red-700">
                        {errors.password_confirmation[0]}
                      </p>
                    )}
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
                  <input
                    type="text"
                    className="border px-3 py-2 text-center font-semibold bg-gray-600 text-white focus:ring-1 focus:ring-violet-400 rounded-md"
                    name="code_inscription"
                    value={formData.code_inscription}
                    readOnly
                  />
                  <label className="block text-sm font-medium">
                    Code de validation <span className="text-red-600">*</span>
                    <input
                      type="text"
                      name="codeEntrer"
                      placeholder="Tapez le code de validation"
                      className="w-full border px-3 py-2 mt-2 font-semibold focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={formData.codeEntrer}
                      onChange={(e) =>
                        setFormData({ ...formData, codeEntrer: e.target.value })
                      }
                    />
                    {errors.codeEntrer && (
                      <p className="text-red-700">{errors.codeEntrer[0]}</p>
                    )}
                  </label>
                </div>

<div className="flex justify-end py-5">
  <button
    type="submit"
    className="px-4 py-2 bg-violet-700 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold"
  >
    S'inscrire
  </button>
</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
