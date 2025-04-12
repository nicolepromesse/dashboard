import { Search, Bell, User, Home, BarChart, Cog, Users, Calendar, PieChart, CalendarDays, Menu, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Close sidebar when screen size changes to mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    // Set initial state based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Redirect to login after logout
  };

  // Function to close sidebar when a menu item is clicked (mobile only)
  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between z-20 relative">
        <div className="flex items-center">
          <button 
            className="mr-2 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <h1 className="text-green-800 font-bold">dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full outline-none bg-transparent"
            />
          </div>
          
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            className="flex items-center gap-2 p-2"
            onClick={() => handleLogout()}
          >
            <User className="w-5 h-5 text-gray-600" />
            <span className="hidden md:block font-medium text-gray-600">Christine</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-opacity-50 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside 
          className={`
            bg-white border-r border-gray-200 w-64 flex-shrink-0 overflow-y-auto 
            transition-all duration-300 ease-in-out fixed md:relative h-full z-20
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <nav className="p-4 space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
              onClick={handleMenuClick}
            >
              <Home className="w-5 h-5 text-blue-950" />
              <span className="font-bold">Dashboard</span>
            </a>
            
            <div className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <User className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Customer</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <BarChart className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Analytics</span>
              </a>
            </div>
            
            <hr className="border-t border-gray-200" />
            
            <div className="space-y-1">
              <h2 className="text-xs text-gray-500 font-bold uppercase px-3 py-2">Management</h2>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <Cog className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Setting</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <Users className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Team</span>
              </a>
            </div>
            
            <hr className="border-t border-gray-200" />
            
            <div className="space-y-1">
              <h2 className="text-xs text-gray-500 font-bold uppercase px-3 py-2">Report</h2>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <Calendar className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Monthly</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <PieChart className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Statistics</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                onClick={handleMenuClick}
              >
                <CalendarDays className="w-5 h-5 text-blue-950" />
                <span className="font-bold">Quarterly</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Main content - adjust left margin/padding when sidebar is hidden */}
        <main className={`flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'md:ml-0' : 'md:ml-0'}`}>
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { title: "Total Revenue", value: "$84,254", desc: "from last month" },
              { title: "Active Users", value: "2,420", desc: "from last week" },
              { title: "New Customers", value: "1,320", desc: "from last week" },
              { title: "Total Orders", value: "5,780", desc: "from last week" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border">
                <h2 className="text-gray-500 text-sm font-bold">{stat.title}</h2>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-4 rounded-lg shadow border">
            <h2 className="font-bold text-lg mb-3">Recent Activities</h2>
            <hr className="border-t border-gray-200 mb-4" />
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <User className="w-5 h-5 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold">Mark Thomas made a purchase</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              
              <hr className="border-t border-gray-200" />
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <User className="w-5 h-5 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold">Sarah Wilson joined the team</h3>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
              </div>
              
              <hr className="border-t border-gray-200" />
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <User className="w-5 h-5 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold">David Brown updated their profile</h3>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;