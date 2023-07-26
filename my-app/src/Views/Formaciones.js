import "../CSS/mainFormaciones.css";
import logoServicio from "../Imagenes/Icono3-04.png";

function Formaciones(props) {
	return (
		<div className='mainFormaciones'>
			<section>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
				<div>
					<h2>Formaciones</h2>
					<p>
						<h3>FORMACION GRUPAL PARA FUTUROS TRADERS.</h3>
						Consiste en una preparación continua por el lapso de tres meses, que
						incluyen 24 clases teórico-prácticas, donde aprenderás:
					</p>
					<ul>
						<li>
							Básicos de Trading, Principios de Economía, Uso de Aplicaciones.
						</li>
						<li>
							Análisis Técnico Básico, Lectura del Precio, Estructura Y
							Fractalidad.
						</li>
						<li>
							Uso del Tiempo &amp; Precio, Análisis Fundamental, Micro y Macro
							Estructura, Sesiones Operativas.
						</li>
						<li>
							Análisis Técnico Avanzado, Habilidades para Anticipar los grandes
							movimientos, Algoritmo Institucional.
						</li>
						<li>
							Ciclo Económico, Análisis MARCROINSTITUCIONAL, Objetivos y gestión
							de Cuentas Personales.
						</li>
					</ul>
				</div>
			</section>

			<section>
				<div>
					<p>
						<h3>FORMACION EXCLUSIVA.</h3>
						Consiste en una formación particular de máximo dos integrantes,
						donde se trabajará con un mentor en particular y será un contenido
						de manera intensiva y reforzada, sobre los Mercados Financieros,
						Trading, Economía Global, Análisis Técnico (tres niveles), Análisis
						Fundamental y Psicología del Trader, Gestión de Capital y Empresas
						de Fondeo. Este contenido será dictado en clases intensivas que sean
						acordadas con los alumnos participantes.
					</p>
				</div>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
			</section>
		</div>
	);
}

export default Formaciones;
