import React from "react";
import { getData } from "../utils";
import { useQuery } from 'react-query';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const urlImages = 'https://jsonplaceholder.typicode.com/albums/1/photos'
export const Images = () => {
  const { data,status, isLoading, isError } = useQuery(['img', urlImages], getData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching images</div>;
  }
  status=='success' && console.log(data);

  return (
    <div className="container-images">
      {status=='success' && data.map((obj) => (
        <div key={obj.id}>
          <h3>{obj.title.slice(1,10)}</h3>
          <LazyLoadImage
            className="lazy-img"
            src={obj.url}
            alt={obj.title}
            width={300}
            height={300}
            placeholderSrc="placeholder.webp"
            effect="blur"
          />
        </div>
      ))}
    </div>
  );
};
