import * as images from "../../img/index";
import "./articleImage.css";

function ArticleImageComponent({ imageAltText, imageName }) {
  return (
    <img className="article_image" src={images[imageName]} alt={imageAltText} />
  );
}

export default ArticleImageComponent;
