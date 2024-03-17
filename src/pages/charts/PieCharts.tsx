import AdminSidebar from "../../components/AdminSidebar"
import { DoughnutChart, PieChart } from "../../components/Charts"
import { categories } from "../../assets/data.json"


const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        {/* pie chart section */}
        <section>
          <div>
            <PieChart labels={["Processing", "Shipped", "Delivered"]} data={[12, 9, 13]} backgroundColor={[`hsl(110,80%,80%)`, `hsl(110,80%,50%)`, `hsl(110,80%,50%)`]} offset={[0, 0, 50]} />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>

        {/* dougnut chart section*/}
        <section>
          <div>
            <DoughnutChart labels={categories.map((i) => i.heading)} data={categories.map((i) => i.value)} backgroundColor={categories.map((i) => `hsl(${i.value * 4},${i.value}%,50%)`)} offset={[0, 0, 0, 80]} legends={false} />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        {/* stock avalablity dougnut chart section*/}
        <section>
          <div>
            <DoughnutChart labels={["in Stock", "Out Of Stock"]} data={[10, 4]} backgroundColor={['hsl(269,80%,40%)', "rgb(53,162,255)"]} offset={[0, 80]} legends={false} cutout={"70%"} />
          </div>
          <h2>Stock Avalablity</h2>
        </section>

        {/* Revenue Distribution dougnut chart section*/}
        <section>
          <div>
            <DoughnutChart labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]} data={[32, 10, 30, 55, 20]} backgroundColor={['hsl(110,80%,40%)', 'hsl(19,80%,40%)', 'hsl(69,80%,40%)', 'hsl(300,80%,40%)', "rgb(53,162,255)"]} offset={[20, 30, 20, 30, 80]} legends={false} />
          </div>
          <h2>Revenue Avalablity</h2>
        </section>

        {/* pie cahrt for user age group */}
        <section>
          <div>
            <PieChart labels={["Teenager(Below 20)", "Adult(20-40)", "Older(Above 40)"]} data={[20, 250, 40]} backgroundColor={[`hsl(10,80%,80%)`, `hsl(10,80%,50%)`, `hsl(10,40%,50%)`]} offset={[0, 0, 50]} />
          </div>
          <h2>Users Age Group</h2>
        </section>

        {/*admin customer doughnut chart  */}
        <section>
          <div>
            <DoughnutChart labels={["Admin", "Customers"]} data={[5, 24]} backgroundColor={['hsl(355,100%,38%)', "hsl(44,98%,50%)"]} offset={[0, 80]}  cutout={"70%"} />
          </div>
          
        </section>
      </main>
    </div>
  )
}

export default PieCharts
