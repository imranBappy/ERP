import { createContext, useContext, useState } from "react";
import axios from 'axios'

const StepperContext = createContext({
  handleChange: () => { }, handleSubmit: () => { }
});
export function UseContextProvider({ children }) {
  const [std, setStd] = useState({
  })


  const handleChange = (e) => {
    if (e.target.name === 'url' || e.target.name === 'transcript') {
      setStd({ ...std, [e.target.name]: e.target.files[0] })
    } else {
      setStd({ ...std, [e.target.name]: e.target.value })
    }
  }
  const handleSubmit = (e) => {


    console.log(std);
    const formData = new FormData()
    Object.keys(std).forEach(key => {
      formData.append(key, std[key])
    });
    axios(
      {
        method: "post",
        url: "http://localhost:5000/admission",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }
    ).then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    e.preventDefault()
    console.log(std);
  }


  return (
    <StepperContext.Provider value={{ std, setStd, handleChange, handleSubmit }}>
      {children}
    </StepperContext.Provider>
  );
}


export function useStepperContext() {
  const {
    std, setStd, handleChange, handleSubmit
  } = useContext(StepperContext);

  return {
    std, setStd, handleChange, handleSubmit
  };
}
