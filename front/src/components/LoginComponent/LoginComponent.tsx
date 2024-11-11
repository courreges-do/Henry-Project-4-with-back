"use client";
import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import { isValid } from "@/helpers/validations";

const LoginComponent = () => {
  interface LoginData {
    [key: string]: string;
  }
  interface LoginTouched {
    [key: string]: boolean;
  }
  const INITIAL_DATA: LoginData = { mail: "", password: "" };
  const INITIAL_TOUCHED: LoginTouched = { mail: false, password: false };
  const [data, setData] = useState(INITIAL_DATA);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const newValue = e.target.value;
    const newData: LoginData = { ...data, [field]: newValue };
    setData(newData);
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  const isTouched = (field: string) => {
    return touched[field];
  };

  return (
    <form
      className="w-full max-w-md mx-auto flex flex-col gap-4 m-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      {Object.keys(data).map((input, i) => (
        <div key={i} className="flex items-center gap-x-4">
          <label className="w-1/3 text-right">{input}</label>
          <input
            type={input}
            key={i}
            value={data[input]}
            onChange={(e) => handleChange(e, input)}
            onBlur={() => handleBlur(input)}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
          {isTouched(input) && !isValid(input, data[input]) && (
            <p className="text-red-500">Error</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(data)
          .map((i) => isValid(i, data[i]))
          .includes(false)}
        className="mt-4 bg-quaternary text-white p-2 rounded hover:bg-tertiary w-1/2 self-center"
      >
        Login
      </button>
    </form>
  );
};

export default LoginComponent;
