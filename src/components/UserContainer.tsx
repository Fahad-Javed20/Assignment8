import { useEffect, useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import type { UserType } from "../types/UserType";

const UserContainer = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users.reverse());
    };

    fetchUsers();
  }, []);

  const handleAddUser = (newUser: UserType) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default UserContainer;
