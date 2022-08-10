import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IHero } from "./MarvelMain";

const VITE_MARVEL_PUB_KEY: string = import.meta.env.VITE_MARVEL_PUB_KEY;
const VITE_MARVEL_PRIVATE_KEY: string = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export const MarvelHero = () => {
  const { heroId } = useParams();
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    getHero();
  }, []);

  async function getHero() {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${heroId}?apikey=${VITE_MARVEL_PUB_KEY}&offset=0&hash=${VITE_MARVEL_PRIVATE_KEY}`;
    const response = await fetch(url);
    const data: any = await response.json();
    setHeroData(data.data.results);
    console.log(data.data.results);
  }

  return (
    <div>
      MarvelHero
      <h1>{heroId}</h1>
      {heroData.map((heroInfo: IHero) => {
        const partialImgSrc = heroInfo.thumbnail.path;
        const imgType = heroInfo.thumbnail.extension;
        const ImgSrc = `${partialImgSrc}.${imgType}`;
        return (
          <div key={heroInfo.id}>
            <h2>{heroInfo.name} </h2>
            <img src={ImgSrc} />
          </div>
        );
      })}
    </div>
  );
};
