import { useState } from "react";
import Header from "../components/layouts/Header"

  
const ValidationCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  const handleValidateCode = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/verifie_code', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,  // Change to match backend's expected 'code' key
        }),
      });
  
      const data = await response.json();
      console.log(data.message);
  
      if (data.success) {
        console.log('code validated successfully');
        // Redirect or perform the next action
      } else {
        setError('Invalid code, please try again.');
      }
    } catch (err) {
      console.error('Error validating code:', err);
      setError('Error validating code. Please try again later.');
    }
  };
  
        


  return (
    <div>
      <Header />
      <div className="px-40 pt-12">
        <div className="container mx-auto rounded-sm">
          <div className="h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-b-xl"></div>
          <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="py-16 px-12">
              <form onSubmit={handleValidateCode}>
                <label className="text-sm font-medium">Code de validation<span className="text-red-600">*</span>
                  <input
                    type="text"
                    className="border h-5 px-3 py-5 mt-2 font-semibold hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-400 rounded-md"
                    placeholder="Code de validation"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </label>
                {error && <p className="text-red-600">{error}</p>}

                <div className="mt-8 flex flex-col gap-y-4">
                  <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-sm font-bold">
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ValidationCode