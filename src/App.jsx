import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [page, setPage] = useState(true);

  return (
    <>
      <main>
        {page ? (
          <Form
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            confirm={confirm}
            setConfirm={setConfirm}
            setPage={setPage}
          />
        ) : (
          <StepTwo
            name={name}
            password={password}
            email={email}
            setPage={setPage}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
