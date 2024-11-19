"use client";
import { ChangeEvent, useState, FormEvent } from "react";
import { isValid } from "@/helpers/validations";
import { FormData, FormTouched } from "@/interfaces/forms";
import { userRegister } from "@/services/userServices";
import { useRouter } from "next/navigation";

const RegisterComponent = () => {
  const INITIAL_DATA: FormData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };
  const INITIAL_TOUCHED: FormTouched = {
    email: false,
    password: false,
    name: false,
    address: false,
    phone: false,
  };
  const [data, setData] = useState(INITIAL_DATA);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const newValue = e.target.value;
    const newData: FormData = { ...data, [field]: newValue };
    setData(newData);
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await userRegister(data);
    if (!res.message) {
      alert("Sign Up Successful");
      router.push("/login");
    } else {
      alert(res.message);
    }
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

export default RegisterComponent;
