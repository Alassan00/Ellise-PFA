import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div>
          <div className='flex'>
              <Sidebar />
              <div className='w-full ml-16 md:ml-56'>
                  <Header />
                  <main>
                    <Outlet />
                  </main>
              </div>
          </div>
      </div>
  )
}

export default Layout
