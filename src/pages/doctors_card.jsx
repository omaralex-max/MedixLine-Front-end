import CardHolder from "../components/doctors-cards/card-holder";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Scrolling from "../components/scrolling-up/scrolling"
import Header from "../components/home_page/header/header";


const DoctorsCard = () => {
  return (
    <>
      <Header/>
      <CardHolder />
      <Footer/>
      <Scrolling />
    </>
  );
}

export default DoctorsCard;
