const StepTwo = ({ name, email, password, setPage }) => {
  return (
    <>
      <h1>Results</h1>
      <div className="step2">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button
        onClick={() => {
          setPage(true);
        }}
      >
        Edit your information
      </button>
    </>
  );
};

export default StepTwo;
