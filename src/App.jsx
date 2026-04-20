import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 ? (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirm={confirm}
          setConfirm={setConfirm}
          setStep={setStep}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setStep={setStep}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
