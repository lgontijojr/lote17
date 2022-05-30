import ArticleTextComponent from "../ArticleTextComponent/articleTextComponent";
import ArticleImageComponent from "../ArticleImageComponent/articleImageComponent";
import "./article.css";

function ArticleComponent({ imageProps, articlePros }) {
  return (
    <div className="article">
      <ArticleTextComponent articlePros={articlePros} />

      <ArticleImageComponent
        imageName={imageProps.imageName}
        imageAltText={imageProps.imageAltText}
      />
    </div>
  );
}

export default ArticleComponent;
