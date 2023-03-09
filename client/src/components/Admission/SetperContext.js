import { createContext, useContext, useState } from "react";

<<<<<<< HEAD
const StepperContext = createContext({ userData: "", setUserData: null });

=======
const StepperContext = createContext({
  handleChange: (e) => {
    console.log(e.target);
    console.log(e.target.files);

  }, handleSubmit: (e) => { }
});
>>>>>>> imran
export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}