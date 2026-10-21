
function ProfileCard(props) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    backgroundColor: "white"
  };

  return (
    <div style={cardStyle}>
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />

      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
