import logo from './logo.svg';
import './App.css';
import MiddleSection from './components/MiddleSection';
import Middle from './components/Middle';
import Footer from './components/Footer';
import TopSection from './components/TopSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
<TopSection/>
      <MiddleSection/>
      <Middle/>
      <Footer/>
    </div>
  );
}


export default App;
