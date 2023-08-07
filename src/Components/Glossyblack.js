import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const Glossyblack = () => {
  const [card, setCard] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    axios
      .get('https://api.connct.ai/v1/api/public-api/list-products/gloss-card')
      .then((response) => {
        const cardIdToDisplay = 6; // Change this value to display the desired glossy black card by ID
        const cardToDisplay = response.data.cards.find((card) => card.id === cardIdToDisplay);
        setCard(cardToDisplay);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setCard(null);
      });
  }, []);

  const handleCustomize = () => {
    // Implement customization logic here
  };

  const handleAddToCart = () => {
    // Implement add to cart logic here
  };

  return (
    <div className="mt-16">
      <div className="bg-gray-100">
        <Header />
      </div>
      <div className="container mx-auto mt-5">
        {card ? (
          <div className="flex flex-wrap items-center">
            <div className="border border-gray-300 p-4 rounded-lg w-full md:w-1/2">
              <img
                src={require("../assets/images/cart1.png")}
                alt="Logo"
                className="logo desktop-logo w-full mt-16"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="font-bold text-4xl mb-4">
                {card.name}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-extrabold">
                  ₹{card.price}
                </p>
                <span className="text-sm text-gray-600 whitespace-pre-wrap">
                  Shipping calculated at checkout.*
                </span>
              </div>
              <br />
              <br />
              <p className="font-medium text-xl text-gray-700 whitespace-pre-wrap">
                {card.description}
              </p>
              <br />
              <br />
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                    className="w-16 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="custom-dropdown"
                  >
                    <option value=""><img
                src={require("../assets/images/coloring.png")}
                alt="Logo"
                className="logo desktop-logo w-full mt-16"
              />All Colors</option>
                    {card.colors && card.colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                    <option value={card.name}>
                      {card.name}
                    </option>
                  </select>
                </div>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleCustomize}
                  >
                    Customize
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Glossyblack;