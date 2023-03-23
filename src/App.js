
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Ucitaj from './components/ucitaj';
import Racun from './components/racun';
import Prikaz from './components/adminprikaz';
import Brisanje from'./components/brisanjeA';
import Kategorije from './components/kategorije';
import Edit from "./components/artikl";
import Kosara from './components/kosara';
import Login from './components/login';
import Racuniadmin from './components/racuniadmin';
import Prijava from "./components/Prijava";
import Dodavanje2 from './components/dodavanjeA2';
import EditForm from './components/edit';
import DodavanjeA from './components/odabirFotografije';

var x = Math.floor(Math.random() * 999999);
var klik =0;
var postoji = false;
function App() {
 
  useEffect(() => {
    handlePrice();
  });
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map(item => {
      ans += item.broj * item.cijena
      console.log("broj je  --->" + item.broj)
    console.log("cijena je  --->" + item.cijena)
     });
    
    setPrice(ans);
  };
  const [cart, setCart] = useState([]);
  //console.log(Object.keys(JSON.parse(JSON.stringify(sessionStorage))));
  var kljucevi = Object.keys(JSON.parse(JSON.stringify(sessionStorage)));
  const handleClick = (item) => {
    var ind = cart.indexOf(item);
    var index =0;
    console.log(kljucevi)
    kljucevi.map(itemi =>
      { 
       
        if(itemi === item.Id )
        {
          console.log(itemi)
          console.log(item.Id)
            postoji = true;
           index= cart.findIndex(itemm => {
            return itemm.Id === item.Id;
         })
         ind = index;
        }
      })
    if (postoji)
    {
      console.log(cart)
      cart[ind].broj++;
      setCart([...cart]);
    //  localStorage.setItem(localStorage.length, JSON.stringify(cart));
      console.log(cart)
      handlePrice();
     postoji = false;
     klik++;
      return;
    }
    else
    {
    sessionStorage.setItem(item.Id, JSON.stringify(item));
    
      setCart([...cart, item]);
      //localStorage.setItem(localStorage.length, JSON.stringify(cart));
      console.log(cart)
      handlePrice();
      kljucevi = Object.keys(JSON.parse(JSON.stringify(sessionStorage)));
      postoji = false;
      klik++;
    }
  };

 
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    var broje = parseInt(arr[ind].broj);
     broje += d;
     arr[ind].broj= broje;
    setCart([...arr]);
    console.log(cart)
    handlePrice();
    klik+=d;
  };
  const nula = () =>
  {
    klik = 0;
  }

  return (
<>
<BrowserRouter>


     <Routes>
     <Route exact path='/' element={<Login />}/>
     <Route exact path='/kategorije' element={<Kategorije  ukupnoo ={klik} />}/>
       <Route path='/ucitaj' element={<Ucitaj />}/>
       <Route path='/prijava' element={<Prijava />}/>
       <Route path="/admin/edit/:EditId" element={<EditForm />} />
       <Route path='/admin/brisanje/:id' element={<Brisanje />}/>
       <Route path='/admin/brisanje' element={<Brisanje />}/>
       <Route path='/admin/:Id' element={<Prikaz />}/>
       <Route path='/admin' element={<Racuniadmin />}/>
       <Route path='/admin/dodavanje' element={<DodavanjeA />}/>
       <Route path='/racun' element={<Racun />}/>
       <Route path='/App/kosara' element={<Kosara ukupnoo={klik} nula={nula} cart={cart} x={x} handlePrice={handlePrice} handleChange={handleChange} cijena={price}/>}/>
    <Route path='/artikl/:ID'  element={<Edit  ukupnoo ={klik} cart={cart} handlePrice={handlePrice} setCart={setCart} handleClick={handleClick} />}/>
    </Routes>
    </BrowserRouter>

      </>
);
}

export default App;
