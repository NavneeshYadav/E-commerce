import React, { useEffect, useState } from "react";

import "./FeaturedProducts.scss";

import Card from "../Card/Card";
import axios from "axios";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );
  // const data = [
  //   {
  //     id: 1,
  //     title: "Long Sleeve Graphic T-shirt",
  //     oldPrice: 19,
  //     price: 12,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
  //     isNew: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Coat",
  //     oldPrice: 19,
  //     price: 12,
  //     img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
  //     isNew: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Skirt",
  //     oldPrice: 19,
  //     price: 12,
  //     img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
  //     isNew: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Hat",
  //     oldPrice: 19,
  //     price: 12,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
  //     isNew: false,
  //   },
  // ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
      setData(res.data.data)
      } catch (err) {
        console.log(err);
      }      
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
