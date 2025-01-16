/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useRef, useState } from "react";
import {  useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useReactToPrint } from 'react-to-print';
import { IoDocumentText } from "react-icons/io5";
const DetailsAdh = () => {

  const AttestataionPDF = useRef();

  const { token } = useContext(AppContext)
  const { id } = useParams();
  const [adherent, setAdherent] = useState(null)

  async function getAdherent() {
    const res = await fetch(`/api/adherents/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (res.ok) {
      setAdherent(data.adherent);
    }
  }

  const generatePDF = useReactToPrint({
    content: () => AttestataionPDF.current,
    documentTitle: 'Attestation_CNASS',
    onAfterPrint: () => alert('fichier est imprimer avec succés !!')
  });


  useEffect(() => {
    getAdherent();
  }, []);


  return (
    <div className="px-40 pt-8">
      <div className="container mx-auto rounded-sm">
        <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
        <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
          {adherent &&
            <div ref={AttestataionPDF}>
                        <h1 className="text-center font-semibold underline uppercase text-2xl py-2">Info d'adherent N°{adherent.id}</h1>
              <div className="py-8 px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Nom"
                      value={"Nom & Prénom : " + adherent.nom + ' ' + adherent.prenom} />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="الإسم العائلي"
                      value={adherent.prenom_ar + ' ' + adherent.nom_ar + " : الإسم الشخصي "} />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Pièce d'Identité : " + adherent.centrale_identite.libelle}
                    />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"NNI : " + adherent.NNI} />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Email : " + adherent.email} />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm font-medium mb-1"> </span>
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Téléphone"
                      value={"Téléphone : " + adherent.tel}
                    />
                  </label>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <label className="flex flex-col">
                    <input type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Date de naissance : " + adherent.date_naiss} />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Genre : " + adherent.centrale_civilite.libelle}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Statut : " + adherent.cnass_statut_matri.libelle}
                    />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Profession : " + adherent.centrale_socio_professionnelles.libelle}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium mb-1"> </span>
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      placeholder="Adresse de résidence"
                      value={"Adresse résidence : " + adherent.adresse} />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Nb° persons en charge : " + adherent.nb_person}
                    />
                  </label>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Wilaya : " + adherent.centrale_wilaya.libelle}
                    />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Moughata : " + adherent.centrale_moughata.libelle}
                    />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Commune : " + adherent.centrale_commune.libelle}
                    />
                  </label>

                  <label className="flex flex-col">
                    <input
                      type="text"
                      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                      value={"Quartier : " + adherent.centrale_lvc_liste.libelle}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* <label className="text-sm font-medium">Photo d'identité 
  <input
      type="text"
      className="border w-full px-3 py-2 mb-3 md:py-4 font-semibold text-center focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
      value={adherent.text}
    />
    </label>

  <label className="text-sm font-medium">Pièce d'identité
    <input type="text" className="border w-full px-3 py-2 mb-3  md:py-4 font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"  />
  </label> */}

                </div>
              </div>
            </div>
          }
          <div className="flex justify-end p-2">
          <button onClick={generatePDF} className="flex items-center justify-center px-6 text-xs font-semibold uppercase tracking-wider py-2 text-gray-200 bg-gradient-to-tr from-yellow-500 to-orange-600 rounded-lg">
                        <IoDocumentText className="text-2xl md:text-xl mr-0"/> <span className="pl-3">Imprimer</span>
                      </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsAdh