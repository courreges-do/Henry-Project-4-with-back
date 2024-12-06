"use client";
import { ChangeEvent, useState, FormEvent, useContext } from "react";
import { isValid } from "@/helpers/validations";
import { FormData, FormTouched } from "@/interfaces/forms";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/userServices";
import { UserContext } from "@/contexts/userContext";
import Link from "next/link";

const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const INITIAL_DATA: FormData = { email: "", password: "" };
  const INITIAL_TOUCHED: FormTouched = { email: false, password: false };
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
    const res = await userLogin(data);
    if (!res.message) {
      alert("Sign In Successful");
      setUser(res);
      router.push("/");
    } else {
      alert(res.message);
    }
  };

  const isTouched = (field: string) => {
    return touched[field];
  };

  return (
    <form
      className="w-full max-w-md mx-auto h-[320px] flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md mb-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      {Object.keys(data).map((input, i) => (
        <div key={i} className="flex flex-col gap-1">
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
        className="mt-1 bg-quaternary text-white py-2 rounded-lg hover:bg-tertiary transition-colors"
      >
        Login
      </button>
      <div className="text-center flex items-center justify-center gap-2">
        <p className="text-sm text-gray-600">Not registered yet?</p>
        <Link href="/register">
          <button className="bg-quaternary text-white py-2 px-4 rounded-lg hover:bg-tertiary transition-colors">
            Register
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginComponent;
