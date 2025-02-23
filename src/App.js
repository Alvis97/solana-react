import './styles/App.scss';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';


function App() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Do you also find this crypto stuff hard? 😵",
      content: "Well that makes two of us! ",
    },
    {
      title: "The resources out here are pretty heavy,",
      content: "So let me break it down for you in simple manners 💡",
    },
    {
      title: "I am still on my developer and crypto journey",
      content: "And will update this page as i learn. Because if i can do it, you can do it! 🔥 ",
    }
  ];

  // Effect for auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  // };

  // const handlePreviousSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide - 1) % slides.length);
  // }

  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <main>
      <div className="SlideContainer">
        <div className="slide">
          <h1>{slides[currentSlide].title}</h1>
          <h2>{slides[currentSlide].content}</h2>
        </div>
      </div>

      {/* <div className="buttons">
        <button onClick={handlePreviousSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div> */}

      <a>Let's start from the Beginning!</a>

      </main>
    </div>
  );
}

export default App;
