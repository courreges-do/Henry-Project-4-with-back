import RegisterComponent from "@/components/RegisterComponent/RegisterComponent";

const page = () => {
  return (
    <div className="mb-8">
      <header className="h-16 bg-secondary m-4 rounded-lg flex justify-center items-center">
        Register
      </header>
      <RegisterComponent />
    </div>
  );
};

export default page;
