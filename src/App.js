import { collection, getDocs } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/details/Details';
import Home from './components/home/Home';
import SimpleCard from './components/Login/Login';
import { db } from './config';
export const UserContext = createContext()
function App() {
  const [posts,setPosts] = useState([])
  async function getProduct(){
    let query = await getDocs(collection(db,'product'))
    setPosts(query.docs.map(doc=>({id:doc.id,...doc.data()})))
    console.log(posts);
  }
    useEffect(()=>{
      getProduct()
    },[])
  return (
    <UserContext.Provider value={{posts}}>
    <div className="app">
      <Routes>
        {/* login */}

        <Route path='/' element={<SimpleCard />} />

        {/* Navbar */}
        <Route path='/home' element={<Home />} />

      {/* Details */}
      <Route path='/home/details/*' element={<Details />} />
      </Routes>

    </div>
    </UserContext.Provider>

  );
}

export default App;
