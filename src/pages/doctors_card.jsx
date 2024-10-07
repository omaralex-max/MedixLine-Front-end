import CardHolder from "../components/doctors-cards/card-holder";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Scrolling from "../components/scrolling-up/scrolling"

const DoctorsCard = () => {
  return (
    <>
      <Nav/>
      <CardHolder />
      <Footer/>
      <Scrolling />
    </>
  );
}

export default DoctorsCard;
