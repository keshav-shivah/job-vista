import React, { ReactNode, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import ScrollToTop from "react-scroll-to-top";
import NetworkModal from "../NetworkModal";
import CountUp from "react-countup";
interface IProps {
  children: ReactNode;
}
const MainLayout = (props: IProps) => {
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return (
    <>
      {isOnline ? (
        <>
          <Header setModal={setModal} setRegister={setRegister} />

          {props.children}
          {modal && <LoginModal modal={modal} setModal={setModal} />}
          {register && (
            <RegisterModal register={register} setRegister={setRegister} />
          )}

          <ScrollToTop smooth>
            <i className="fa fa-angle-up"></i>
          </ScrollToTop>
          <Footer />
        </>
      ) : (
        <NetworkModal isOnline={isOnline} />
      )}
    </>
  );
};

export default MainLayout;
