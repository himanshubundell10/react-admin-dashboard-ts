import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts"

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const LineCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart data={[200, 400, 299, 689, 455, 800, 999, 300, 1200, 1152, 1009, 800]} label="User" borderColor="rgb(53,162,255)" backgroundColor="rgba(53,162,255,0.5)" labels={months} />
          <h2>Active Users</h2>
        </section>

        {/* Total Products */}
        <section>
          <LineChart data={[40,60,244,100,142,120,42,47,50,26,32,41]} label="Products" borderColor="hsl(269,80%,40%)" backgroundColor={"hsla(269,80%,40%,0.4)"} labels={months}  />
          <h2>Total Products (SKU)</h2>
        </section>
        {/* total revenue */}
        <section>
          <LineChart data={[24000, 14000, 22099, 60289, 45995, 89000, 91099, 30290, 120840, 111852, 100009, 87200]} label="Revenue" borderColor="hsl(129,80%,40%)" backgroundColor={"hsla(129,80%,40%,0.4)"} labels={months} />
          <h2>Total Revenue</h2>
        </section>
        {/* discount line */}
        <section>
          <LineChart data={[9000, 12000, 12000, 1000, 90000, 5000, 4000, 1200, 1100, 1500, 2000, 15000]} label="Discount" borderColor="hsl(29,80%,40%)" backgroundColor={"hsla(29,80%,40%,0.4)"} labels={months} />
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>

  )
}

export default LineCharts
