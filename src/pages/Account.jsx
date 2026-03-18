function Account() {
  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>Account Settings</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />

        <div>
          <strong>Marry Doe</strong>
          <p style={{ margin: 0 }}>Marry@gmail.com</p>
        </div>
      </div>

      <p style={{ marginTop: "20px" }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr style={{ marginTop: "20px", borderStyle: "dashed" }} />
    </div>
  );
}

export default Account;