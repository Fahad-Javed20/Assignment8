import { useForm } from "react-hook-form";
import type { UserType } from "../types/UserType";

interface UserFormProps {
  onAddUser: (user: UserType) => void;
}

const UserForm = ({ onAddUser }: UserFormProps) => {
  const {register,handleSubmit,formState: { errors },reset} = useForm<UserType>();

  const onSubmit = (data: UserType) => {
    const newUser: UserType = {...data }

    onAddUser(newUser);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold bg-black text-white rounded-lg">Add User</h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Enter Your UserName"
        {...register("username", { required: "Name is required" })}/>

      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}

      <input
        className="w-full border p-2 rounded"
        placeholder="Enter your Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format"
          }
        })}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <input
        className="w-full border p-2 rounded"
        placeholder="Enter Your Mobile Number"
        {...register("mobileNo", {
          required: "Phone is required",
          minLength: { value: 10, message: "Phone too short" }
        })}
      />
      {errors.mobileNo && (
        <p className="text-red-500 text-sm">{errors.mobileNo.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
