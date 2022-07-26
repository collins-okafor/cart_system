import "./ImageShow.css"

const ImageShow = ({header, Images}) => {
    return(
        <div>
            <div>
                <h3>{header}</h3>
            </div>
            <div className="image">
                {Images.map((item, key) => (
                    <div key={key}>
                    <img src={item} alt={""} width={"100"} height={"200"} />
                    </div>
                ))}
            </div>

        </div>
        
    );
}

export default ImageShow;