import react from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () =>{
    return(
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-3">
                    <LatestNews></LatestNews>
                </section>
                <nav  className="w-11/12 mx-auto my-3">
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className="w-11/12 mx-auto gap-3 grid grid-cols-12">
                
                <aside className="col-span-3">
                    <LeftAside></LeftAside>
                </aside>

                <section className="Main col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};
export default HomeLayout