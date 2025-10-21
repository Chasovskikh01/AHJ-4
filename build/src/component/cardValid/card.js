import './card.css';
import CardFormWidget from './widgetCard';

const containerCard = document.querySelector('.container_Card');
const formCard = new CardFormWidget(containerCard);

formCard.bindToDOM();
