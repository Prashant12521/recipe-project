import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(RecipeContext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
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
        {...register("description")}
        type="text"
        placeholder="// start from here"
      ></textarea>

      <textarea
        className="block p-2 border-b outline-0"
        {...register("ingredients")}
        type="text"
        placeholder="// write ingredients separated by comma"
      ></textarea>

      <textarea
        className="block p-2 border-b outline-0"
        {...register("instructions")}
        type="text"
        placeholder="// write instructions separated by comma"
      ></textarea>

      <select
        className="block p-2 border-b outline-0"
        {...register("category")}
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className="mt-5 block bg-zinc-900 px-4 py-2 rounded-lg">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
