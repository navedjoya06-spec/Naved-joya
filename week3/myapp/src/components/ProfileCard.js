function ProfileCard({ name, role, image }) {
  return (
    <article className="profile-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}

export default ProfileCard;
