import "./App.css";
import Productcard from "./component/product-card/Productcard";

function App() {
  const productOne = {
    productId: "1",
    productPic:
      "https://images.pexels.com/photos/4767907/pexels-photo-4767907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Adidas Men's Adivat M Running Shoes",
    Brand: "Addidas",
    productDescription:
      "Dual tone light weight mesh & synthetic with recycled fibers with unique performance properties",
    Price: "$40",
    Rating: 3,
  };
  const productTwo = {
    productId: "2",
    productPic:
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName: "Adidas Men's Adivat M Running Shoes",
    Brand: "Addidas",
    productDescription:
      "Dual tone light weight mesh & synthetic with recycled fibers with unique performance properties",
    Price: "$70",
    Rating: 5,
  };
  const productThree = {
    productId: "3",
    productPic:
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    productName: "Adidas Men's Adivat M Running Shoes",
    Brand: "Addidas",
    productDescription:
      "Dual tone light weight mesh & synthetic with recycled fibers with unique performance properties",
    Price: "$90",
    Rating: 5,
  };

  const productFour = {
    productId: "4",
    productPic:
      "https://images.pexels.com/photos/12010216/pexels-photo-12010216.jpeg?auto=compress&cs=tinysrgb&w=600",
    productName: "Adidas Men's Adivat M Running Shoes",
    Brand: "Addidas",
    productDescription:
      "Dual tone light weight mesh & synthetic with recycled fibers with unique performance properties",
    Price: "$150",
    Rating: 4,
  };
  const productFive = {
    productId: "5",
    productPic:
      "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Adidas Men's Adivat M Running Shoes",
    Brand: "Addidas",
    productDescription:
      "Dual tone light weight mesh & synthetic with recycled fibers with unique performance properties",
    Price: "$ 49",
    Rating: 3,
  };

  function AlertProductOne() {
    const { productId, productName, Brand, Price } = productOne;
    alert(
      `Product ${productId}, which is ${productName} of brand ${Brand} has price of ${Price} is added in the cart, please proceed to pay!`
    );
  }
  function AlertProductTwo() {
    const { productId, productName, Brand, Price } = productTwo;
    alert(
      `Product ${productId}, which is ${productName} of brand ${Brand} has price of ${Price} is added in the cart, please proceed to pay!`
    );
  }
  function AlertProductThree() {
    const { productId, productName, Brand, Price } = productThree;
    alert(
      `Product ${productId}, which is ${productName} of brand ${Brand} has price of ${Price} is added in the cart, please proceed to pay!`
    );
  }
  function AlertProductFour() {
    const { productId, productName, Brand, Price } = productFour;
    alert(
      `Product ${productId}, which is ${productName} of brand ${Brand} has price of ${Price} is added in the cart, please proceed to pay!`
    );
  }
  function AlertProductFive() {
    const { productId, productName, Brand, Price } = productFive;
    alert(
      `Product ${productId}, which is ${productName} of brand ${Brand} has price of ${Price} is added in the cart, please proceed to pay!`
    );
  }
  const dataList = [productOne, productTwo, productThree];

  return (
    <div className="App">
      <Productcard product={productOne} alertFunction={AlertProductOne} />
      <Productcard product={productTwo} alertFunction={AlertProductTwo} />
      <Productcard product={productThree} alertFunction={AlertProductThree} />
      <Productcard product={productFour} alertFunction={AlertProductFour} />
      <Productcard product={productFive} alertFunction={AlertProductFive} />
      {dataList.map((item, index) => (
        <Productcard
          product={item}
          alertFunction={item.AlertProductOne}
          key={index}
        />
      ))}
      ;
    </div>
  );
}

export default App;
