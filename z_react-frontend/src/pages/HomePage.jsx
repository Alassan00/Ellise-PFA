import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const HomePage = () => {

  const { user } = useContext(AppContext);
  return (
    <div>
      <div className="px-20 pt-12">
        <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
        <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
          <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="py-6 px-12">
              <h1 className="text-xl font-semibold">Mr/Mme.{' '+user.nom+' '}Bienvenue dans votre espace CNASSi </h1><h1 className="text-right text-xl font-semibold">مرحبا بكم في منصة اكناسي {' '+user.nom+' '}</h1>

              <div className="text-3xl font-serif font-extralight pt-16">
                <p>Veuillez utiliser le Menu à gauche de l écran </p> <p className="text-right ">
                  الرجاء استخدام القائمة اسفل الشاشة
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
