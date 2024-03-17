import { ChangeEvent, FormEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const img = "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/397167/01/sv01/fnd/IND/fmt/png/RBD-Game-Low-x-HARRDY-SANDHU-Men's-Sneakers"

const ProductManegment = () => {
  const [name,setName] = useState<string>('Puma Shoes');
  const [price,setPrice] = useState<number>(2000);
  const [stock,setStock] = useState<number>(4);
  const[photo,setPhoto] = useState<string>(img);

  const [nameUpdate,setNameUpdate] = useState<string>(name);
  const [priceUpdate,setPriceUpdate] = useState<number>(price);
  const [stockUpdate,setStockUpdate] = useState<number>(stock);
  const[photoUpdate,setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      const file:File|undefined=e.target.files?.[0];

      const reader:FileReader = new FileReader();

      if(file){
          reader.readAsDataURL(file)
          reader.onloadend=()=>{
              if(typeof reader.result==="string") setPhotoUpdate(reader.result)
          }
      }


  }

  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setName(nameUpdate);  
    setPrice(priceUpdate);  
    setStock(stockUpdate);  
    setPhoto(photoUpdate);  
  }

return (
  <div className="admin-container">
  <AdminSidebar />
  <main className="product-management">
    <section>
      <strong>ID-shdshkdj</strong>
      <img src={photo} alt="Product" />
      <p>{name}</p>
      {
        stock>0?<span className="green">{stock} Available</span>:<span className="red">{stock} Not Available</span>
      }
      <h3>${price}</h3>
    </section>


{/* article part */}
      <article>
          <form onSubmit={submitHandler} >
              <h2>Manage</h2>
              <div>
                  <label>Name</label>
                  <input required onChange={(e)=>setNameUpdate(e.target.value)} value={nameUpdate} type="text" placeholder="Name" />
              </div>
              <div>
                  <label>Price</label>
                  <input required onChange={(e)=>setPriceUpdate(Number(e.target.value))} value={priceUpdate} type="number" placeholder="Price" />
              </div>
              <div>
                  <label>Stock</label>
                  <input required onChange={(e)=>setStockUpdate(Number(e.target.value))} value={stockUpdate} type="number" placeholder="stock" />
              </div>
              <div>
                  <label>Photo</label>
                  <input required onChange={changeImageHandler} type="file"  />
              </div>
              {photoUpdate && <img src={photoUpdate} alt="New Image" /> }
              <button type="submit">Update</button>
          </form>
      </article>

  </main>
  </div>
)
}

export default ProductManegment
