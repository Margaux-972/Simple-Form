import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  setStep,
}) => {
  const [errPassword, setErrPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <main>
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== confirm) {
            alert("Vos deux mots de passe ne sont pas identiques");
            setErrPassword(true);
          } else if (!name || !email || !password) {
            alert("Ce champ est obligatoire");
          } else {
            setStep(2);
          }
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Jean Dupont"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="jeandupont@lereacteur.io"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <div>
          <input
            className={errPassword ? "error" : null}
            type={showPassword ? "text" : "password"}
            placeholder="lErEaCtEuR2020"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setErrPassword(false);
            }}
          />
          <FaEye
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        </div>
        <label htmlFor="confirm">Confirm your password</label>
        <div>
          <input
            className={errPassword ? "error" : null}
            type={showConfirm ? "text" : "password"}
            placeholder="lErEaCtEuR2020"
            id="confirm"
            value={confirm}
            onChange={(event) => {
              setConfirm(event.target.value);
              setErrPassword(false);
            }}
          />
          <FaEye
            className="eye"
            onClick={() => {
              setShowConfirm(!showConfirm);
            }}
          />
        </div>
        <button>Register</button>
      </form>
    </main>
  );
};

export default Form;
