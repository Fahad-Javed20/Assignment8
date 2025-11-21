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
      <h2 className="text-xl font-bold">Add User</h2>

      {/* Name */}
      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      {/* Email */}
      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
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

      {/* Mobile No */}
      <input
        className="w-full border p-2 rounded"
        placeholder="Phone"
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
