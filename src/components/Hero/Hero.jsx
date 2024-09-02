import React from "react";
import watch1 from "../../assets/watch/blue-watch.png";
import watch2 from "../../assets/watch/yellow-watch.png";
import watch3 from "../../assets/watch/orange-watch.png";

const title = "Initial Title";

const ImageList = [
  {
    id: 1,
    image: watch1,
    price: "1500000 S.P",
    tag: "new",
    title: "The Next Gen blue watch",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores animi, doloremque totam minima distinctio molestiae quos esse tenetur alias asperiores fugit error incidunt modi voluptate possimus temporibus numquam harum quia",
  },
  {
    id: 2,
    image: watch2,
    price: "2000000 S.P",
    tag: "new",
    title: "The Next Gen yellow watch",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores animi, doloremque totam minima distinctio molestiae quos esse tenetur alias asperiores fugit error incidunt modi voluptate possimus temporibus numquam harum quia",
  },
  {
    id: 3,
    image: watch3,
    price: "2500000 S.P",
    tag: "new",
    title: "The Next Gen orange watch",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores animi, doloremque totam minima distinctio molestiae quos esse tenetur alias asperiores fugit error incidunt modi voluptate possimus temporibus numquam harum quia",
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(watch1);
  const [title, setTitle] = React.useState("Best Watches");
  const [desc, setDesc] = React.useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, repellat"
  );

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-col s-2">
            {/* text content selection */}
            <div className="flex justify-center flex-col gap-6 pt-12 lg:pr-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="zoom-out"
                className="text-4xl sm:text-5xl font-bold pt-12  "
              >
                {title}
              </h1>
              <p data-aos="slide-up" data-aos-delay="200" className="text-sm">
                {desc}
              </p>
              <div data-aos="slide-up" data-aos-delay="200">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-2xl hover:scale-105 duration-200 ">
                  Order Now
                </button>
              </div>
              {/* watch controller */}
              <div className="flex justify-center overflow-hidden lg:justify-items-start gap-6 py-2 lg:gap-14 bg-white dark:bg-black rounded-3xl ">
                {ImageList.map((item) => (
                  <div
                    key={item.id}
                    data-aos="zoom-in"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? watch1 : item.id === 2 ? watch2 : watch3
                      );
                      setTitle(item.title);
                      setDesc(item.desc);
                    }}
                    className="flex flex-col lg:flex-row items-center gap-1 relative  "
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 cursor-pointer "
                    />
                    <div className="flex flex-col items-center gap-1 lg:flex-row ">
                      <p className="font-bold lg:text-lg ">{item.price}</p>
                      <p className="text-sm ">{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* image content selection  */}
              <div className="order-1 sm:order-2 min-h[450px] flex justify-center items-center relative ">
                <div className="h-[400px] overflow-hidden flex justify-center items-center ">
                  <img
                    src={imageId}
                    alt=""
                    data-aos="zoom-out"
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
