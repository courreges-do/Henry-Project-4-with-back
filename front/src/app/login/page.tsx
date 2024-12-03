import LoginComponent from "@/components/LoginComponent/LoginComponent";

const LoginPage = () => {
  return (
    <div className="mb-8">
      <header className="h-16 bg-secondary m-4 rounded-lg flex justify-center items-center">
        <h1 className="text-gray-700 text-lg font-semibold">Login</h1>
      </header>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
