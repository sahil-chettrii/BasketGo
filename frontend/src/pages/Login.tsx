import { useState } from "react"
import { Link } from "react-router-dom"
import { LockIcon, ShoppingBasket, UserIcon ,Mail, Loader2Icon} from "lucide-react";
import groceryBg from "../assets/grocery-bg.png";
const Login = () => {
  const[isloginState, setisloginState]=useState(true)
      const[name, setName]=useState("")
       const[email, setEmail]=useState("")
      const[password, setPassward]=useState("")
      const[loading, setLoading]=useState(false)

      const handleSubmit = (e:React.SubmitEvent)=>{
         e.preventDefault()
         setLoading(true);
         setTimeout(() => window.location.href = "/", 1000)
      }
  return (
    <div className="min-h-screen flex ">
      {/* left-side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        <img src={groceryBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative text-center px-12">
          <h2 className="text-4xl font-semibold text-white mb-4>">Welcome back to BasketGo</h2>
          <p  className="text-white/60 font-serif text-xl max-w-sm mx-auto">BasketGo makes grocery shopping simple, fast, and convenient. Get fresh essentials delivered right to your doorstep</p>
        </div>
      </div>

      {/* right side */}

  <div className="flex-1 flex items-center justify-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md">

     {/* form header massage */}
        
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
          <ShoppingBasket size={24} />
             <span className="text-2xl font-semibold text-app-green">
              BasketGo</span>
          </Link>
          <h1 className="text-2xl font-semibold text-app-green mb-2">
            {isloginState ? "Sign in to your account" : "Sign up for an account"}
          </h1>
          <p className="text-sm text-app-text-light">
            {isloginState ? "Don't have an account?" : "Already have an account?"} 


            <button onClick={()=>setisloginState(! isloginState)}
              className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors">
              
              {isloginState ? "Create an account" : "Sign in"}

            </button>
          </p>

        </div>
       

     {/* login regester form */}

     <form onSubmit={handleSubmit} className="space-y-5">
       {!isloginState && (
        <label className="text-sm flex flex-col gap-1">
          Name 
          <div className="relative">
            <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"/>
            <input type="text"
            value={name}
             onChange={(e)=>setName(e.target.value)} 
             required 
             placeholder="Your Name"
             className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
               />

          </div>
        </label>
       )}
       <label className="text-sm flex flex-col gap-1">
          Email Address
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"/>
            <input type="email"
            value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             required 
             placeholder="you@exapmple.com"
             className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
               />
          </div>
        </label>

        <label className="text-sm flex flex-col gap-1">
           Password
          <div className="relative">
            <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"/>
            <input type="Password"
            value={password}
             onChange={(e)=>setPassward(e.target.value)} 
             required 
             placeholder="......"
             className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
               />
          </div>
        </label>

      <button type="submit" disabled={loading} className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">
        {loading ? <Loader2Icon className="animated-spin"/> : 
        isloginState ? "Sign In" : "Sign Up"}
      </button>
     </form>
    </div>
      </div>
    </div>
  )
}

export default Login