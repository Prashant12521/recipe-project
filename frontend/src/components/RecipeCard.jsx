import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, desc, chef, inst, ingr } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block shadow rounded w-[20vw] overflow-hidden mr-3 mb-3 hover:scale-103 duration-200"
    >
      <img
        className="w-full h-[20vh] object-cover"
        src={image}
        alt="recipe-image"
      />
      <h1 className="mt-2 px-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-2">
        {desc.slice(0, 100)}... <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
