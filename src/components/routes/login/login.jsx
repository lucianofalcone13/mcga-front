import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { mapError } from "../../../helpers/error-format";
import { isValidEmail } from "../../../helpers/validations";
import { LOGIN_FULFILLED } from "../../../redux/auth/constants";
import Button from "../../shared-components/button/button";
import { TextField } from "../../shared-components/input/textField";
import { ErrorLabel } from "../../shared-components/label/errorLabel";
import css from "./login.module.css";

const Login = ({ login, isLoading, loginError }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();
  const handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    if (event.target.name === "password") {
      setUserPassword(value);
    } else {
      setUserEmail(value);
    }
  };

  useEffect(() => {
    if (userEmail && !isValidEmail(userEmail)) {
      setError("InvalidEmail");
    } else {
      setError("");
    }
    if (!error && userEmail && userPassword) {
      setError("");
    }
  }, [userEmail, userPassword, error]);

  const handleBlur = (event) => {
    event.persist();
    if (event.target.name === "password") {
      setPasswordFocused(true);
    } else {
      setEmailFocused(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ email: userEmail, password: userPassword });
    console.log(response);
    if (response.type === LOGIN_FULFILLED) {
      history.push("/tasks");
    }
  };

  useEffect(() => {
    if (wasInputFocused && (!!!userEmail || !!!userPassword)) {
      setError("Incompleted");
    }
  }, [error, userEmail, userPassword, emailFocused, passwordFocused]);

  const isButtonDisabled = !!!userEmail || !!!userPassword || error;
  const wasInputFocused = emailFocused && passwordFocused;

  return (
    <div className={css.container}>
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <h1>SIGN IN</h1>
        <div className={css.inputsWrapper}>
          <TextField
            label="Email"
            onChange={handleChange}
            name="email"
            onBlur={handleBlur}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            onChange={handleChange}
            name="password"
            onBlur={handleBlur}
          />
          <br />
          <ErrorLabel message={mapError[error] || loginError} />
          <br />
        </div>
        <Button
          type="submit"
          size="height"
          disabled={isButtonDisabled || isLoading}
        >
          {!isLoading ? "Login" : "Loading..."}
        </Button>
      </form>
    </div>
  );
};

export default Login;
