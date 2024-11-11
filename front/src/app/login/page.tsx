import LoginComponent from "@/components/LoginComponent/LoginComponent";

const page = () => {
  return (
    <div className="mb-8">
      <header className="h-16 bg-secondary m-4 rounded-lg flex justify-center items-center">
        Login
      </header>
      <LoginComponent />
    </div>
  );
};

export default page;
