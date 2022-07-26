import Header from "./components/Header/header";
import ImageShow from "./components/ImageShow/ImageShow";
import "./components/Header/header.style.css";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import ImageOne from "./Asset/Premium_Module_03.jpg";
import ImageTwo from "./Asset/Premium_Module_04.jpg";
import ImageThree from "./Asset/Premium_Module_01.jpg";
import ImageFour from "./Asset/Premium_Module_02_Mobile.jpg"
import ImageFive from "./Asset/Premium_Module_05.jpg"

function App() {
  const ImageShowArr = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];
  const headerDetails = "Image Display"
  return (
    <div>
      <Header />
      <ImageShow header={headerDetails} Images={ImageShowArr}/>
      <ImageDisplay />
    </div>
  );
}

export default App;
