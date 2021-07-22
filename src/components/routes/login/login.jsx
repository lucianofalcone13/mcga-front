import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { mapError } from "../../../helpers/error-format";
import { isValidEmail } from "../../../helpers/validations";
import Button from "../../shared-components/button/button";
import { TextField } from "../../shared-components/input/textField";
import { ErrorLabel } from "../../shared-components/label/errorLabel";
import css from "./login.module.css";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/tasks");
  };

  useEffect(() => {
    if (wasInputFocused() && (!!!userEmail || !!!userPassword)) {
      setError("Incompleted");
    }
  }, [error, userEmail, userPassword, emailFocused, passwordFocused]);

  const isButtonDisabled = () => !!!userEmail || !!!userPassword || error;
  const wasInputFocused = () => emailFocused && passwordFocused;

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
          <ErrorLabel message={mapError[error]} />
        </div>
        <Button type="submit" size="height" disabled={isButtonDisabled()}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
