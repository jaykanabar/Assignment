import logo from './logo.svg';
import './App.css';
import { Hero } from './Components/Hero';
import { Aboutus } from './Components/Aboutus';
import { OurCourse } from './Components/OurCourse';
import { Admission } from './Components/Admission';
import { Testimonial } from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Aboutus/>
      <OurCourse/>
      <Admission/>
      <Testimonial />
    </div>
  );
}

export default App;
