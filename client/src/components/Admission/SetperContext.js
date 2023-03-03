import { createContext, useContext, useState } from "react";

const StepperContext = createContext({
  handleChange: () => { }, handleSubmit: () => { }
});
export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  // console.log(userData);

  return (
    <StepperContext.Provider value={[userData, setUserData]}>
      {children}
    </StepperContext.Provider>
  );
}


export function useStepperContext() {
  const [userData, setUserData] = useContext(StepperContext);

  return [userData, setUserData];
}
