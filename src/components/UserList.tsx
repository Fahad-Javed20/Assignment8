import type { UserType } from "../types/UserType";

interface UserListProps {
  users: UserType[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 bg-black text-white rounded-lg w-1/3 mx-auto">Users List</h2>

      {users.map(user => (
        <div key={user.id}className="p-3 border-b last:border-none flex justify-between"
        >
          <div>
            <p className="font-semibold">{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <p className="text-sm">{user.mobileNo}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
