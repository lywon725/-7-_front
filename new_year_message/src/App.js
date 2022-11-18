import { Outlet, Routes, Route } from 'react-router-dom';


import Mainpage from './pages/Mainpage';
import Nickname from './pages/Nickname';
import Title from './pages/Title';
import Category from './pages/Category';
import Keyword from './pages/Keyword';
import Email from './pages/Email';
import Complete from './pages/Complete';
import MCheck from './pages/MCheck';
import MShow from './pages/MShow';
import Snow from './components/Snow/Snow';


const Layout = () =>{
  return (
    <>
      <Snow />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path='nickname' element={<Nickname />} />
        <Route path='title' element={<Title />} />
        <Route path='category' element={<Category/>}/>
        <Route path='keyword' element={<Keyword/>}/>
        <Route path='email' element={<Email/>}/>
        <Route path='complete' element={<Complete/>}/>
        <Route path='MCheck' element={<MCheck/>}/>
        <Route path='MShow' element={<MShow/>}/>
        <Route path='snow' element={<Snow/>}/>
      </Route>
    </Routes>    
    </>
  );
}

export default App;
