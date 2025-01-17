import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../pages/CartContext.js"
import Productt from "./productt.jsx"

const Navigations = () => {
const cartstyle = {
    background:'orange',
    display:'flex',
    padding:'6px 12px',
    borderRadius:'50px'
}


const {cart} = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex item-center justify-between py-4">
      
        <Link to="/">
            <img style={{height:45}} src="/images/logo.png" alt="logo" />
        </Link>
        
        <ul className="flex item-center">
            <li><Link to="/">Home</Link></li>
            <li className="ml-3"><Link to="/product">Products</Link></li>
            <li className="ml-3">
                <Link to="/cart">
                    <div style={cartstyle}>
                        <span>{ cart && cart.totalItems ?cart.totalItems : 0 }</span>
                        <img className="ml-4" src="/images/cart.png" alt="cart img"/>
                    </div>
                </Link>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigations