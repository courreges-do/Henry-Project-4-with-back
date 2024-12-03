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
      className="w-full max-w-md mx-auto flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      {Object.keys(data).map((input, i) => (
        <div key={i} className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 capitalize">
            {input}
          </label>
          <input
            type={input}
            key={i}
            value={data[input]}
            onChange={(e) => handleChange(e, input)}
            onBlur={() => handleBlur(input)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-quaternary"
          />
          {isTouched(input) && !isValid(input, data[input]) && (
            <p className="text-xs text-red-500 mt-1">
              Please enter a valid {input}.
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(data)
          .map((i) => isValid(i, data[i]))
          .includes(false)}
        className="mt-2 bg-quaternary text-white py-2 rounded-lg hover:bg-tertiary transition-colors"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterComponent;
