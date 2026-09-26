import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import { Routes,Route  } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Prouducts from './pages/Prouducts'
import ProductsPage from './pages/ProductsPage'
import SearchResult from './pages/SearchResult'
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



              </Route>
       </Routes>
    </>
  )
}
export default App
