import { useState } from 'react';
import Aside from "./Components/Aside/Aside"


import Header from './Components/Header';
import Footer from './Components/Footer';
import Content_dashboard from './Components/Content/Content-Dashboard'
import Content_more from './Components/Content/Content-more'
import Content_sales from './Components/Content/Content-sales'
import Content_visitors from './Components/Content/Content-visitors'

import Products from './Components/Products';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Cart from './Components/Cart';
function App() {
  const carts = useSelector((state: RootState) => state.cart.value)
  const [showSidebar, setShowSidebar] = useState(false);
  const onBurgerClick = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar)
  }
  return (


    <main className="flex ">
      <aside className={`top-0 left-0 w-[15%] bg-blue-600 text-white fixed h-full ease-in-out duration-300 ${showSidebar ? "-translate-x-full": "translate-x-0 "
        }`}>
        <Aside />

      </aside>
      <section className={`flex flex-col ${showSidebar? "w-full":"w-[85%] ml-[15%]"}  bg-slate-100  h-screen overflow-y-auto ease-in-out duration-300`}>
        <Header onMenuClick={onBurgerClick} />

        {/* <Content_dashboard />
        <Content_more />
        <Content_sales />
        <Content_visitors /> */}
        <Products/>
        <Cart/>
       
        <Footer />
      </section>
    </main>
  )

}

export default App
