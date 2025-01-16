/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { IoDocumentText } from "react-icons/io5";
import { FaUserEdit, FaRegCreditCard } from "react-icons/fa";
import { BsArrowLeftCircleFill , BsArrowRightCircleFill } from "react-icons/bs";

const ShowAdh = () => {
const [adherents, setAdherents] = useState([]);
const { token } = useContext(AppContext);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

async function getAdherents(page = 1) {
  setLoading(true);
  const res = await fetch(`/api/adherents?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  if (res.ok) {
    setLoading(false);
    setAdherents(data.data); // Laravel uses `data` for paginated items
    setTotalPages(data.last_page); // Total pages
    setCurrentPage(data.current_page); // Current page
  }
}

useEffect(() => {
  getAdherents(currentPage);
}, [currentPage]);


const adherentsEnCours = adherents.filter(adh => adh.centrale_etat_id === 2);

  return (
    <div>

      <div className="p-16 mx-4 rounded-lg bg-gray-100">
        {/* Table for larger screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-600 border-b-2 border-gray-400">
              <tr>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Nom Complet</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">NNI</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Date Naissance</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Sexe</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Identification</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Adresse</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Téléphone</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Moughata</th>
                <th className="py-6 text-sm font-semibold tracking-wide text-center">Date Création</th>
                <th className="py-6 text-sm text-center font-semibold tracking-wide">Actions</th>
              </tr>
            </thead>
            {loading && <tbody>
              <tr>
                <td colSpan={"10"} className="py-4 text-lg font-semibold uppercase tracking-wide text-center">
                  <span className="text-center">Chargement...</span>
                </td>
              </tr>
            </tbody>}

            {!loading && <tbody className="divide-y divide-gray-200">
              {adherentsEnCours.length > 0 ? (
                adherentsEnCours.map((adh) => (
                  <tr key={adh.id}>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.nom} {adh.prenom}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.NNI}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.date_naiss}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.centrale_civilite.libelle}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.centrale_identite.libelle}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.adresse}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.tel}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{adh.centrale_moughata.libelle}</td>
                    <td className="py-3 text-center text-sm text-gray-700">{new Date(adh.created_at).toLocaleDateString()}</td>
                    <td className="flex justify-evenly items-center py-3 text-center mx-3 text-sm border-l-2 border-gray-200 text-gray-700">
                      <Link to={`/update_adh/${adh.id}`} className="flex mx-1 text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                        <IoDocumentText className="text-2xl md:text-xl mr-0 ml-2"/> <span className="pl-2">Assureé principal</span>
                      </Link>
                      <Link to={`/update_adh_benef/${adh.id}`} state={adherentsEnCours} className="flex mx-1 text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                        <FaUserEdit className="text-2xl md:text-xl mr-0 ml-2"/> <span className="pl-2">Bénéficiaire</span>
                      </Link>
                      <Link to={`/paiement/${adh.id}`} className="flex mx-1 text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                        <FaRegCreditCard className="text-2xl md:text-xl mr-0 ml-2"/> <span className="pl-2">Paiment</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : ("")}
            </tbody>
            }
          </table>
          <div className="pagination-controls flex justify-end mt-4">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="py-2 mx-2 bg-transparent rounded-lg"
  >
    <BsArrowLeftCircleFill size={20} color="indigo"/>
  </button>
  
  <span className=" py-2">
     {currentPage}/{totalPages}
  </span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="py-2 mx-2 bg-transparent rounded-lg"
  >
    <BsArrowRightCircleFill size={20} color="indigo"/>
  </button>
</div>

        </div>
        {/* Table for medium screens */}
        {/* <div className="hidden md:block lg:hidden">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-600 border-b-2 border-gray-400">
              <tr>
                <th className="py-4 text-sm font-semibold tracking-wide text-center">Nom Complet</th>
                <th className="py-4 text-sm font-semibold tracking-wide text-center">Téléphone</th>
                <th className="py-4 text-sm font-semibold tracking-wide text-center">Date Création</th>
                <th className="py-4 text-sm text-center font-semibold tracking-wide">Actions</th>
              </tr>
            </thead>
            {loading && <tbody>
              <tr>
                <td colSpan={"4"} className="py-4 text-lg font-semibold uppercase tracking-wide text-center">
                  <span className="text-center">Chargement...</span>
                </td>
              </tr>
            </tbody>}

            {!loading && <tbody className="divide-y divide-gray-200">
              {adherentsEnCours.length > 0 ? (
                adherentsEnCours.map((adh) => (
                  <tr key={adh.id}>
                    <td className="py-3 text-sm text-gray-700">{adh.nom} {adh.prenom}</td>
                    <td className="py-3 text-sm text-gray-700">{adh.tel}</td>
                    <td className="py-3 text-sm text-gray-700">{new Date(adh.created_at).toLocaleDateString()}</td>
                    <td className="flex justify-evenly items-center py-3 mx-3 text-sm border-l-2 border-gray-200 text-gray-700">
                      <Link to={`/update_adh/${adh.id}`} className="text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                        <IoDocumentText className="text-2xl md:text-xl mr-0" /> <span className="pl-3">Assureé principal</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : ("")}
            </tbody>
            }
          </table>
        </div> */}


        {/* Responsive Cards for mobile screens */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {adherentsEnCours.length > 0 ? (
            adherentsEnCours.map((adh) => (
              <div key={adh.id} className="bg-white p-4 rounded-lg shadow-lg space-y-3">
                <div className="text-sm">
                  <span className="font-semibold">Nom Complet:</span> {adh.nom} {adh.prenom}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">NNI:</span> {adh.NNI}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Date Naissance:</span> {adh.date_naiss}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Sexe:</span> {adh.centrale_civilite.libelle}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Moyen Identification:</span> {adh.centrale_identite.libelle}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Adresse:</span> {adh.adresse}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Téléphone:</span> {adh.tel}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Moughata:</span> {adh.centrale_moughata.libelle}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Date Création:</span> {new Date(adh.created_at).toLocaleDateString()}
                </div>
                <div className="flex space-x-2">
                  <Link to={`/update_adh/${adh.id}`}  className="px-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                    <IoDocumentText className="text-2xl md:text-xl mr-0"/> <span className="pl-3">Assureé principal</span>
                  </Link>
                  <Link to={`/update_adh_benef/${adh.id}`} className="px-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                    <IoDocumentText className="text-2xl md:text-xl mr-0"/> <span className="pl-3">Bénéficiaire</span>
                  </Link>
                  <Link to={`/paiement/${adh.id}`} className="px-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                    <IoDocumentText className="text-2xl md:text-xl mr-0"/> <span className="pl-3">Paiment</span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Pas de adherents En Cours validation</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowAdh;
