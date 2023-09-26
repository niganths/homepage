import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
 // Import Font Awesome CSS if required
const Home = () => {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const trendingTopics = [
    {
      id: 1,
      image: '/t1.jpg', // Replace with the image source
     
    },
    {
      id: 2,
      image: '/t2.jpg', // Replace with the image source
      
    },
    {
      id: 3,
      image: '/t3.jpg', // Replace with the image source
      
    },
    {
      id: 4,
      image: '/t4.jpg', // Replace with the image source
      
    },
    {
      id: 5,
      image: '/t5.jpg', // Replace with the image source
      
    },
    {
      id: 6,
      image: '/t6.jpg', // Replace with the image source
      
    },
  ];
  
const articles = [
    {
      id: 1,
      image: '/r1.jpg', // Replace with the image source
      description: 'Witness the Grand Celebration of  Dusshera in Kullu',
    },
    {
      id: 2,
      image: '/r2.jpg', // Replace with the image source
      description: 'The Perfect Weather for Paragliding in Himachal has come! Book your tour NOW.',
    },
    {
      id: 3,
      image: '/r3.jpg', // Replace with the image source
      description: 'Planning a Travel in October? These Places in India are a Must Visit!',
    },
    {
      id: 4,
      image: '/r4.jpg', // Replace with the image source
      description: 'Here Are The Best Things To Could Do On Your Trip to Tamil Nadu!',
    },
    {
      id: 5,
      image: '/r5.jpg', // Replace with the image source
      description: 'Here is your Chance to View New Zealands Beauty in Full Bloom & Trek this Beautiful Land',
    },
  
  ];
  const horizontalImagesWithText = [
    {
      id: 1,
      image: '/h1.jpg', // Replace with the image source
      text: 'Have a story? Share it',
    },
  
  ];
  const horizontalImagesWithText1 = [
  
    {
      id: 1,
      image: '/h2.jpg', // Replace with the image source
      text: 'Free -Indian Cultural directory!',
    },
  ];
  

  return (
    <div className="bg-white min-h-screen">
     

      <div className="relative">
        <Slider {...sliderSettings} className=" w-full">
          <div>
            <img src={slide1} alt="Destination 1" className="w-full  h-180 object-cover" />
          </div>
          <div>
            <img src={slide2} alt="Destination 2" className="w-full  h-180 object-cover" />
          </div>
          <div>
            <img src={slide3} alt="Destination 3" className="w-full" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Heritage Site Name</h1>
          <p className="text-lg">Discover the rich heritage of Tamil Nadu</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
            Explore Now
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-4 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
          <input type="text" placeholder="Search for destinations" className="flex-grow py-2 px-4 outline-none" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ml-2">
            Search
          </button>
        </div>
      </div>
      <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-green-500 mb-6 underline text-center">Recent Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={`Article ${article.id}`} className="w-full h-40 object-cover" />
              <div className="p-4">
              
                <p className="text-gray-600">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
      {/* ... your existing code ... */}

      {/* Trending Topics Section */}
      <section className="bg-white py-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-green-500 mb-6 underline">Trending Topics</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-20">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 md:mb-0">
                <img src={topic.image} alt={`Trending Topic ${topic.id}`} className="w-full h-40 object-cover rounded-t-lg" />
              </div>
            ))}
          </div>
        </div>
        

      </section>
      <section className="bg-white py-10 text-center">
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-between">
      {horizontalImagesWithText.map((item) => (
        <div key={item.id} className="relative w-full sm:w-1/2 mb-4 sm:mb-0 ml-72">
          <div className="relative">
            <img src={item.image}  className="w-full h-40 object-cover rounded-t-lg  " />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-30  backdrop-filter hover:bg-opacity-30 ">
              <p className=" text-xl hover:-translate-y-2 transition-transform">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <section className="bg-white py-10 text-center">
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-between">
      {horizontalImagesWithText1.map((item) => (
        <div key={item.id} className="relative w-full sm:w-1/2 mb-4 sm:mb-0 ml-72">
          <div className="relative">
            <img src={item.image} alt={`Image ${item.id}`} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-30  backdrop-filter hover:bg-opacity-30 ">
              <p className="text-xl hover:-translate-y-2 transition-transform">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</section>


    </div>
    
  );
          
};


export default Home;
