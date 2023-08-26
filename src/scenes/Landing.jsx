import main from "../assets/images/main.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./loginAs/loginAs.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <StyledWrapper>
      <div className="home-container login" style={{ overflow: "hidden" }}>
        <div>
          <h1>Sakec Action Tracker</h1>
          <p>
            Introducing the SAKEC Student Event Tracker App your ultimate
            companion for staying updated on all the exciting happenings at our
            campus! With the SAKEC Event Tracker App, you'll never miss out on
            any event that piques your interest.
          </p>

          <div
            className="button-container"
            style={{
              marginLeft: "40px",
              display: "flex",
              justifyContent: "space-between",
              width: "30%",
            }}
          >
            <button onClick={() => handleButtonClick("/admin")}>
              Admin/Teacher
            </button>
            <button onClick={() => handleButtonClick("/mentor")}>Mentor</button>
            <button onClick={() => handleButtonClick("/student")}>
              Student
            </button>
          </div>
        </div>
        <img
          src={main}
          alt="job hunt"
          width="500px"
          height="500px"
          style={{ display: "inline", position: "absolute", right: "0" }}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  .content {
    display: absolute;
    margin-left: 200px;
    margin-top: 50px;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  // h1 {
  //   font-weight: 100;
  //   span {
  //     color: var(--primary-500);
  //   }
  //   margin-bottom: 1.5rem;
  // }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .login {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .name {
    flex-grow: 1;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .name img {
    max-width: 600px;
    height: auto;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .name {
      text-align: center;
    }
  }
`;

export default Landing;
