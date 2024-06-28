import React from 'react';
import UserCard from './userCard';


export default function UserList() {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", avatar: "https://via.placeholder.com/140" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", avatar: "https://via.placeholder.com/140" },
    { id: 3, name: "Robert Brown", email: "robert.brown@example.com", avatar: "https://via.placeholder.com/140" },
  ];

  return (
    <div>
      {users.map((user) => (
        // <UserCard key={user.id} user={user} />
        <UserCard/>
      ))}
    </div>
  );
}
