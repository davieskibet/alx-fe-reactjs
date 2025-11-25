// src/components/UserCard.jsx
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h3>{user.name || user.login}</h3>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
