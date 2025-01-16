/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const UpdateAdh = () => {
  
  const {id} = useParams()
  const navigate = useNavigate();
  const {token } = useContext(AppContext);
  const [formData, setFormData] = useState({
    nom : "",
    prenom : "",
    nom_ar : "",
    prenom_ar : "",
    code : "",
    NNI : "",
    date_naiss : "",
    centrale_civilite_id : 0,
    centrale_identite_id : 0,
    adresse : "",
    tel : "",
    email : "",
    centrale_moughata_id : 0,
    centrale_commune_id : 0,
    centrale_wilaya_id : 0,
    centrale_lvc_liste_id: 0,
    centrale_socio_professionnelles_id: 0,
    cnass_statut_matri_id: 0,
    fichier : "",
    photo : "",
    nb_person: 1
  })

  const [errors, setErrors] = useState({})

  async function getAdherent() {
    const res = await fetch(`/api/adherents/${id}`);
    const data = await res.json();

    if (res.ok){
      setFormData({
        nom: data.adherent.nom,
        prenom: data.adherent.prenom,
        nom_ar: data.adherent.nom_ar,
        prenom_ar: data.adherent.prenom_ar,
        NNI: data.adherent.NNI,
        date_naiss: data.adherent.date_naiss,
        centrale_civilite_id: data.adherent.centrale_civilite_id,
        centrale_identite_id: data.adherent.centrale_identite_id,
        adresse: data.adherent.adresse,
        tel: data.adherent.tel,
        email: data.adherent.email,
        centrale_moughata_id: data.adherent.centrale_moughata_id,
        centrale_commune_id: data.adherent.centrale_commune_id,
        centrale_wilaya_id: data.adherent.centrale_wilaya_id,
        centrale_lvc_liste_id: data.adherent.centrale_lvc_liste_id,
        centrale_socio_professionnelles_id: data.adherent.centrale_socio_professionnelles_id,
        cnass_statut_matri_id: data.adherent.cnass_statut_matri_id,
        fichier: data.adherent.fichier || "",
        photo: data.adherent.photo || "",
        nb_person: data.adherent.nb_person || 1,
      })
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const res = await fetch(`/api/adherents/${id}`, {
      method: 'put',
      headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    

    if (data.errors) {
      setErrors(data.errors);
    } else {
      navigate("/create_adh_benef", { state: { formData } });
    }
  }

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


  const [moughatas, setMoughatas] = useState([])
  async function getmoughatas() {
    const res = await fetch("/api/moughata");
    const data = await res.json();

    if(res.ok) {
      setMoughatas(data);
    }
  }

  const [wilayas, setWilayas] = useState([])
  async function getWilayas() {
    const res = await fetch("/api/wilaya");
    const data = await res.json();

    if(res.ok) {
      setWilayas(data);
    }
  }

  const [communes, setCommunes] = useState([])
  async function getCommunes() {
    const res = await fetch("/api/commune");
    const data = await res.json();

    if(res.ok) {
      setCommunes(data);
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

  const [socio_proffs, setSocio_proffs] = useState([])
  async function getSocio_proffs() {
    const res = await fetch("/api/socio_proff");
    const data = await res.json();

    if(res.ok) {
      setSocio_proffs(data);
    }
  }

  const [quartiers, setQuartiers] = useState([])
  async function getQuartiers() {
    const res = await fetch("/api/quartier");
    const data = await res.json();

    if(res.ok) {
      setQuartiers(data);
    }
  }

  useEffect(()=>{
    getAdherent();
    getmoughatas();
    getIdentites();
    getWilayas();
    getCommunes();
    getCivilites();
    getStatut_matris();
    getSocio_proffs();
    getQuartiers();
  },[]);

  return (
    <div className="px-40 pt-8">
      <div className="container mx-auto rounded-sm">
        <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
        <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
          <div className="py-8 px-12">

            <form onSubmit={handleUpdate} >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Nom <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  />
                  {errors.nom && <p className="text-red-600 text-xs mt-1">{errors.nom[0]}</p>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1 text-right">الإسم العائلي <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 text-right focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="الإسم العائلي"
                    value={formData.nom_ar}
                    onChange={(e) => setFormData({ ...formData, nom_ar: e.target.value })}
                  />
                  {errors.nom_ar && <p className="text-red-600 text-xs mt-1">{errors.nom_ar[0]}</p>}
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Prénom <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Prénom"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  />
                  {errors.prenom && <p className="text-red-600 text-xs mt-1">{errors.prenom[0]}</p>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1 text-right">الإسم الشخصي <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 text-right focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="الإسم الشخصي"
                    value={formData.prenom_ar}
                    onChange={(e) => setFormData({ ...formData, prenom_ar: e.target.value })}
                  />
                  {errors.prenom_ar && <p className="text-red-600 text-xs mt-1">{errors.prenom_ar[0]}</p>}
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">NNI <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="NNI"
                    value={formData.NNI}
                    onChange={(e) => setFormData({ ...formData, NNI: e.target.value })}
                  />
                  {errors.NNI && <p className="text-red-600 text-xs mt-1">{errors.NNI[0]}</p>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Adresse <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Adresse de résidence"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                  />
                  {errors.adresse && <p className="text-red-600 text-xs mt-1">{errors.adresse[0]}</p>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Téléphone <span className="text-red-600">*</span></span>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Téléphone"
                    value={formData.tel}
                    onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                  />
                  {errors.tel && <p className="text-red-600 text-xs mt-1">{errors.tel[0]}</p>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Email <span className="text-red-600">*</span></span>
                  <input
                    type="email"
                    className="border border-gray-300 rounded-md px-3 py-2 mb-0 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email[0]}</p>}
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <label className="text-sm font-medium">Date de Naissance<span className="text-red-600">*</span>
                  <input type="date" className="border w-full px-3 py-3 md:py-4 font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.date_naiss} onChange={(e) => setFormData({ ...formData, date_naiss: e.target.value })} />
                </label>

                <label className="text-sm font-medium">Civilité<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_civilite_id} onChange={(e) => setFormData({ ...formData, centrale_civilite_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {civilites.map(civilite => (
                      <option key={civilite.id} value={civilite.id}>{civilite.libelle}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium">Pièce d'Identité<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_civilite_id} onChange={(e) => setFormData({ ...formData, centrale_civilite_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {identites.map(identite => (
                      <option key={identite.id} value={identite.id}>{identite.libelle}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="text-sm font-medium">Statut matrimonial<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.cnass_statut_matri_id} onChange={(e) => setFormData({ ...formData, cnass_statut_matri_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {statut_matris.map(statut_matri => (
                      <option key={statut_matri.id} value={statut_matri.id}>{statut_matri.libelle}</option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-medium">Statut Socio-professionnel<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_socio_professionnelles_id} onChange={(e) => setFormData({ ...formData, centrale_socio_professionnelles_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {socio_proffs.map(socio_proff => (
                      <option key={socio_proff.id} value={socio_proff.id}>{socio_proff.libelle}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <label className="text-sm font-medium">Wilaya<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_wilaya_id} onChange={(e) => setFormData({ ...formData, centrale_wilaya_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {wilayas.map(wilaya => (
                      <option key={wilaya.id} value={wilaya.id}>{wilaya.libelle}</option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-medium">Moughata<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_moughata_id} onChange={(e) => setFormData({ ...formData, centrale_moughata_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {moughatas.map(mough => (
                      <option key={mough.id} value={mough.id}>{mough.libelle}</option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-medium">Commune<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_commune_id} onChange={(e) => setFormData({ ...formData, centrale_commune_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {communes.map(comm => (
                      <option key={comm.id} value={comm.id}>{comm.libelle}</option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-medium">Quartier<span className="text-red-600">*</span>
                  <select className="w-full border px-3 py-3 md:py-4 text-center font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" value={formData.centrale_lvc_liste_id} onChange={(e) => setFormData({ ...formData, centrale_lvc_liste_id: e.target.value })}>
                    <option> -------- -------- </option>
                    {quartiers.map(quartier => (
                      <option key={quartier.id} value={quartier.id}>{quartier.libelle}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <label className="text-sm font-medium">Photo d'identité <span className="text-red-600">(.jpg, .jpeg, .png)</span> <span className="text-red-600">*</span>
                  <input type="file" className="border w-full px-3 py-3 md:py-4 font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" onChange={(e) => setFormData({ ...formData, photo: e.target.value })} />
                </label>

                <label className="text-sm font-medium">Pièce d'identité <span className="text-red-600">(.pdf, .jpg, .png)</span> <span className="text-red-600">*</span>
                  <input type="file" className="border w-full px-3 py-3 md:py-4 font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" onChange={(e) => setFormData({ ...formData, fichier: e.target.value })} />
                </label>
                <label className="text-sm font-medium">Nb° persons en charge<span className="text-red-600">*</span>
                  <input type="number" className="border w-full px-3 py-3 md:py-4 font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md" placeholder="nb_person" value={formData.nb_person} onChange={(e) => setFormData({ ...formData, nb_person: e.target.value })} />
                  {errors.nb_person && <p className="error text-red-700">{errors.nb_person[0]}</p>}
                </label>
              </div>
              {/* <label className="w-full"><input type="checkbox"/><span className="text-red-600">*</span> En cochant cette case, j'accepte la charte de la CNASS.
                     تأشير أحكام و شروط نظام التأمين الصحي الخاص بالصندوق الوطني للتضامن الصحي 
                    <a target="_blank" href="files/La charte de la CNASS.pdf">Pour lire la charte cliquer ici  <span> اضغط هنا لقراءة الشروط</span> </a> </label> 
                   */}

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
    </div>
  )
}

export default UpdateAdh

