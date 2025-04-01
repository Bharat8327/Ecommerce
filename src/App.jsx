import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import SingleProductDetails from './pages/singleProductDetails/SingleProductDetails';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Categories />} />
        <Route path="/product/:123" element={<SingleProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

/*
max-width-1200px
margin-0 auto;
padding:0 20px
overflow :hidden


*/
