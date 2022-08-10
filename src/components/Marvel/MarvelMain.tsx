import React, { useState } from "react";
import { Link } from "react-router-dom";

const VITE_MARVEL_PUB_KEY: string = import.meta.env.VITE_MARVEL_PUB_KEY;
const VITE_MARVEL_PRIVATE_KEY: string = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

interface IHero {
  comics: { available: number; collectionsURI: string };
  description: string;
  events: { available: number; collectionURI: string };
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: { available: number; collectionURI: string };
  stories: { available: number; collectionURI: string };
  thumbnail: { extension: string; path: string };
  urls: [{ type: string; url: string }];
}

interface IHeroes {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: {
      comics: { available: number; collectionsURI: string };
      description: string;
      events: { available: number; collectionURI: string };
      id: number;
      modified: string;
      name: string;
      resourceURI: string;
      series: { available: number; collectionURI: string };
      stories: { available: number; collectionURI: string };
      thumbnail: { extension: string; path: string };
      urls: [{ type: string; url: string }];
    }[];
  };
}
const initialState = {
  count: 0,
  limit: 0,
  offset: 0,
  results: [
    {
      comics: { available: 1, collectionsURI: "" },
      description: "",
      events: { available: 0, collectionURI: "" },
      id: 0,
      modified: "",
      name: "",
      resourceURI: "",
      series: { available: 0, collectionURI: "" },
      stories: { available: 0, collectionURI: "" },
      thumbnail: { extension: "", path: "" },
      urls: [{ type: "", url: "" }],
    },
  ],
};

export const MarvelMain = () => {
  const [heroes, setHeroes] = useState(initialState);
  const [limit, setLimit] = useState("20");
  async function getMarvel() {
    const url = `http://gateway.marvel.com/v1/public/characters?limit=${limit}&apikey=${VITE_MARVEL_PUB_KEY}&offset=0&hash=${VITE_MARVEL_PRIVATE_KEY}`;
    console.log(url);
    const response = await fetch(url);
    const data: IHeroes = await response.json();
    console.log(data);
    setHeroes(data.data);
  }
  function handleChange(e: string) {
    setLimit(e);
  }

  function handleHeroClick(id: number) {
    console.log(id);
  }

  return (
    <div>
      <div className="font-bold">Marvel Heroes</div>

      <form>
        <label>
          Number of Heroes to Fetch
          <input
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e.target.value);
            }}
            value={limit}
          />
        </label>
      </form>
      <button onClick={() => getMarvel()}>Display Heroes</button>
      <div>
        <ul className="grid md:grid-cols-4 gap-4 ">
          {heroes.results.map((hero) => {
            const partialImgSrc = hero.thumbnail.path;
            const imgType = hero.thumbnail.extension;
            const ImgSrc = `${partialImgSrc}.${imgType}`;
            return hero.id && hero.name ? (
              <li key={hero.id} className="p-5 text-4xl w-70 ">
                {hero.name}
                <Link to={`../marvel-hero/${hero.id}`}>
                  <img
                    alt={`image of ${hero.name}`}
                    className="w-40 h-40"
                    src={ImgSrc}
                    onClick={() => {
                      handleHeroClick(hero.id);
                    }}
                  />
                </Link>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};
