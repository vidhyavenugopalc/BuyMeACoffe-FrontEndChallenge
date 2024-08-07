import React from "react";
import "./ImageGenerator.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageGenerator = () => {
    const [imageUrl,setImageUrl]=React.useState(null)
    React.useEffect(() => {
        const loadImage = async () => {
            setImageUrl("https://xsgames.co/randomusers/avatar.php?g=male");
        };
    
        loadImage();
    }, []);

    const loadNewImage = () => {
        if(imageUrl==="https://xsgames.co/randomusers/avatar.php?g=male"){
            setImageUrl("https://xsgames.co/randomusers/avatar.php?g=female");
        }
        else{
            setImageUrl("https://xsgames.co/randomusers/avatar.php?g=male");
        }
    }

    return (
        <div className="carousel">
            <button className="arrow-button" onClick={() => loadNewImage() }><BsArrowLeftCircleFill className="arrow arrow-left"/></button>
            <img src={imageUrl} alt='image' className="slide"/>
            <button className="arrow-button"  onClick={() => loadNewImage() }><BsArrowRightCircleFill className="arrow arrow-right"/></button>
        </div>
    )
}

export default ImageGenerator