import "../CSS/Menu.css";
import logo from "../Imagenes/LogoPortada-04.png";

function Menu(props) {
	return (
		<div className='menu'>
			<div onClick={() => props.setinicioView(true)}>
				{" "}
				<img src={logo} className='logo_menu' alt='logo' />
			</div>
			<div>
				<label onClick={() => props.setquienesSomosView(true)}>
					QUIENES SOMOS
				</label>
			</div>
			<div>
				<label onClick={() => props.setServicioView(true)}>SERVICIO</label>
			</div>
			<div>
				<label onClick={() => props.setformacionView(true)}>FORMACIONES</label>
			</div>
		</div>
	);
}
export default Menu;
