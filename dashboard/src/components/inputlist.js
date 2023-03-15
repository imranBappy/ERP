import React, { useState } from "react";

const placeHolder = [
  { placeHold: "Search by ID..." },
  { placeHold: "Search by Name..." },
  { placeHold: "Search by Phone..." },
];

const InputForm = () => {
  const [input] = useState(placeHolder);

  return (
    <>

      <div className="light__component dark:dark__component p-5">
        <form className="flex lg:flex-nowrap flex-wrap">
          <div className="outside flex flex-wrap  w-full justify-between">
            {input.map((curr) => {
              return (
                <>
                  <div className="grow basis-full md:basis-1/3 ">

                    <div className="p-4">
                      <input
                        type="text"
                        id="first_name"
                        className="bg-white-800 border w-full border-black-text-sm rounded-md focus:ring-sky-600 focus:border-sky-600 block p-2.5 dark:bg-black-800 dark:border-black-600  dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600"
                        placeholder={curr.placeHold}
                        required
                      />
                    </div>


                  </div>
                </>
              )
            }
            )}

          </div>

          <div className="">
            <button type="submit" className="bg-sky-600 p-3 mt-3 text-white-900 rounded-md" >SEARCH</button>

          </div>
        </form>
      </div>

    </>
  );
};

export default InputForm;
