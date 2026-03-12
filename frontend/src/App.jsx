import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="bg-gray-700 px-[10%] py-6 w-screen h-screen font-thin text-white">
      <Navbar/>
      <MainRoutes />
    </div>
  );
};

export default App;
