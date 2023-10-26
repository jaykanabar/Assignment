import logo from './logo.svg';
import './App.css';
import { Hero } from './Components/Hero';
import { Aboutus } from './Components/Aboutus';
import { OurCourse } from './Components/OurCourse';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Aboutus/>
      <OurCourse/>
    </div>
  );
}

export default App;
