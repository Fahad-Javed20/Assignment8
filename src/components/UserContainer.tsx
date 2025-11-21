import { useEffect, useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import type { UserType } from "../types/UserType";

const UserContainer = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      const convertedUsers: UserType[] = data.users.map((u:UserType) => ({
        id: u.id,
        name: ` ${u.name}`,
        email: u.email,
        phone: u.mobileNo,
      }));

      setUsers(convertedUsers.reverse()); // newest at top
    };

    loadUsers();
  }, []);

  const handleAddUser = (newUser: UserType) => {
    setUsers([newUser, ...users]); // add at top
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default UserContainer;
