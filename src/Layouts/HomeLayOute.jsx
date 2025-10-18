import react from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () =>{
    return(
        <div>
            <header></header>
            <main>
                <section className="left-nav"><Header></Header></section>
                <section className="Main">
                    <Outlet></Outlet>
                </section>
                <section className="Right-nav"></section>
            </main>
        </div>
    );
};
export default HomeLayout