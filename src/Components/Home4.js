import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home4 = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://api.connct.ai/v1/api/public-api/list-products')
      .then((response) => {
        if (response.data && Array.isArray(response.data.cards)) {
          setCards(response.data.cards);
        } else {
          console.error('Invalid data format:', response.data);
          setCards([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setCards([]);
      });
  }, []);

  return (
    <div style={{marginLeft:'90px'}}>
    <div className="container mt-5">
      <div className="mt-130">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.length >= 1 && (
          <div style={{ minWidth: '280px',width:'70%' }}>
            <Link to="/minimalisticwhite" className="no-underline text-black">
              <div className="card h-440 relative bg-white">
                <div className="relative h-350 mt-10 text-center flex flex-col justify-center">
                <div className="absolute top-0 right-[17px] text-sm bg-yellow-300 text-black px-2 py-1 rounded-md" style={{ backgroundColor: '#F9D572',fontWeight:'bold',marginTop:'-10px' }}>
  New
</div>

                  <img
                    src={require("../assets/images/cart2.png")}
                    alt="Logo"
                    className="logo desktop-logo w-48 h-160 cursor-pointer mx-auto"
                  />
                </div>
                <div className="card-body whitespace-nowrap">
                  <h3 className="text-left" style={{fontWeight:'bold'}}>Minimalistic white</h3>
                  <p className="text-left"style={{color:'grey',fontWeight:'bold'}}>&#8377;{cards[0].price}</p><br/>
                  <button className="btn btn-custom inline-block bg-blue-500 text-white py-4 px-10 rounded-md text-base font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                    Try Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        )}
  
          {cards.length >= 2 && (
               <div style={{ minWidth: '280px',width:'70%' }}>
               <Link to="/glossyblack" className="no-underline text-black">
                 <div className="card h-440 relative bg-white">
                   <div className="relative h-350 mt-10 text-center flex flex-col justify-center">
                   <div className="absolute top-0 right-[17px] text-sm bg-yellow-300 text-black px-2 py-1 rounded-md" style={{ backgroundColor: '#F9D572',fontWeight:'bold',marginTop:'-10px' }}>
  New
</div>

                     <img
                       src={require("../assets/images/cart1.png")}
                       alt="Logo"
                       className="logo desktop-logo w-48 h-160 cursor-pointer mx-auto"
                     />
                   </div>
                   <div className="card-body whitespace-nowrap">
                     <h3 className="text-left" style={{fontWeight:'bold'}}>Glossy Black</h3>
                     <p className="text-left"style={{color:'grey',fontWeight:'bold'}}>&#8377;{cards[1].price}</p><br/>
                     <button className="btn btn-custom inline-block bg-blue-500 text-white py-4 px-10 rounded-md text-base font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                       Try Now
                     </button>
                   </div>
                 </div>
               </Link>
             </div>
          )}
  
          {cards.length >= 3 && (
               <div style={{ minWidth: '280px',width:'70%' }}>
               <Link to="/matteblack" className="no-underline text-black">
                 <div className="card h-440 relative bg-white">
                   <div className="relative h-350 mt-10 text-center flex flex-col justify-center">
                   <div className="absolute top-0 right-[10px] text-sm bg-yellow-300 text-black px-2 py-1 rounded-md" style={{ backgroundColor: '#F9D572',fontWeight:'bold',marginTop:'-10px' }}>
  New
</div>

                     <img
                       src={require("../assets/images/cart1.png")}
                       alt="Logo"
                       className="logo desktop-logo w-48 h-160 cursor-pointer mx-auto"
                     />
                   </div>
                   <div className="card-body whitespace-nowrap">
                     <h3 className="text-left" style={{fontWeight:'bold'}}>Classic Matte Black</h3>
                     <p className="text-left" style={{color:'grey',fontWeight:'bold'}}>&#8377;{cards[2].price}</p><br/>
                     <button className="btn btn-custom inline-block bg-blue-500 text-white py-4 px-10 rounded-md text-base font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                       Try Now
                     </button>
                   </div>
                 </div>
               </Link>
             </div>
          )}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home4