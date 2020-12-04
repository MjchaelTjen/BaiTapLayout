import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import Body from './Components/Content';
import Content from './Components/Content';



function App() {
  return (
    <div className="App">

      <Header></Header>
      {/* <Sidebar />
      <Carousel />
      <ProductList></ProductList> */}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
