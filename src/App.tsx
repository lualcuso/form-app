import { useForm } from "react-hook-form";

import "./App.css";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  file: File;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className="flex flex-col text-left gap-2" onSubmit={onSubmit}>
      <label>First Name</label>
      <input
        {...register("firstName", { required: "This field is required" })}
      />
      {errors.firstName?.message && <p>{errors.lastName?.message}</p>}
      <label>Last Name</label>
      <input
        {...register("lastName", { required: "This field is required" })}
      />
      {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
      <label>Email</label>
      <input
        {...register("email", {
          required: "This field is required",
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
      />
      {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
      <label>Avatar</label>
      <input
        type="file"
        accept=""
        {...register("file", { required: "This field is required" })}
      />
      {errors.file?.message && <p>{errors.lastName?.message}</p>}

      <input className="mt-5 p-2 bg-white text-black" type="submit" />
    </form>
  );
}

export default App;
