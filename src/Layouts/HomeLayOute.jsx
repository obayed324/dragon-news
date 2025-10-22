import react from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import Loading from "../Pages/Loading/Loading";

const HomeLayout = () =>{
    const {state} = useNavigation();
    return(
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className="w-11/12 mx-auto my-3">
                    <LatestNews></LatestNews>
                </section>
                <nav  className="w-11/12 mx-auto my-3">
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className="w-11/12 mx-auto gap-5 grid grid-cols-12">
                
                <aside className="col-span-3 sticky top-0 h-fit">
                    <LeftAside></LeftAside>
                </aside>

                <section className="Main col-span-6">
                    {state == "loading" ? <Loading/> : <Outlet></Outlet>}
                </section>

                <aside className="col-span-3 sticky top-0 h-fit">
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};
export default HomeLayout