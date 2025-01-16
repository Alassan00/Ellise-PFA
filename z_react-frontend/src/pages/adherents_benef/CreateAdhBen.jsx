
/* eslint-disable react/no-unescaped-entities */
import {   useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CreateAdhBen = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const {token} = useContext(AppContext);
  const { formData } = location.state; 
  const [errors, setErrors] = useState({})
  const [persons, setPersons] = useState(
    Array.from({length:formData.nb_person}, () => ({
    nom : "",
    prenom : "",
    nom_ar : "",
    prenom_ar : "",
    NNI : "",
    date_naiss : "",
    centrale_civilite_id : 0,
    centrale_identite_id : 0,
    adresse : "",
    cnass_statut_matri_id: 0,
    cnass_lien_parents_id: 0,
    fichier : "",
    photo : "",
    }))
  );

  const handlePersonChange = (index, field, value) => {
    const updatedPersons = [...persons];
    updatedPersons[index][field] = value;
    setPersons(updatedPersons);
  };

  async function handleCreate(e) {
    e.preventDefault();
    
    const res = await fetch('/api/adherent_benefs', {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({persons : persons}),
    });
    const data = await res.json();
    

      if (data.errors) {
        setErrors(data.errors);
        
      } else {
         navigate("/adherents");
      }
  };



  const [civilites, setCivilites] = useState([])
  async function getCivilites() {
    const res = await fetch("/api/civilite");
    const data = await res.json();

    if(res.ok) {
      setCivilites(data);
    }
  }

  const [identites, setIdentites] = useState([])
  async function getIdentites() {
    const res = await fetch("/api/identite");
    const data = await res.json();

    if(res.ok) {
      setIdentites(data);
    }
  }

  const [statut_matris, setStatut_matris] = useState([])
  async function getStatut_matris() {
    const res = await fetch("/api/statut_matri");
    const data = await res.json();

    if(res.ok) {
      setStatut_matris(data);
    }
  }

  const [liens_parentes, setLiens_parentes] = useState([])
  async function getLiens_parentes() {
    const res = await fetch("/api/liens_parente");
    const data = await res.json();

    if(res.ok) {
      setLiens_parentes(data);
    }
  }

  useEffect(()=>{
    getIdentites();
    getCivilites();
    getStatut_matris();
    getLiens_parentes();
  },[]);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8">
    <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
    <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
    <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <form onSubmit={handleCreate}>
        {persons.map((person, index) => (
          <div key={index} className="mb-8">
            <div className="text-lg font-semibold text-gray-800 border-b-2 border-indigo-600 mb-4 pb-2">Personne en charge N°{index + 1}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Nom<span className="text-red-600">*</span></span>
                <input type="text" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" placeholder="Nom" value={person.nom} onChange={(e) => handlePersonChange(index, 'nom', e.target.value)} />
                {errors.nom && <p className="text-red-600 text-xs mt-1">{errors.nom[0]}</p>}
              </label>
              <label className="flex flex-col text-right">
                <span className="text-sm font-medium">الإسم العائلي</span>
                <input type="text" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" placeholder="Nom_Ar" value={person.nom_ar} onChange={(e) => handlePersonChange(index, 'nom_ar', e.target.value)} />
                {errors.nom_ar && <p className="text-red-600 text-xs mt-1">{errors.nom_ar[0]}</p>}
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Prénom<span className="text-red-600">*</span></span>
                <input type="text" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" placeholder="Prénom" value={person.prenom} onChange={(e) => handlePersonChange(index, 'prenom', e.target.value)} />
                {errors.prenom && <p className="text-red-600 text-xs mt-1">{errors.prenom[0]}</p>}
                </label>
              <label className="flex flex-col text-right">
                <span className="text-sm font-medium">الإسم الشخصي</span>
                <input type="text" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" placeholder="Prénom_ar" value={person.prenom_ar} onChange={(e) => handlePersonChange(index, 'prenom_ar', e.target.value)} />
                {errors.prenom_ar && <p className="text-red-600 text-xs mt-1">{errors.prenom_ar[0]}</p>}
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Date de Naissance<span className="text-red-600">*</span></span>
                <input type="date" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" value={person.date_naiss} onChange={(e) => handlePersonChange(index, 'date_naiss', e.target.value)} />
                {errors.date_naiss && <p className="text-red-600 text-xs mt-1">{errors.date_naiss[0]}</p>}
                </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Civilité<span className="text-red-600">*</span></span>
                <select className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" value={person.centrale_civilite_id} onChange={(e) => handlePersonChange(index, 'centrale_civilite_id', e.target.value)}>
                  <option value=""> -------- -------- </option>
                  {civilites.map(civilite => (
                    <option key={civilite.id} value={civilite.id}>{civilite.libelle}</option>
                  ))}
                </select>
                {errors.centrale_civilite_id && <p className="text-red-600 text-xs mt-1">{errors.centrale_civilite_id[0]}</p>}
                </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Statut matrimonial<span className="text-red-600">*</span></span>
                <select className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" value={person.cnass_statut_matri_id} onChange={(e) => handlePersonChange(index, 'cnass_statut_matri_id', e.target.value)}>
                  <option value=""> -------- -------- </option>
                  {statut_matris.map(statut_matri => (
                    <option key={statut_matri.id} value={statut_matri.id}>{statut_matri.libelle}</option>
                  ))}
                </select>
                {errors.cnass_statut_matri_id && <p className="text-red-600 text-xs mt-1">{errors.cnass_statut_matri_id[0]}</p>}
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Lien avec l'adherent<span className="text-red-600">*</span></span>
                <select className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" value={person.cnass_lien_parents_id} onChange={(e) => handlePersonChange(index, 'cnass_lien_parents_id', e.target.value)}>
                  <option value=""> -------- -------- </option>
                  {liens_parentes.map(liens_parente => (
                    <option key={liens_parente.id} value={liens_parente.id}>{liens_parente.libelle}</option>
                  ))}
                </select>
                {errors.cnass_lien_parents_id && <p className="text-red-600 text-xs mt-1">{errors.cnass_lien_parents_id[0]}</p>}
                </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Type de pièce d'identité<span className="text-red-600">*</span></span>
                <select className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" value={person.centrale_identite_id} onChange={(e) => handlePersonChange(index, 'centrale_identite_id', e.target.value)}>
                  <option value=""> -------- -------- </option>
                  {identites.map(iden => (
                    <option key={iden.id} value={iden.id}>{iden.libelle}</option>
                  ))}
                </select>
                {errors.centrale_identite_id && <p className="text-red-600 text-xs mt-1">{errors.centrale_identite_id[0]}</p>}
                </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">NNI<span className="text-red-600">*</span></span>
                <input type="text" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" placeholder="NNI" value={person.NNI} onChange={(e) => handlePersonChange(index, 'NNI', e.target.value)} />
                {errors.NNI && <p className="text-red-600 text-xs mt-1">{errors.NNI[0]}</p>}
                </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Adresse de résidence<span className="text-red-600">*</span></span>
                <input type="text" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" placeholder="Adresse de résidence" value={person.adresse} onChange={(e) => handlePersonChange(index, 'adresse', e.target.value)} />
                {errors.adresse && <p className="text-red-600 text-xs mt-1">{errors.adresse[0]}</p>}
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Photo d'identité <span className="text-red-600">(.jpg, .jpeg, .png )</span> <span className="text-red-600">*</span></span>
                <input type="file" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" onChange={(e) => handlePersonChange(index, 'photo', e.target.files[0])} />
                {errors.photo && <p className="text-red-600 text-xs mt-1">{errors.photo[0]}</p>}
                </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">Pièce d'identité <span className="text-red-600">(.pdf, .jpg, .png )</span> <span className="text-red-600">*</span></span>
                <input type="file" className="border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400" onChange={(e) => handlePersonChange(index, 'fichier', e.target.files[0])} />
                {errors.fichier && <p className="text-red-600 text-xs mt-1">{errors.fichier[0]}</p>}
                </label>
            </div>
          </div>
        ))}


<div className="flex justify-end py-5">
  <button
    type="submit"
    className="px-4 py-2 bg-violet-700 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold"
  >
    Valider
  </button>
</div>
      </form>
    </div>
  </div>
</div>

  )

}
export default CreateAdhBen

