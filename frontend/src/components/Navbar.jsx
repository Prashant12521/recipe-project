import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 mb-10 text-sm">
      <NavLink className={({isActive}) => isActive ? 'text-red-300':'text-gray-400'} to="/">
        Home
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-red-300':'text-gray-400'} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-red-300':'text-gray-400'} to="/about">
        About
      </NavLink>
      <NavLink className={({isActive}) => `p-2 bg-gray-800 rounded-lg ${isActive ? 'text-red-300':'text-gray-400'}`} to="/create-recipe">
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
