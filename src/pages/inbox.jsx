import Chat from "../components/doctor-profile/chatDoctor"
import Navbar from "../components/Navbar/Navbar"


const Inbox = () => {
    return (
        <>
            <Navbar />
            <div className="mt-5 pt-5">
            <Chat doctorId="1"/> 
            </div>       
        </>

    )
}

export default Inbox