import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AOS from 'aos' ; 
import 'aos/dist/aos.css'
import Aos from 'aos';


const App = () => {
  
React.useEffect(() => {
  Aos.init({
    offset:100,
    duration: 600,
    easing:"ease-in-out",
    delay: 100 ,
  })
  AOS.refresh();
},[])
  return (
   
<div className="overflow-x-hidden bg-white dark:bg-black dark:text-white ">
<Navbar />
<Hero /> 
</div>

  );
}

export default App