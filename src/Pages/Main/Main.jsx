import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;