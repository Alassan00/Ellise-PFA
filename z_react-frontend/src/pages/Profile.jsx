/* eslint-disable react/no-unescaped-entities */
// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

const Profil = () => {
//   const [user, setUsers] = useState([]);
// const { token } = useContext(AppContext);

// async function getUsers() {
//   const res = await fetch(`/api/user`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await res.json();

//   if (res.ok) {
//     setUsers(data); 
//   }
// }

// useEffect(() => {
//   getUsers();
// }, []);

  return (


    <div>
      {/* <div className="px-40 pt-12">
        <div className="container mx-auto rounded-sm">
          <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
          <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="py-16 px-12">
              {user.map((u) => (
                <div key={u.id}>
                <label className="text-sm font-medium">
                  Nom d'utilisateur
                  <input
                    type="text"
                    className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                    value={u.nom}
                  />
                </label>
                <br />

                <label className="text-sm font-medium">
                  Email
                  <input
                    type="text"
                    className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                    value={u.email}/>
                </label>
                <br />

<label className="text-sm font-medium">
  Téléphone
  <input
    type="text"
    className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
    value={u.tel}/>
</label>
<br />

<label className="text-sm font-medium">
  Adresse
  <input
    type="text"
    className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
    value={u.adresse}/>
</label>
<br />

                
              </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>



    // <div>
    //   <div className="px-40 pt-12">
    //     <div className="container mx-auto rounded-sm">
    //       <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
    //       <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
    //         <div className="py-16 px-12">
    //           <form onSubmit={handleSubmit}>
    //             <label className="text-sm font-medium">
    //               Mot de passe actuel<span className="text-red-600">*</span>
    //               <input
    //                 type="password"
    //                 className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
    //                 placeholder="Mot de passe actuel"
    //                 value={formData.currentPassword}
    //                 onChange={(e) =>
    //                   setFormData({ ...formData, currentPassword: e.target.value })
    //                 }
    //               />
    //               {errors.currentPassword && (
    //                 <p className="text-red-600">{errors.currentPassword}</p>
    //               )}
    //             </label>
    //             <br />

    //             <label className="text-sm font-medium">
    //               Nouveau Mot de passe<span className="text-red-600">*</span>
    //               <input
    //                 type="password"
    //                 className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
    //                 placeholder="Nouveau Mot de passe"
    //                 value={formData.newPassword}
    //                 onChange={(e) =>
    //                   setFormData({ ...formData, newPassword: e.target.value })}
    //               />
    //               {errors.newPassword && (
    //                 <p className="text-red-600">{errors.newPassword}</p>
    //               )}
    //             </label>
    //             <br />

    //             <label className="text-sm font-medium">
    //               Confirmer le nouveau mot de passe
    //               <span className="text-red-600">*</span>
    //               <input
    //                 type="password"
    //                 className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
    //                 placeholder="Confirmer le nouveau mot de passe"
    //                 value={formData.newPassword_confirmation}
    //                 onChange={(e) =>
    //                   setFormData({ ...formData, newPassword_confirmation: e.target.value })}
    //               />
    //             </label>
    //             {errors.newPassword_confirmation && (
    //               <p className="text-red-600">{errors.newPassword_confirmation}</p>
    //             )}

    //             <div className="flex justify-end py-5">
    //               <button className="px-4 py-2 bg-violet-700 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold">
    //                 Valider
    //               </button>
    //             </div>
    //             {errors.errors && <p className="text-red-600">{errors.errors}</p>}
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profil;
