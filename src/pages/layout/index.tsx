import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import NewsLetter from "./components/NewsLetter";

const MainLayout = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default memo(MainLayout);
