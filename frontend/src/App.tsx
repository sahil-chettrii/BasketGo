import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import { Routes,Route  } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Prouducts from './pages/Prouducts'
import ProductsPage from './pages/ProductsPage'
import SearchResult from './pages/SearchResult'
import FlashDeals from './pages/FlashDeals'
import CheckOut from './pages/CheckOut'
import MyOders from './pages/MyOders'
import OderTracking from './pages/OderTracking'
import Addresses from './pages/Addresses'
import ProtectedRoute from './components/ProtectedRoute'
function App() {

  return (
    <>
      <Toaster position="top-right" toastOptions={{duration: 3000, style:
       {background: "#1B3022", color: "#fff", borderRadius: "12px", fontSize: "14px"}}} />
       
       <Routes>
       {/* auth page */}
              <Route path='/Login' element={<Login/>}/>

              {/* main pages include navbar and footer */}

              <Route path='/' element={<AppLayout/>}>
                  <Route  index element={<Home/>}/>
                  <Route  path='/Prouducts'element={<Prouducts/>}/>
                  <Route  path='/Prouducts/:id'element={<ProductsPage/>}/>
                 <Route  path='/Search'element={<SearchResult/>}/>
                 <Route  path='/Deals'element={<FlashDeals/>}/>

               <Route element={<ProtectedRoute/>}>
                <Route path='CheckOut' element={<CheckOut/>}/>
                 <Route path='Oders' element={<MyOders/>}/>
                 <Route path='Oders/:id' element={<OderTracking/>}/>
                 <Route path='Addresses' element={<Addresses/>}/>

               </Route>



              </Route>
       </Routes>
    </>
  )
}
export default App
