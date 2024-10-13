import React,{ useLayoutEffect }   from "react";
import Header from "../components/home_page/header/header";
import About from "../components/home_page/about/about";
import Categories from "../components/home_page/categories/categories";
import Footer from "../components/footer/footer"
import Scrolling from "../components/scrolling-up/scrolling"

function Home(){
    return(
        <>
         <Header/>
         <About/>
         <Categories/>
         <Footer/>
         <Scrolling />
        </>
    )
}
export default Home;