import "../CSS/QuienesSomos.css";
import logoServicio from "../Imagenes/Icono3-04.png";
function QuienesSomos(props) {
	return (
		<div className='mainQuienesSomos'>
			<section>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
				<div className='contenedorQuienesSomos_split'>
					<div>
						<h3>
							Observar, Comprender, Analizar, Ejecutar. Dentro de los Mercados
							Financieros y La Industria del Trading, La formación es tu mejor
							estrategia.
						</h3>
					</div>
					<div className='borderLeft'>
						Empresa formada por profesionales en la Industria del Trading, que
						abarcan un amplio contenido en la materia, dominando temas como:
						<br></br>
						Economía, Mercados Financieros, ámbito Jurídico Legal y Psicológico
						dentro de la industria, para garantizar un desarrollo progresivo y
						constante dentro de este mundo.
					</div>
				</div>
			</section>
			<section className='Proposito'>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
				<div>
					<h2>Propósito de la Compañía</h2>
					<p>
						The Crux Fx tiene como propósito principal, transmitir un
						conocimiento objetivo sobre la Industria del Trading y los Mercados
						Financieros. Por medio de nuestros profesionales especializados
						brindamos un acompañamiento a nuestros alumnos en el desarrollo de
						su carrera como Traders y analistas financieros. The Crux Fx Academy
						se especializa en: Globalización Internacional en materia de Micro y
						Macro Economía, Ciclo Económico y Tendencias MACRO del Mercado
						Forex.
					</p>
					<ul>
						<li>
							Trading Institucional, Análisis Tecnico Fundamental (correlación
							entre ambos).
						</li>
						<li>
							Smart Money Concept como método para analizar los Activos
							Financieros.
						</li>
						<li>Psicologia, Mindset y Estilo de Vida.</li>
					</ul>
				</div>
			</section>
			<section className='Vision'>
				<div>
					<h2>Visión</h2>
					<p>
						Proyectar a nuestros clientes a través de nuestras formaciones, con
						el objetivo de que puedan Comprender, Analizar y Obtener Beneficios
						de los Mercados Financieros. Fomentando un estilo de vida saludable,
						trabajando la Psicologia como parte del desarrollo personal,
						agregando actividades que inspiren y motiven a nuestra comunidad,
						para seguir el camino hacia la libertad con disciplina y compromiso.
					</p>
					<p>
						Observar, Comprender, Analizar, Ejecutar. Dentro de los Mercados
						Financieros y la Industria del Trading, la formación es tu mejor
						estrategia. Empresa formada por profesionales en la Industria del
						Traging, que abarcan un amplio contenido en la materia, dominando
						temas como: Economía, Mercados Financieros, Ámbito Jurídico-legal y
						Psicológico dentro de la Industria; para garantizar un desarrollo
						progresivo y constante, a través de un servicio profesional.
					</p>
				</div>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
			</section>
			<section className='Mision'>
				<img src={logoServicio} className='Servicio' alt='Servicio' />
				<div>
					<h2>Misión</h2>
					<p>
						The Crus Fx Academy analiza los posibles escenarios que se pueden
						presentar a nivel Macro Económico de acuerdo a todos los
						acontecimientos relevantes que ocurren a nivel mundial. Nuestra meta
						principal es transmitir el conocimiento correcto y el uso de una
						variedad de herramientas técnicas para comenzar tu camino dentro de
						los Mercados Financieros. Trabajando desde los básicos del trading,
						utilizando el método adecuado, con responsabilidad y compromiso por
						parte de nuestros clientes, las metas se lograrán con la paciencia
						de nuestro lado. Transparencia: total claridad ante nuestros
						clientes Honestidad: demostrado con hecho y resultados.
						Profesionalismo: personal formado y con experiencia en la industria.
					</p>
				</div>
			</section>

			<section></section>
		</div>
	);
}

export default QuienesSomos;
