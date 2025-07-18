import { useState } from 'react'
import "../styles/App.css";

import Nav from "./Nav";
import Input from "./Input";
import Footer from "./Footer";
import Cv from "./Cv";

function App() {
  const [formData, setFormData] = useState(
    {
      name: "...",
      profession: "",
      email: "",
      phone: "",
      address: "",
      about: ""
    }
  )

  return (
    <>
      <Nav></Nav>

      <div className="main">
        <div className="left">
          <Input inputData={formData} setInputData={setFormData}></Input>
        </div>

        <div className="right">
          <Cv formData={formData}></Cv>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
