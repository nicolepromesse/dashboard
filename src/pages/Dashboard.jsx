import { Search, Bell } from "lucide-react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { User,Home,BarChart,Cog, Users,Calendar, PieChart, CalendarDays  } from "lucide-react";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
   await signOut(auth);
    navigate("/login"); // Redirect to login after logout
  };

return(
<div className="bg-gray-50 min-h-screen">
  <div className="bg-white border border-gray-200 w-full h-10">
<h1 className="text-green-800 font-bold  mb-1 ml-4">dashboard</h1>
<div className="flex items-center  rounded-lg px-3 py-2 w-full max-w-md ml-25 -mt-8">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"       
          className="ml-2 w-full outline-none bg-transparent"
        />
      </div>
        <Bell className="w-5 h-5 ml-38 -mt-7" />     
  </div>
  <button 
        className="flex items-center gap-2 p-2  transition"
        onClick={() => setOpen(!open)}
      >
        <User className="w-6 h-6  ml-280 -mt-13" />
        <p className="-mt-14 text-xl font-bold text-gray-600">Christine</p>
      </button>

      <div className="bg-white border border-gray-100 w-50 h-190 -mt-4">
      <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <Home className="w-5 h-5 text-blue-950" />
            <span className="font-bold">Dashboard</span>
          </a>
        <div>
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <User className="w-5 h-5 text-blue-950" />
            <span className="font-bold">Customer</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
            <BarChart className="w-5 h-5 text-blue-950" />
            <span className="font-bold">Analytics</span>
          </a>
        </div>
        <hr className="border-t border-gray-300 my-3 mr-5" />
        <div>
        <h1 className="text-gray-500 font-bold ml-2">MANAGEMENT</h1>
         
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
          <Cog className="w-5 h-5 text-blue-950" />
          <span className="font-bold">Setting</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
          <Users className="w-5 h-5 text-blue-950" />
          <span className="font-bold">Analytics</span>
        </a>
        <hr className="border-t border-gray-300 my-3 mr-5" />
        </div>
        <div>
        <h1 className="text-gray-500 font-bold ml-2">REPORT</h1>
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
          <Calendar className="w-5 h-5 text-blue-950" />
          <span className="font-bold">Analytics</span>
        </a>

        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
          <PieChart className="w-5 h-5 text-blue-950" />
          <span className="font-bold">Analytics</span>
        </a>

        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition">
          < CalendarDays className="w-5 h-5 text-blue-950" />
          <span className="font-bold">Analytics</span>
        </a>
        </div>
      </div>
      
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-180 ml-60 w-220">
          {[
            { title: "Total Revenue", value: "$84,254", desc: "from last month" },
            { title: "Active Users", value: "2,420", desc: "from last week" },
            { title: "New Customers", value: "1,320", desc: "from last week" },
            { title: "Total Orders", value: "5,780", desc: "from last week" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border">
              <h1 className="text-gray-500 text-sm font-bold">{stat.title}</h1>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
<div className="ml-60 bg-white mt-8 w-217 h-50 border border-gray-200 rounded-lg">
  <h1 className="font-bold ml-5 mt-3">Recent Avtivities</h1>
  <hr className="border-t border-gray-300 my-3 w-216" />

  <User className="w-5 h-5 ml-5 text-blue-950" />
  <h1 className="font-bold ml-12 -mt-5">Mark Thomas made a purchase</h1>
  <hr className="border-t border-gray-300 my-3 w-216" />

  <User className="w-5 h-5 ml-5 text-blue-950" />
  <h1 className="font-bold ml-12 -mt-5">Sarah willson joined the team</h1>
  <hr className="border-t border-gray-300 my-3 w-216" />

<User className="w-5 h-5 ml-5 text-blue-950" />
  <h1 className="font-bold ml-12 -mt-5">David Brown update their profile</h1>
 
</div>

</div>
);
};

export default Dashboard;
