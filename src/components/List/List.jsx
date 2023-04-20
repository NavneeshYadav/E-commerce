import React from "react";
import "./List.scss";
import Card from "../Card/Card";
const List = () => {
  const data = [
    {
      id: 1,
      title: "Long Sleeve Graphic T-shirt",
      oldPrice: 19,
      price: 12,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
      isNew: true,
    },
    {
      id: 2,
      title: "Coat",
      oldPrice: 19,
      price: 12,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
      isNew: true,
    },
    {
      id: 3,
      title: "Skirt",
      oldPrice: 19,
      price: 12,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
      isNew: true,
    },
    {
      id: 4,
      title: "Hat",
      oldPrice: 19,
      price: 12,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
      isNew: true,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
    </div>
  );
};

export default List;
