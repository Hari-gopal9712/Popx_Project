import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      
      <h1>
        Create your <br /> PopX account
      </h1>

      {/* Inputs */}
      <div className="input-group">
        <label>Full Name*</label>
        <input placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Phone number*</label>
        <input placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Email address*</label>
        <input placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Password*</label>
        <input type="password" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Company name</label>
        <input placeholder="Marry Doe" />
      </div>

      {/* Radio Section */}
      <div className="radio-group">
        <p>
          Are you an Agency?<span style={{ color: "red" }}>*</span>
        </p>

        <div className="radio-options">
          <label>
            <input type="radio" name="agency" defaultChecked />
            Yes
          </label>

          <label>
            <input type="radio" name="agency" />
            No
          </label>
        </div>
      </div>

      {/* Button */}
      <div className="bottom-btn">
        <button
          className="primary-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>

    </div>
  );
}

export default Register;