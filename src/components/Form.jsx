const Form = ({
  name,
  email,
  password,
  confirm,
  setConfirm,
  setEmail,
  setName,
  setPassword,
  setPage,
}) => {
  return (
    <>
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (confirm !== password) {
            alert("Vos deux mots de passe ne sont pas identiques");
          } else if (!name || !email || !password) {
            alert("Ce champs est obligatoire");
          } else setPage(false);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="jeandupont@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="lErEaCtEuR2020"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label htmlFor="confirm">Confirm your password</label>
        <input
          type="password"
          id="confirm"
          placeholder="lErEaCtEuR2020"
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
        />
        <button>Register</button>
      </form>
    </>
  );
};

export default Form;
