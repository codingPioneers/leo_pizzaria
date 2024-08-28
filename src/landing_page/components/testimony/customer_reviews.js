import React, { useState, useEffect } from 'react';
import './testimony.css'; // O arquivo CSS para estilizar o componente
import dishImage1 from '../../../assets/food1.jpg'; // Substitua pelo caminho correto para a imagem do prato
import dishImage2 from '../../../assets/food2.jpg'; // Substitua pelo caminho correto para a imagem do prato
import dishImage3 from '../../../assets/pao-alho.jpeg'; // Substitua pelo caminho correto para a imagem do prato

const commentsData = [
  {
    author: "Lina Gallardo",
    profession: "Customer",
    comment: "We stopped expressly to try the sardines and they did not disappoint us, it came with a garnish of roast potatoes and salad that they had the detail of presenting on another plate. Very nice staff. We will be back",
  },
  {
    author: "Canal Jota",
    profession: "Blogger",
    comment: "Well prepared food, fresh fish 👌 and generous portions 🤗 I recommend visiting …",
  },
  {
    author: "Erica Topova",
    profession: "Market Analist",
    comment: "The quality of the entrecote served at the restaurant is impeccable, without a doubt a dish worth trying. I am very satisfied with the experience, I will certainly return to this place.",
  }
];

const dishesData = [
  {
    name: "Pizza Carbonara",
    description: "Todas as nossas pizzas têm um sabor especial. Experimente a nossas pizza carbonara e sinta um pouco de Itália dentro de sí. Massa fina, mozzarela de buffala, cogumelos, bacon e natas formam uma das nossas obras de arte.",
    image: dishImage1,
    rating: 5
  },
  {
    name: "Pizza Bolonhesa",
    description: "Feita com a autentica bolonhesa italiana é um dos nossos pratos de assinatura. O equilibrio perfeito entre carne e queijo!",
    image: dishImage2,
    rating: 4
  },
  {
    name: "Pão de Alho",
    description: "Deixe-nos recebê-lo com o nosso Pão de Alho, prometemos que não se vai arrepender!",
    image: dishImage3,
    rating: 5
  }
];

const Testimonials = () => {
  const [currentComment, setCurrentComment] = useState(0);
  const [currentDish, setCurrentDish] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % commentsData.length);
      setCurrentDish((prev) => (prev + 1) % dishesData.length);
    }, 8000); // Mudar de comentário e prato a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonials-left">
        <h1 className='subtitle'>Não somos só nós a dizer</h1>
        <div className="quote-icon">“</div>
        <div className='review-comment'>
        <p>{commentsData[currentComment].comment}</p>

        </div>
        <div className="author-info">
          <div>
            <h3>{commentsData[currentComment].author}</h3>
            <p>{commentsData[currentComment].profession}</p>
          </div>
        </div>
        <div className="arrows">
          <span onClick={() => {
            setCurrentComment((currentComment - 1 + commentsData.length) % commentsData.length);
            setCurrentDish((currentDish - 1 + dishesData.length) % dishesData.length);
          }}>&larr;</span>
          <span onClick={() => {
            setCurrentComment((currentComment + 1) % commentsData.length);
            setCurrentDish((currentDish + 1) % dishesData.length);
          }}>&rarr;</span>
        </div>
      </div>
      <div className="testimonials-right">
        <img src={dishesData[currentDish].image} alt={dishesData[currentDish].name} />
        <div className="dish-card">
          <div className="dish-card-header">
            <h3>{dishesData[currentDish].name}</h3>
            <div className="rating">
              {[...Array(dishesData[currentDish].rating)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
          </div>
          <p>{dishesData[currentDish].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;