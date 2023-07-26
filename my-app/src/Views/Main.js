import "../CSS/Main.css";
import React, { useEffect, useState } from "react";

import logoTicktok from "../Imagenes/redes/ticktok.png";
import logoIG from "../Imagenes/redes/ig.png";
import logoMap from "../Imagenes/redes/location.png";
import logoTelegram from "../Imagenes/redes/telegram.png";

import slogan from "../Imagenes/Eslogan-042.png";

import MENU from "./Menu.js";
import SERVICIO from "./Servicios.js";
import FORMACIONES from "./Formaciones";
import QUIENESSOMOS from "./QuienesSomos";

function Main() {
	const [servicioView, setServicioView] = useState(false);
	const [inicioView, setinicioView] = useState(true);
	const [quienesSomosView, setquienesSomosView] = useState(false);
	const [formacionView, setformacionView] = useState(false);

	useEffect(() => {
		if (servicioView) {
			setinicioView(false);
			setquienesSomosView(false);
			setformacionView(false);
			window.scroll(0, 0);
		}
	}, [servicioView]);
	useEffect(() => {
		if (inicioView) {
			setServicioView(false);
			setquienesSomosView(false);
			setformacionView(false);
			window.scroll(0, 0);
		}
	}, [inicioView]);
	useEffect(() => {
		if (quienesSomosView) {
			setinicioView(false);
			setServicioView(false);
			setformacionView(false);
			window.scroll(0, 0);
		}
	}, [quienesSomosView]);
	useEffect(() => {
		if (formacionView) {
			setinicioView(false);
			setquienesSomosView(false);
			setServicioView(false);
			window.scroll(0, 0);
		}
	}, [formacionView]);

	function mainView() {
		return (
			<div>
				<h1>MAIN PAG</h1>
			</div>
		);
	}
	return (
		<div className='main_app'>
			<header className=''>
				<MENU
					setServicioView={setServicioView}
					setinicioView={setinicioView}
					setquienesSomosView={setquienesSomosView}
					setformacionView={setformacionView}
				/>
			</header>
			<main>
				{servicioView && <SERVICIO />}
				{formacionView && <FORMACIONES />}
				{quienesSomosView && <QUIENESSOMOS />}
				{inicioView && mainView()}
			</main>
			<footer>
				<div>
					<img src={slogan}></img>
				</div>

				<img src={logoTicktok} className='logoTicktok' alt='logoTicktok' />
				<img src={logoIG} className='logoIG' alt='logoIG' />
				<img src={logoMap} className='logoMap' alt='logoMap' />
				<img src={logoTelegram} className='logoTelegram' alt='logoTelegram' />
			</footer>
		</div>
	);
}

export default Main;
