import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import RestaurantView from './views/RestaurantView';
import MenuView from './views/MenuView';
import Login from "./views/Login";


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RestaurantView />} />
        <Route path="login" element={<Login />} />
        <Route path="/menu/:restaurantId" element={<MenuView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;