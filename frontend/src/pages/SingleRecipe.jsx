import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(RecipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      chef: recipe.chef,
      desc: recipe.desc,
      imgr: recipe.ingr,
      inst: recipe.inst,
      category: recipe.category,
    },
  });

  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((r) => params.id == r.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    toast.success("Recipe updated!");
  };

  const deleteHandler = () => {
    const filerData = data.filter((r) => r.id != params.id);
    setData(filerData);
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");

    return () => {
      console.log("SingleRecipe.jsx Unmounted");
    };
  }, []);

  return recipe ? (
    <div className="flex w-full gap-4">
      <div className="left p-2 w-1/2">
        <h1 className="font-black text-5xl">{recipe.title}</h1>
        <img
          className="h-[35vh] rounded"
          src={recipe.image}
          alt="recipe-image"
        />
        <h2>{recipe.chef}</h2>
        <p>{recipe.desc}</p>
      </div>

      <form className="right p-2 w-1/2" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block p-2 border-b outline-0"
          {...register("image")}
          type="url"
          placeholder="Enter Image URL"
        />
        <small className="text-red-400">This is how an error is shown</small>

        <input
          className="block p-2 border-b outline-0"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="block p-2 border-b outline-0"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block p-2 border-b outline-0"
          {...register("desc")}
          type="text"
          placeholder="// start from here"
        ></textarea>

        <textarea
          className="block p-2 border-b outline-0"
          {...register("ingr")}
          type="text"
          placeholder="// write ingredients separated by comma"
        ></textarea>

        <textarea
          className="block p-2 border-b outline-0"
          {...register("inst")}
          type="text"
          placeholder="// write instructions separated by comma"
        ></textarea>

        <select
          className="block p-2 border-b outline-0"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="mt-5 block bg-blue-700 px-4 py-2 rounded-lg">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="mt-5 block bg-red-800 px-4 py-2 rounded-lg"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
