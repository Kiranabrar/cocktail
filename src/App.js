import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';



function App() {

  return (

    <div className="App">
      <Provider store={store}>
      <BrowserRouter baseName="/cocktail">
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
