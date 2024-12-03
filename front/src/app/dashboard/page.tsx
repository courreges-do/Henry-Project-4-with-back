import OrdersComponent from "@/components/OrdersComponent/OrdersComponent";

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-4 mb-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <OrdersComponent />
    </div>
  );
};

export default DashboardPage;
