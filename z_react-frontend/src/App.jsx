import './App.css'
import Layout from './components/layouts/Layout'
import HomePage from "./pages/HomePage"
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowAdh from './pages/adherents/ShowAdh'
import CreateAdhBen from './pages/adherents_benef/CreateAdhBen'
import UpdateAdhBen from './pages/adherents_benef/UpdateAdhBen'
import NotFound from './pages/NotFound'
import CreateAdh from './pages/adherents/CreateAdh'
import UpdateAdh from './pages/adherents/UpdateAdh'
import ValidationCode from './pages/ValidationCode'
import Profile from './pages/Profile'
import Contact from './pages/contacts/Contact'
import Reponse from './pages/contacts/Reponse'
import Paiement from './pages/paiement/Paiement'
import Paiement_bankily from './pages/paiement/Paiement_bankily'
import Paiement_masravi from './pages/paiement/Paiement_masravi'
import Adhesions from './pages/adherents/Adhesions'
import DetailsAdh from './pages/adherents/DetailsAdh'
import ShowAdh_valid from './pages/adherents/ShowAdh_valid'

function App() {
  const {user} = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={user ? <Layout/> : <LoginPage/> }>
          <Route index element={<HomePage/>}/>

          <Route path='/adherents' element={ user ? <ShowAdh/> : <LoginPage/>} />
          <Route path='/adherents_valid' element={ user ? <ShowAdh_valid/> : <LoginPage/>} />
          <Route path='/create_adh' element={ user ? <CreateAdh/> : <LoginPage/>} />
          <Route path='/update_adh/:id' element={ user ? <UpdateAdh/> : <LoginPage/>} />
          <Route path='/adhesions' element={ user ? <Adhesions/> : <LoginPage/>} />
          <Route path='/details_adherent/:id' element={ user ? <DetailsAdh/> : <LoginPage/>} />

          <Route path='/profile_compte' element={ user ? <Profile/> : <LoginPage/>} />
          <Route path='/contact' element={ user ? <Contact/> : <LoginPage/>} />
          <Route path='/reponse_contact' element={ user ? <Reponse/> : <LoginPage/>} />

          <Route path='/paiement/:id' element={ user ? <Paiement/> : <LoginPage/>} />
          <Route path='/paiement_bankily' element={ user ? <Paiement_bankily/> : <LoginPage/>} />ShowAdh_valid
          <Route path='/paiement_masravi' element={ user ? <Paiement_masravi/> : <LoginPage/>} />

          <Route path='/Create_adh_benef' element={ user ? <CreateAdhBen/> : <LoginPage/>} />
          <Route path='/Update_adh_benef/:id' element={ user ? <UpdateAdhBen/> : <LoginPage/>} />
        </Route>
        <Route path='/validation_code' element={ user ? <Layout/> : <ValidationCode/>}/>
        <Route path='/signup' element={ user ? <Layout/> : <SignupPage/>}/>
        <Route path='/login' element={ user ? <Layout/> : <LoginPage/>}/>

        <Route path='*' element={ <NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
