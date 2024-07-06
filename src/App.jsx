import React from 'react';
import { Container, Figure, Nav, Navbar } from "react-bootstrap"
import AllProduct from "../components/Homepage/AllProduct"
import Header from '../components/Homepage/Header';
import HeaderNavbar from '../components/Heropage/Nav';
import TopNav from '../components/Heropage/TopNav';
import TwoCardComponent from '../components/Homepage/TwoImg';
import ImageFooter from '../components/Homepage/footerImg';
import Footer from '../components/Homepage/Footer';
import HeroPage from '../components/Heropage/HeroPage';


function App () {
const styles = {
  main: {
backgroundColor: "#f4f8f1",
  },
 general: {
      fontSize: "15px",
      fontWeight: "400",
      color: "#f2faf2",
      backgroundColor: "#fff",
      padding: "10px",
  },
  button: {
      backgroundColor: "#f2faf2",
      color: "green",
      border: "2px solid rgb(78, 199, 78)",
      padding: "10px 30px",
      alignItems: "center",
      borderRadius: "30px",
      fontSize: "15px",
  },
  dropdown: {
      width: "200px",
      height: "300px",
      border: "none",
      fontSize: "12px",
      margin: "10px",
  },
  link: {
    color: "black",
    fontSize: "14px",
},
};

  return (
    <main style={styles.main}>
      <Header />
      <HeaderNavbar />
      <TopNav styles={styles} />
      <HeroPage />
     <TwoCardComponent />
     <Header />
    <AllProduct />
    <TwoCardComponent />
    <ImageFooter />
    <Footer />

    </main>
  )
  }
  
export default App
