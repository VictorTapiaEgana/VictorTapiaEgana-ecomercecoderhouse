import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CardContext";
import Logo from "../../assets/logo/Logo2_nbg.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = ({ categoria }) => {  

  categoria != undefined && categoria.map((cate) => {});

  const { ArrayProductos } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"}>
          <img className="imgnombreempresa" src={Logo} alt="Nombre Empresa" />
        </Link>

        <div className="d-flex">
          {categoria !== undefined &&
            categoria.map((cate) => {
              return (
                <Link key={cate.id} className="navbar-brand" to={`/categorias/${cate.id}`}>
                  {cate.nombre}
                </Link>
              );
            })}

          {ArrayProductos.length > 0 && <CartWidget className="flex-grow-1" />}
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
