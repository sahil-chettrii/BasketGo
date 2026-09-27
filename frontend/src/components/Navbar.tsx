import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon, ShoppingBasket, ShoppingCart,ChevronDownIcon, UserIcon, XIcon, MenuIcon,  PackageIcon,  MapPinIcon,ArrowUpRightIcon,ShieldIcon, LogOutIcon} from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {

    const user:any = {name :"Sahil",email:"Sahil@admin.com", isAdmin:"true" }
    const {cartCount , setIsCartOpen} = {
        cartCount:5,
        setIsCartOpen:(_data:any)=> {}
    };
    const[searchQuery , setSearchQuery] = useState("")
        const[userMenuOpen , setUserMenuOpen] = useState(false)
        const navigate = useNavigate()
        const handleSearch = (e:React.SubmitEvent)=>{
          e.preventDefault()
          if(searchQuery.trim()){
            navigate(`/search$q={encodeURIComponent(searchQuery.trim()}`)
            setSearchQuery("")
          }
        }

        const handleLogOut =()=> {
          setUserMenuOpen(false)
          navigate("/")
        }
          


  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
   <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
   
    {/* logo */}
    <Link to="/"className="flex items-center gap-2 text-[22px] font-medium shrink-0">
    <ShoppingBasket size={24}/> BasketGo
    </Link>
     
     <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
        {/* nav-links */}


        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <Link to={'/'}>Home</Link>
            <Link to={'/Prouducts'}>Prouducts</Link>
         <Link to="/deals" className="text-app-orange">deals</Link>
        </div>

        {/* Search */}

        <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm">
          <div className="relative w-full">
            <SearchIcon  className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500"/>
            <input type="text" 
            placeholder="Search for groceries..."
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30"/>
          </div>
        </form>

        {/* right-item */}

        <div  className="flex items-center gap-3">
           {/* Cart */}
          <button  className="relative p-2 rounded-xl" onClick={()=> setIsCartOpen(true)}>
            <ShoppingCart className="size-5 text-zinc-900"/>
            {cartCount > 0 && <span  className="absolute top-0 right-0 size-4 bg-app-orange text-white text-[10px] rounded-full flex items-center justify-center"
            >{cartCount}</span>}
          </button>
          {/* User */}

          <div className="relative">
             {user ? (
                <button  onClick={()=>setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-2 p-2">
            <div className="size-7 rounded-full bg-green-950 text-white flex items-center justify-center">
              {user.name.charAt(0).toUpperCase()}
                </div>
            <ChevronDownIcon className="size-3 text-zinc-500" />
            </button>
             )
             :(
              <div className="flex-center gap-2">
                <Link to='/login'className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full hover:bg-green-950-light transition-colors">
                <UserIcon size={16}/> Sign In
                </Link>
                {userMenuOpen ? <XIcon className="md:hidden" onClick={()=> setUserMenuOpen(!userMenuOpen)}/> :
                  <MenuIcon className="md:hidden"   onClick={()=> setUserMenuOpen(!userMenuOpen)} />}
              </div>
             )}

             {userMenuOpen && (
              <>
                  <div className="fixed inset-0 z-40" onClick={()=>
                    setUserMenuOpen(false)}/>
                     <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl shadow-lg border border-app-border py-2 z-50 animate-fade-in">
                               {user && (
                                     <div className="px-4 py-2 border-b border-app-border">
                                      <p className="text-sm font-medium text-zinc-900">
                                        {user?.name}</p>
                                        <p className="text-xs text-zinc-500">
                                              {user?.email}
                                                  </p>
                                      </div>
                               )}

                               <div onClick={()=> setUserMenuOpen(false)}>

                               {!user && <Link to="/Login" className="dropdown-link" ><UserIcon size={16}/>Sign In</Link>}

                               {user && <Link to="/Orders" className="dropdown-link" ><PackageIcon size={16}/>My Orders</Link>}

              {user && <Link to="/Addresses" className="dropdown-link" ><MapPinIcon size={16}/> Addresses</Link>}

          <Link to="/Prouducts"  className="dropdown-link md:hidden" > <ArrowUpRightIcon size={16}/>Products</Link>

                  <Link to="/deals"  className="dropdown-link md:hidden" > <ArrowUpRightIcon size={16}/>deals</Link>
                                {user?.isAdmin && (
                        <Link to="/admin/products" className="dropdown-link" ><ShieldIcon className="text-app-orange-dark" size={16}/> <span className="text-app-orange-dark">Admin Panel</span></Link>    
                                          )}
                                 {user && (
                                  <div className="border-t border-app-border pt-1">
                                  <button onClick={handleLogOut} className="flex items-center gap-3 px-4 py-2.5 text-sm text-app-error hover:bg-red-50 w-full transition-colors">
                                       <LogOutIcon size={16}/>Logout
                                  </button>
                                  </div>
                                 )}
                               </div>
                     </div>
                
              </>
             )}
          </div>

        </div>
     </div>
   </div>
    </nav>
  )
}

export default Navbar