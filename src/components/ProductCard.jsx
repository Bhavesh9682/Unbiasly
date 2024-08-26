import React from 'react';
import "../styles/components/ProductCard.css"
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image10 from '../assets/images/image10.jpg';
import image9 from '../assets/images/image9.jpg';
import Navbar from './Navbar'
const ProductCard = (props) => {
  return (
    <div className="bg-white">
      
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {<div className="shop_title">{props.shop_title}</div>}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        
          {/* Static Product Card 1 */}
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                src={image1} // Use imported image
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
          </a>

          {/* Static Product Card 2 */}
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                src={image9}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                height={40}
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>

          {/* Static Product Card 3 */}
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt="Person using a pen to cross a task off a productivity paper card."
                src={image3}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>

          <a href="#" className="group">
            <div className="aspect-h-2 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt="Person using a pen to cross a task off a productivity paper card."
                src={image10}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
