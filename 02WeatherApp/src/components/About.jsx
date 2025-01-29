import { FaSun, FaCloudSun, FaCloudRain, FaSnowflake } from 'react-icons/fa'; 
const About = () => {
  return (
    <div className="bg-blue-800 min-h-screen w-full">
      <h1 className="font-bold text-center text-4xl text-white p-10">About Us</h1> 
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        
        {/* Sunny Weather Card */}
        <div className="bg-white w-full sm:w-[300px] md:w-[300px] lg:w-[300px] h-[250px] p-6 border-2 border-amber-300 rounded-lg shadow-lg hover:scale-105 hover:transition-all duration-500 hover:bg-blue-400">
          <div className="flex justify-center items-center mb-4 text-yellow-500">
            <FaSun className="text-5xl" /> 
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Sunny Days</h2>
          <p className="text-base text-gray-600 text-center"> 
            Clear skies and plenty of sunshine. Perfect for outdoor activities!
          </p>
        </div>

        {/* Cloudy Weather Card */}
        <div className="bg-white w-full sm:w-[300px] md:w-[300px] lg:w-[300px] h-[250px] p-6 border-2 border-amber-300 rounded-lg shadow-lg hover:scale-105 hover:transition-all duration-500 hover:bg-blue-400">
          <div className="flex justify-center items-center mb-4 text-gray-500">
            <FaCloudSun className="text-5xl" /> 
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Partly Cloudy</h2> 
          <p className="text-base text-gray-600 text-center"> 
            Some clouds but still lots of sunshine. A mild and pleasant day ahead!
          </p>
        </div>

        {/* Rainy Weather Card */}
        <div className="bg-white w-full sm:w-[300px] md:w-[300px] lg:w-[300px] h-[250px] p-6 border-2 border-amber-300 rounded-lg shadow-lg hover:scale-105 hover:transition-all duration-500 hover:bg-blue-400">
          <div className="flex justify-center items-center mb-4 text-blue-500">
            <FaCloudRain className="text-5xl" /> 
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Rainy Days</h2>
          <p className="text-base text-gray-600 text-center"> 
            It’s going to rain! Don’t forget your umbrella. Perfect time for cozy indoor activities.
          </p>
        </div>

        {/* Snowy Weather Card */}
        <div className="bg-white w-full sm:w-[300px] md:w-[300px] lg:w-[300px] h-[250px] p-6 border-2 border-amber-300 rounded-lg shadow-lg hover:scale-105 hover:transition-all duration-500 hover:bg-blue-400">
          <div className="flex justify-center items-center mb-4 text-blue-200">
            <FaSnowflake className="text-5xl" /> 
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Snowy Weather</h2> 
          <p className="text-base text-gray-600 text-center"> 
            Snowfall is expected. A winter wonderland awaits. Time to enjoy some hot cocoa!
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
