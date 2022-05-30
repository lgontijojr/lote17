import React from "react";
import ArticleComponent from "../Components/ArticleComponent/articleComponent";

function SobrePage() {
  const imageProps = {
    imageName: "localImage",
    imageAltText: "Lote 17",
  };

  const articlePros = {
    articleTitle: "Lote 17",
    articleParagraphs: [
      "Lote 17 é um restaurante secreto e intimista que contém uma mesa só, criado e comandado pelo Chef Lucas Santos. O chef abriu as portas de sua casa, e em noites previamente agendadas, recebe seus clientes de uma forma especial única, onde você tem a experiência de jantar com amigos ou em casal, e vê-lo preparar cada prato.",

      "Eu sempre acreditei que a comida une as pessoas e nos proporciona experiências magníficas, por isso criei o lote 17, para levar uma experiência diferente para as pessoas. Um restaurante onde as pessoas se sintam em casa, intimista, exclusivo e com uma cozinha aberta onde os clientes possam sentar no balcão para ver, aprender e trocar conhecimentos e muito mais",
    ],
  };

  console.log(articlePros);
  return <ArticleComponent articlePros={articlePros} imageProps={imageProps} />;
}

export default SobrePage;
