import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainMasterpage = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainMasterpage;
