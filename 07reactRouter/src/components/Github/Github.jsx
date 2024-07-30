import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //const [data, setData] = useState([]);

  const data = useLoaderData();
  /*  method1 to fetch data
  useEffect(() => {
    fetch("https://api.github.com/users/prajaktakambale")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []); */
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl">
      Github followers:{data.followers}
      <img src="{data.avatar_url" alt="Git Picture" width={300} />
    </div>
  );
}

//method ti fetch data
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/prajaktakambale");
  return response.json();
};
