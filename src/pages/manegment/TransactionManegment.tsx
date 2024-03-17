import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar'
import { OrderItemType, OrderType } from '../../types'

const img = "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/397167/01/sv01/fnd/IND/fmt/png/RBD-Game-Low-x-HARRDY-SANDHU-Men's-Sneakers"

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "hdshsgd",
    quantity: 7,
    price: 2000
  },
]

const TransactionManegment = () => {



  const [order, setOrder] = useState<OrderType>({
    name: "Random",
    address: "New Colony",
    city: "jaipur",
    country: "India",
    state: "Rajsthan",
    pinCode: 778787,
    status: "Processing",
    subtotal: 400,
    shippingCharges: 0,
    discount: 20,
    tax: 200,
    total: 400 + 0 + 200 - 20,
    orderItems,
    _id: "shshjj",
  })

  const { name, address, city, country, state, pinCode, subtotal, shippingCharges, tax, discount, total, status } = order;

  const updateHandler =()=>{
    setOrder((prev)=>({
      ...prev,
      status:prev.status==="Processing"?"Shipped":"Deliverd",
    }))
    
  }

  return (

    

    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section style={{padding:"2rem"}}>
          <h2>Order Items</h2>
          {
            order.orderItems.map((i)=>(
              <ProductCard name={i.name} photo={i.photo} _id={i._id} price={i.price} quantity={i.quantity}/>
            ))
          }
        </section >
        <article className='shipping-info-card'>
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name :{name}</p>
          <p>Address :{`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>

          <h5>Amount Info</h5>
          <p>Subtotal :{subtotal}</p>
          <p>ShippingCharges :{shippingCharges}</p>
          <p>Tax :{tax}</p>
          <p>Discount :{discount}</p>
          <p>Total :{total}</p>

          <h5>Status Info</h5>
          <p>
            Status : <span className={status==="Deliverd"?"purple":status==="Shipped"?"green":"red"}>{status}</span>
          </p>
          <button onClick={updateHandler}> Process Order</button>
        </article>


      </main>
    </div>
  )
}

const ProductCard=({name,photo,price,_id,quantity}:OrderItemType)=>(
  <div className='transaction-product-card'>
    <img src={photo} alt={name}/>
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} X ${quantity} = ${price * quantity}</span>
  </div>
)

export default TransactionManegment
