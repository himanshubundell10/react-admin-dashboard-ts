import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"

const months = ["jan","feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]

const BarCharts = () => {
  return (
    <div className="admin-container">
    <AdminSidebar />
    <main className="chart-container">
      <h1>Bar Charts</h1>
      <section>
        <BarChart data_1={[300,200,335,400,755,190,790]} data_2={[200,224,500,300,743,699,200]} title_1="Products" title_2="Users" bgColor_1={'hsl(260,50%,30%)'}  bgColor_2={'hsl(360,90%,90%)'}/>
        <h2>TOP Selling Products & Top Customers</h2>
      </section>
      <section>
        <BarChart horizontal={true} data_1={[300,200,335,400,755,190,790,200,224,500,300,743]} data_2={[]} title_1="Products" title_2="" bgColor_1={'hsl(180,40%,50%)'}  bgColor_2={''} labels={months}/>
        <h2>Orders Throughout The Year</h2>
      </section>
      </main>
      </div>
  )
}

export default BarCharts
