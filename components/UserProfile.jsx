function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
