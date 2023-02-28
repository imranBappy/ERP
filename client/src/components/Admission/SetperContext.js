import { createContext, useContext, useState } from "react";
import axios from 'axios'

const StepperContext = createContext({
  handleChange: () => { }, handleSubmit: () => { }
});
export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  // console.log(userData);

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
