
import './App.css';

import cappucinoImg from './assets/img/cappucino.png'
import bannerImg from './assets/img/banner.jpg'


function App() {
  return (
    <div className="App">
      <h1>Teste deploy</h1>

      <img src={cappucinoImg} alt="banner" />
      <img src={bannerImg} alt="" />
    </div>
  );
}

export default App;
