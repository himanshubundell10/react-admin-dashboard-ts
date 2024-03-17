import { useState ,FormEvent, useEffect} from "react"
import AdminSidebar from "../../components/AdminSidebar"

const allLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers="1234567890";
const allSymbols="!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>(``);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includesSymbols, setIncludesSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("")

  const copyText=async(coupon:string)=>{

   await window.navigator.clipboard.writeText(coupon)
   setIsCopied(true);

  }

  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!includeCharacters&&!includeNumbers&&!includesSymbols) return alert("Please Select One At Least")
   
    let result:string = prefix || "";
    const loopLength:number=size-result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString:string="";

      if(includeCharacters) entireString+=allLetters;
      if(includeNumbers) entireString+=allNumbers;
      if(includesSymbols) entireString+=allSymbols;

      const randomNum:number=Math.floor(Math.random()*entireString.length);

      result+=entireString[randomNum];
    }

    setCoupon(result);

  }


useEffect(()=>{
  setIsCopied(false);


},[coupon])
  



  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form onSubmit={submitHandler} className="coupon-form">
            <input type="text" maxLength={size} placeholder="Test To Include" value={prefix} onChange={(e) => setPrefix(e.target.value)} />


            <input type="number" placeholder="Coupon Length" value={size} onChange={(e) => setSize(Number(e.target.value))} min={8} max={25} />

            <fieldset>
              <legend>Include</legend>
              {/* number */}
              <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(prev => !prev)} />
              <span>Numbers</span>

              {/* charcter */}
              <input type="checkbox" checked={includeCharacters} onChange={() => setIncludeCharacters(prev => !prev)} />
              <span>Character</span>

              {/* symbol */}
              <input type="checkbox" checked={includesSymbols} onChange={() => setIncludesSymbols(prev => !prev)} />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {/* if coupon exist then */}
          {
            coupon && (<code>{coupon}{" "} <span onClick={()=>copyText(coupon)}>{isCopied?"Copied":"Copy"}</span>{" "}
            </code>
          )
          }
        </section>
      </main>
    </div>
  )
}

export default Coupon
