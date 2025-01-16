import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs";


const Contact = () => {
  const [setErrors] = useState({});
  const [contacts, setContacts] = useState([]);
  const { token } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    objet: "",
    message: "",
  });

  async function handleCreate(e) {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErrors(data.errors);
    } else {
      // Clear the form data
      setFormData({
        objet: "",
        message: "",
      });

      // Fetch updated contacts
      getContacts();
    }
  }

  async function getContacts(page = 1) {
    setLoading(true);
    const res = await fetch(`/api/contact?page=${page}`,{

      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (res.ok) {
      setLoading(false);
      setContacts(data.data); // Laravel uses `data` for paginated items
      setTotalPages(data.last_page); // Total pages
      setCurrentPage(data.current_page); // Current page
  }
}

useEffect(() => {
  getContacts(currentPage);
}, [currentPage]);
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-8">
    <div className="h-3 bg-indigo-900 shadow-lg rounded-t-lg"></div>
    <div className="bg-white rounded-b-xl mx-auto shadow-lg overflow-hidden">
        <div className="py-8 px-4 sm:px-6 lg:px-12">
          <form onSubmit={handleCreate} className="space-y-4">
            <label className="block text-sm font-medium">
              Objet
              <input
                type="text"
                className="border h-12 px-3 py-2 mt-1 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="Objet"
                value={formData.objet}
                onChange={(e) => setFormData({ ...formData, objet: e.target.value })}
              />
            </label>

            <label className="block text-sm font-medium">
              Message
              <textarea
                className="border h-24 px-3 py-2 mt-1 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </label>

<div className="flex justify-end py-5">
  <button
    type="submit"
    className="px-4 py-2 bg-violet-700 hover:bg-indigo-700 focus:ring-4 focus:ring-violet-300 rounded-lg text-white text-sm font-semibold"
  >
    Envoyer
  </button>
</div>
          </form>

          <div className="mt-8 rounded-lg bg-gray-100">
            {/* Table for larger screens */}
            <div className="hidden md:block">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-200 border-b border-gray-300">
                  <tr>
                    <th className="py-3 text-center text-sm font-semibold">Date de message</th>
                    <th className="py-3 text-center text-sm font-semibold">Objet</th>
                    <th className="py-3 text-center text-sm font-semibold">Message</th>
                    <th className="py-3 text-center text-sm font-semibold">Suivi</th>
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
                  {contacts.length > 0 ? (
                    contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td className="py-3 text-center text-sm text-gray-700">{new Date(contact.created_at).toLocaleDateString()}</td>
                        <td className="py-3 text-center text-sm text-gray-700">{contact.objet}</td>
                        <td className="py-3 text-center text-sm text-gray-700">{contact.message}</td>
                        <td className="py-3 text-center text-sm text-gray-700">
                          <Link
                            to={`/reponse/${contact.id}`}
                            className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-white bg-gradient-to-r from-purple-400 to-orange-400 rounded-lg"
                          >
                            Réponse
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4">Pas de contacts</td>
                    </tr>
                  )}
                </tbody>}
              </table>
            </div>
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
            {/* Responsive Cards for mobile screens */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <div key={contact.id} className="bg-white p-4 rounded-lg shadow-lg space-y-3">
                    <div className="text-sm">
                      <span className="font-semibold">Date message:</span> {new Date(contact.created_at).toLocaleDateString()}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Objet:</span> {contact.objet}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Message:</span> {contact.message}
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        to={`/reponse_contact/${contact.id}`}
                        className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-white bg-gradient-to-r from-purple-400 to-orange-400 rounded-lg"
                      >
                        Réponse
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center p-4">Pas de contacts</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
