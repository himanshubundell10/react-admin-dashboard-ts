import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"


const NewProduct = () => {
    const [name,setName] = useState<string>('')
    const [price,setPrice] = useState<number>()
    const [stock,setStock] = useState<number>()
    const[photo,setPhoto] = useState<string>()

    const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const file:File|undefined=e.target.files?.[0];

        const reader:FileReader = new FileReader();

        if(file){
            reader.readAsDataURL(file)
            reader.onloadend=()=>{
                if(typeof reader.result==="string") setPhoto(reader.result)
            }
        }


    }

  return (
    <div className="admin-container">
    <AdminSidebar />
    <main className="product-management">

        <article>
            <form >
                <h2>New Product</h2>
                <div>
                    <label>Name</label>
                    <input required onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name" />
                </div>
                <div>
                    <label>Price</label>
                    <input required onChange={(e)=>setPrice(Number(e.target.value))} value={price} type="number" placeholder="Price" />
                </div>
                <div>
                    <label>Stock</label>
                    <input required onChange={(e)=>setStock(Number(e.target.value))} value={stock} type="number" placeholder="stock" />
                </div>
                <div>
                    <label>Photo</label>
                    <input required onChange={changeImageHandler} type="file"  />
                </div>
                {photo && <img src={photo} alt="New Image" /> }
                <button type="submit">Create</button>
            </form>
        </article>

    </main>
    </div>
  )
}

export default NewProduct
