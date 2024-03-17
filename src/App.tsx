import { Routes,Route,BrowserRouter as Router, Link } from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader"


const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Products = lazy(()=>import("./pages/Products"))
const Transaction = lazy(()=>import("./pages/Transaction"))
const Customer = lazy(()=>import("./pages/Customer"))
const NewProduct = lazy(()=>import("./pages/manegment/NewProduct"))
const ProductManegment = lazy(()=>import("./pages/manegment/ProductManegment"))
const TransactionManegment   = lazy(()=>import("./pages/manegment/TransactionManegment"))
const BarCharts = lazy(()=>import("./pages/charts/BarCharts"))
const LineCharts = lazy(()=>import("./pages/charts/LineCharts"))
const PieCharts = lazy(()=>import("./pages/charts/PieCharts"))
const Stopwatch = lazy(()=>import("./pages/apps/Stopwatch"))
const Toss = lazy(()=>import("./pages/apps/Toss"))
const Coupon = lazy(()=>import("./pages/apps/Coupon"))
const App = () => {
  return (
   <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Link to={"/admin/dashboard"}><button>Visit Dashboard</button></Link>}/>
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/product" element={<Products/>} />
      <Route path="/admin/transaction" element={<Transaction/>} />
      <Route path="/admin/customer" element={<Customer/>} />

      {/* Charts */}
<Route path="/admin/chart/bar" element={<BarCharts/>}/>
<Route path="/admin/chart/pie" element={<PieCharts/>}/>
<Route path="/admin/chart/line" element={<LineCharts/>}/>



      {/* Apps */}
      <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
      <Route path="/admin/app/toss" element={<Toss/>}/>
      <Route path="/admin/app/coupon" element={<Coupon/>}/>


      {/* manegment */}
      <Route path="/admin/product/new"  element={<NewProduct/>}/>
      <Route path="/admin/product/:id"  element={<ProductManegment/>}/>
      <Route path="/admin/transaction/:id"  element={<TransactionManegment/>}/>
    </Routes>
    </Suspense>
    
   </Router>
  )
}

export default App

