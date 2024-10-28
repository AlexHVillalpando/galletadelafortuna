import { useState } from 'react';
import { fondo1, fondo2, fondo3, fondo4 } from '../assets/images';
import phrases from './phrases.json';
import randomIndex from '../assets/helpers/randomIndex.js';

const images = [fondo1, fondo2, fondo3, fondo4];

function Fondos() {
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	return <div>Fondos</div>;
}

export default Fondos;
