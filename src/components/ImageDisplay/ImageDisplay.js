import ImageShow from "../ImageShow/ImageShow";
import ImageOne from "../../Asset/Premium_Module_03.jpg";
import ImageTwo from "../../Asset/Premium_Module_01.jpg";
import ImageThree from "../../Asset/Premium_Module_01.jpg";
import ImageFour from "../../Asset/Premium_Module_02_Mobile.jpg"
import ImageFive from "../../Asset/Premium_Module_05.jpg"

const ImageDisplay = () => {
    const ImageDisplayArr = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive]
    return (
        <div>
            <ImageShow header="Children" Images={ImageDisplayArr} />
            
        </div>
    );
};

export default ImageDisplay;