import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {

  const handleonSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home onSearchChange={handleonSearchChange}/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
