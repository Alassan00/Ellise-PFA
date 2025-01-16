/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext";
import { IoDocumentText } from "react-icons/io5";

const ShowAdhBen = () => {
  const [adherent_benefs, setAdherent_benefs] = useState([]);
  const { token } = useContext(AppContext);

  async function getAdherent_benefs() {
    const res = await fetch("/api/adherent_benefs",{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    

    if (res.ok) {
      setAdherent_benefs(data);
    }
  }

  useEffect(() => {
    getAdherent_benefs();
  }, []);

  return (
    <div>

      <div className="p-16 mx-4 rounded-lg bg-gray-100">
        {/* Table for larger screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-200 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Nom Complet</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Date Naissance</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Sexe</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Type d'Identification</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">NNI</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Adresse</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Lien parentés</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Statut matrimonial</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">Date Création</th>
                <th className="p-3 text-sm text-center font-semibold tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {adherent_benefs.length > 0 ? (
                adherent_benefs.map((adh_benef) => (
                  <tr key={adh_benef.id}>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.nom} {adh_benef.prenom}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.date_naiss}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.centrale_civilite.libelle}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.centrale_identite.libelle}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.NNI}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.adresse}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.cnass_lien_parents.libelle}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{adh_benef.cnass_statut_matri.libelle}</td>
                    <td className="p-3 text-center text-sm text-gray-700">{new Date(adh_benef.created_at).toLocaleDateString()}</td>
                    <td className="p-3 text-center mx-3 text-sm text-gray-700 justify-evenly">
                      <Link to={''} className="flex items-center justify-center px-6 text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                        <IoDocumentText className="text-2xl md:text-xl mr-0"/> <span className="pl-3">Imprimer</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center p-4 font-semibold">Pas de Bénéficiaires</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Responsive Cards for mobile screens */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {adherent_benefs.length > 0 ? (
            adherent_benefs.map((adh_benef) => (
              <div key={adh_benef.id} className="bg-white p-4 rounded-lg shadow-lg space-y-3">
                <div className="text-sm">
                  <span className="font-semibold">Nom Complet:</span> {adh_benef.nom} {adh_benef.prenom}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Date Naissance:</span> {adh_benef.date_naiss}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Sexe:</span> {adh_benef.sexe}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Moyen Identification:</span> {adh_benef.centrale_identite.libelle}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">NNI:</span> {adh_benef.NNI}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Adresse:</span> {adh_benef.adresse}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Lien parentés:</span> {adh_benef.cnass_lien_parents.libelle}
                </div>
                {/* <div className="text-sm">
                  <span className="font-semibold">Statut matrimonial:</span> {adh_benef.cnass_statut_matri.libelle}
                </div> */}
                <div className="text-sm">
                  <span className="font-semibold">Date Création:</span> {new Date(adh_benef.created_at).toLocaleDateString()}
                </div>
                <div className="flex space-x-2 justify-evenly">
                <Link to={''} className="px-6 flex items-center justify-center text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-cyan-700 to-purple-700 rounded-lg">
                        <IoDocumentText className="text-2xl md:text-xl mr-0"/> <span className="pl-3">Imprimer</span>
                      </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Pas de Bénéficiaires</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowAdhBen
