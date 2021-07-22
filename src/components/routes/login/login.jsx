import { useState } from "react";
import Button from "../../shared-components/button/button";
import { TextField } from "../../shared-components/input/textField";
import css from "./login.module.css";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    if (event.target.name === "password") {
      setUserPassword(value);
    } else {
      setUserEmail(value);
    }
  };

  const isButtonDisabled = () => !!!userEmail || !!!userPassword;

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1>SIGN IN</h1>
        <div className={css.inputsWrapper}>
          <TextField
            autoFocus
            label="Email"
            onChange={handleChange}
            name="password"
          />
          <br />
          <TextField
            label="Password"
            type="password"
            onChange={handleChange}
            name="email"
          />
        </div>
        <Button type="submit" size="height" disabled={isButtonDisabled()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
