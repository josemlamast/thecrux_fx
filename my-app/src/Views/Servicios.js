import "../CSS/Servicio.css";
import logoServicio from "../Imagenes/Icono3-04.png";
function Servicios(props) {
	return (
		<div className='mainServicio'>
			<section>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
				<div>
					<h2>Nuestro Servicios</h2>
					<p>
						<b>
							Asesoría y Recomendación sobre Prop Firm y Empresas de Fondeo.
						</b>
						<br></br>
						Te ofrecemos un acompañamiento en tu desempeño como trader,
						compartiendo estrategias, planificaciones y consejos que te ayudaran
						a mejorar día a día. Finalmente te ayudamos a conseguir tu propio
						capital de trabajo para gestionar y obtener beneficios sin arriesgar
						tu parimonio personal, por medio de las <b>
							Empresas De Fondeo
						</b>{" "}
						que buscan trades con talento, para que sean gestores de su capital.
						<br></br>
						<br></br>
						THECRUXFX ACADEMY cuenta con un equipo de Traders Fondeados y
						Profesionales en el área, que te ayudaran en todo el proceso de
						preparación, formación y desarrollo que requiere toda persona cuando
						se adentra en esta industria.
					</p>
				</div>
			</section>

			<section>
				<div>
					<h2>Beneficios</h2>
					<ul>
						<li>
							A través del trading podrás independizarte del sistema financiero
							y laboral establecido.
						</li>
						<li>
							Lograras generara tus propios ingresos, sin dependencia de
							terceros, sin control de tu tiempo y siendo tú quien decide como
							organizarlo.
						</li>
						<li>
							Con el uso correcto de esta herramienta para analizar y operar los
							mercados financieros, incrementaras tu capacidad de análisis a
							nivel económico y desarrollaras una visión a nivel global de lo
							que sucede en el mundo.
						</li>
						<li>
							Si lo aplicas conscientemente puedes aprovecharte de cualquier
							situación económica que se viva actualmente, ya se una etapa de
							AUGE o un momento de RECESION, siempre podrás obtener beneficios,
							aunque se esté viviendo una crisis mundial.
						</li>
						<li>
							Uno de los más importantes es el beneficio de tu tiempo, desde el
							momento que logres comprender, entender y aplicar los conceptos y
							herramientas impartidos en la formación, lograras disponer
							plenamente de tu tiempo, y así lo invertirás en ti y en tu
							familia.
						</li>
					</ul>
				</div>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
			</section>
		</div>
	);
}

export default Servicios;
