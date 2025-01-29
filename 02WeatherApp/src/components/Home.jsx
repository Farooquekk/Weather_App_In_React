

const Home = () => {
  return (
    <div className="relative max-h-screen w-full">
      <img className="h-[500px] w-full object-cover"
        src="https://t4.ftcdn.net/jpg/09/62/46/33/360_F_962463375_ehQTVnMkG8BZ5IDZKDZ64RJIOCraJlEx.jpg" 
        alt="Image description" 
          />
          <div className="absolute flex items-center justify-center inset-0 text-white  ">
              <h1 className="text-center text-2xl md:text-4xl font-extrabold ">Check the current weather, forecast, and more with just a tap. Stay prepared for any condition, wherever you are.</h1>
          </div>
    </div>
    



  );
};

export default Home;
