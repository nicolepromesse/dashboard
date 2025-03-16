
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
   await signOut(auth);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
