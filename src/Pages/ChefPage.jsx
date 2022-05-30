import ArticleComponent from "../Components/ArticleComponent/articleComponent";

function ChefPage() {
  const imageProps = {
    imageName: "chefImage",
    imageAltText: "Chef Lucas Santos",
  };

  const articlePros = {
    articleTitle: "Chef Lucas Santos",
    articleParagraphs: [
      "Nascido em 1993, Chef Lucas sempre foi apaixonado pela comida. Desde criança sempre se arriscou na cozinha, e amava ver seus tios cozinhando, cresceu vendo a figura masculina sempre nas cozinhas e achava incrível e lindo ver o amor e os sentimentos sendo transformados em refeição. Desde então sempre se manteve cozinhando para amigos e familiares, porém nunca imaginou viver isso como profissão.",

      "Aos 21 anos resolveu fazer gastronomia, e desse mundo nunca mais saiu, trabalhou desde o primeiro período da faculdade como estagiário em restaurantes e buffets. Teve a honra de trabalhar nos melhores restaurantes de sua atual cidade Goiânia, tais como Iz restaurante, Viela gastronômica, Winika, Magna restaurante e também na Europa como Sub Chef do restaurante Lisboa é Linda em Portugal. E foi em Lisboa onde teve suas primeiras ideias do Lote 17, que foi inspirado nos famosos supper clubs. O Chef tem como especialidade uma culinária internacional, onde está sempre mesclando novos sabores, e sempre buscando valorizar ingredientes brasileiros.",
    ],
  };

  return <ArticleComponent articlePros={articlePros} imageProps={imageProps} />;
}

export default ChefPage;
