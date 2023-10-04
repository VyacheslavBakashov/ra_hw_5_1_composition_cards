import { Card } from './Card';
import image from '../img/image.png'

const cards = [
  {
    id: 1,
    title: 'Card title',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    src: image,
  },
  {
    id: 2,
    title: 'Special title treatment',
    text: 'With supporting text below as a naturel lead-in to additional content.',
  },
];

export const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <Card key={card.id} src={card.src}>
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        );
      })}
    </div>
  );
};
