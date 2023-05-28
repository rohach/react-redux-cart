import React from "react";

const Home = () => {
  const addToCartHandler = () => {
    console.log("first");
  };
  const productList = [
    {
      name: "askdjfb",
      price: 21210,
      imgSrc: "logo.jpg",
      id: "3351s3df1s5df1sd65f1",
    },
    {
      name: "askdjfb",
      price: 21210,
      imgSrc: "logo.jpg",
      id: "3351s3df1s6df1sd65f1",
    },
  ];
  return (
    <div className="home">
      sad
      {productList.map((i) => {
        {
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />;
        }
      })}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>;
};

export default Home;
