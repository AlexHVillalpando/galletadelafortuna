import { useState } from 'react';
import { fondo1, fondo2, fondo3, fondo4 } from '../assets/images';
import phrases from './phrases.json';
import randomIndex from '../assets/helpers/randomIndex.js';
import './Frases.css';

const images = [fondo1, fondo2, fondo3, fondo4];

function Frases() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				<h1 className="heading">
					¡Galletas de la <br />
					fortuna!
				</h1>

				<div className="card">
					<div className="card__body">
						<q className="phrase">{phrase.phrase}</q>
						<cite className="author">
							- <b>{phrase.author}</b>
						</cite>
					</div>
				</div>

				<button onClick={changePhrase} className="btn">
					Obtener nueva frase
				</button>
			</div>
		</div>
	);
}

export default Frases;
