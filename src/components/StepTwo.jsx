const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <main>
      <h1>Results</h1>
      <div className="step2">
        <p>Name: {name}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
      </div>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Edit your information
      </button>
    </main>
  );
};

export default StepTwo;
