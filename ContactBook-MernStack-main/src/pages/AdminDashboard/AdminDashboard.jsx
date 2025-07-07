import { NavbarSimple } from "../../components/navbar/Navbar";
import FooterSection from "../../components/footerSection/footerSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();
  const LogoutHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/admin/logout",
        {},
        {
          withCredentials: true, //Required to send and receive cookies
        }
      );
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const recentUsers = users.filter((user) => {
    const created = new Date(user.createdAt);
    const now = new Date();
    const diffInDays = (now - created) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7; // users in last 7 days
  });

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/admin/all-users"
        ); // Adjust port if needed
        setUsers(res.data.data);
        // Or adjust if response structure differs
      } catch (err) {
        console.error("❌ Error fetching users:", err);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 h-screen w-64 bg-cordes-dark shadow-xl z-50">
        <div className="flex items-center justify-center h-16 bg-cordes-blue">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <i className="fas fa-cube text-cordes-blue text-lg" />
            </div>
            <span className="text-white text-xl font-bold">Cordes</span>
          </div>
        </div>
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-home mr-3 text-cordes-accent group-hover:text-white" />
              Dashboard
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-users mr-3 text-gray-700 group-hover:text-white" />
              Users
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-chart-bar mr-3 text-gray-400 group-hover:text-white" />
              Analytics
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-shopping-cart mr-3 text-gray-400 group-hover:text-white" />
              Orders
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-box mr-3 text-gray-400 group-hover:text-white" />
              Products
            </a> */}
            {/* <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-cog mr-3 text-gray-400 group-hover:text-white" />
              Settings
            </a> */}
            <a
              onClick={LogoutHandler}
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#8E24AA] hover:text-white rounded-lg transition-colors group"
            >
              <i className="fas fa-cog mr-3 text-gray-700 group-hover:text-white" />
              Logout
            </a>
          </div>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-[#8E24AA] rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white text-sm font-medium">Wasif Khan</p>
                <p className="text-gray-400 text-xs">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Contact Managment Admin
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  Welcome back, here's what's happening today
                </p>
              </div>
              {/* <div className="flex items-center space-x-4">
                {/* <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cordes-accent focus:border-transparent outline-none"
                  />
                </div> */}
              {/* <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <i className="fas fa-bell text-xl" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div> */}
              {/* </div> */}
            </div>
          </div>
        </header>
        {/* Main Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Revenue Card */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Revenue
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    $48,291
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <i className="fas fa-arrow-up mr-1" />
                      12%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-cordes-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-dollar-sign text-cordes-blue text-xl" />
                </div>
              </div>
            </div> */}
            {/* Users Card */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Users
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    15,847
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <i className="fas fa-arrow-up mr-1" />
                      8%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-users text-green-600 text-xl" />
                </div>
              </div>
            </div> */}
            {/* Orders Card */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Orders
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">2,847</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <i className="fas fa-arrow-up mr-1" />
                      15%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-shopping-cart text-orange-600 text-xl" />
                </div>
              </div>
            </div> */}
            {/* Products Card */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Products</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">1,247</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <i className="fas fa-arrow-up mr-1" />
                      5%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-box text-purple-600 text-xl" />
                </div>
              </div>
            </div> */}
          </div>
          {/* Charts Row */}
          {/* Revenue Chart */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Revenue Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Monthly revenue overview
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm bg-cordes-blue text-white rounded-md">
                  6M
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
                  1Y
                </button>
              </div>
            </div>

            {/* User List */}
          <div className="space-y-4 overflow-y-auto max-h-64">
            {users.length > 0 ? (
              users.map((user, index) => (
                <div
                  key={user._id || index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200"
                >
                  <div>
                    <p className="text-gray-900 font-medium">
                      {user.full_name}
                    </p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setSelectedUser(user);
                        setUpdatedName(user.full_name);
                        setUpdatedEmail(user.email);
                      }}
                      className="px-3 py-1 text-sm bg-[#8E24AA] text-white rounded-md hover:bg-[#d267f0]"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setUserToDelete(user);
                        setIsDeleteModalOpen(true);
                      }}
                      className="px-3 py-1 text-sm bg-[#8E24AA] text-white rounded-md hover:bg-[#d267f0]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No users found.</p>
            )}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Update User</h2>

                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />

                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />

                <div className="flex justify-end space-x-2">
                  <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={async () => {
                      try {
                        const res = await axios.put(
                          `http://localhost:8000/api/admin/update-user/${selectedUser._id}`,
                          {
                            full_name: updatedName,
                            email: updatedEmail,
                          },
                          {
                            withCredentials: true,
                          }
                        );
                        console.log("User updated:", res.data);

                        // Update local state
                        setUsers((prev) =>
                          prev.map((u) =>
                            u._id === selectedUser._id
                              ? {
                                  ...u,
                                  full_name: updatedName,
                                  email: updatedEmail,
                                }
                              : u
                          )
                        );

                        setIsModalOpen(false);
                      } catch (err) {
                        console.error("Update failed:", err);
                      }
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {isDeleteModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Confirm Delete
                </h2>
                <p className="text-gray-600">
                  Are you sure you want to delete user{" "}
                  <span className="font-bold text-red-600">
                    {userToDelete?.full_name}
                  </span>
                  ?
                </p>

                <div className="flex justify-end space-x-2">
                  <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                    onClick={() => {
                      setIsDeleteModalOpen(false);
                      setUserToDelete(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={async () => {
                      try {
                        await axios.delete(
                          `http://localhost:8000/api/admin/delete-user/${userToDelete._id}`,
                          {
                            withCredentials: true,
                          }
                        );

                        // Reload the page to fetch updated users from the DB
                        window.location.reload();
                      } catch (err) {
                        console.error("Delete failed:", err);
                      }
                    }}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* </div>  */}

          {/* Recent Orders Table */}
          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Orders
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Latest customer orders and transactions
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <i className="fas fa-download mr-2" />
                    Export
                  </button>
                  <button className="px-4 py-2 bg-cordes-blue text-white rounded-lg hover:bg-cordes-dark transition-colors">
                    <i className="fas fa-plus mr-2" />
                    Add Order
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        #15847
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src="https://www.investopedia.com/thmb/NSwuyMYGVWCHVIi1AEoaPkdmMD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Brand-loyalty_final-8ad57b86183e42348e18bc306c87778e.png"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            John Doe
                          </div>
                          <div className="text-sm text-gray-500">
                            john@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      iPhone 15 Pro
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $1,299.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      May 22, 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-cordes-blue hover:text-cordes-dark">
                          <i className="fas fa-eye" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        #15846
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src="https://www.investopedia.com/thmb/NSwuyMYGVWCHVIi1AEoaPkdmMD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Brand-loyalty_final-8ad57b86183e42348e18bc306c87778e.png"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Sarah Wilson
                          </div>
                          <div className="text-sm text-gray-500">
                            sarah@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      MacBook Pro
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $2,499.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      May 21, 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-cordes-blue hover:text-cordes-dark">
                          <i className="fas fa-eye" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        #15845
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src="https://www.investopedia.com/thmb/NSwuyMYGVWCHVIi1AEoaPkdmMD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Brand-loyalty_final-8ad57b86183e42348e18bc306c87778e.png"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Mike Johnson
                          </div>
                          <div className="text-sm text-gray-500">
                            mike@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      AirPods Pro
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      $249.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Cancelled
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      May 20, 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-cordes-blue hover:text-cordes-dark">
                          <i className="fas fa-eye" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Activity */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">New user registered</p>
                    <p className="text-xs text-gray-500">
                      sarah.johnson@email.com • 2 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Order completed</p>
                    <p className="text-xs text-gray-500">
                      Order #15847 - $299.99 • 5 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Product updated</p>
                    <p className="text-xs text-gray-500">
                      iPhone 15 Pro - Stock: 25 • 8 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Payment received</p>
                    <p className="text-xs text-gray-500">
                      $1,245.00 from client • 12 minutes ago
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* System Status */}
            {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-900">Server Status</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-900">Database</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="text-sm text-gray-900">API Status</span>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">
                    Warning
                  </span>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Server Load</span>
                    <span>68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-cordes-blue h-2 rounded-full"
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </main>
        {/* Dashboard Summary Cards */}
        <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Total Users */}
          <div className="bg-white shadow-lg border rounded-lg p-5 ">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <i className="fas fa-users text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Total Users
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {users.length}
                </p>
              </div>
            </div>
          </div>

          {/* New Users (Last 7 Days) */}
          <div className="bg-white shadow-lg border rounded-lg p-5">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-600 rounded-full p-3">
                <i className="fas fa-user-plus text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  New Users (7d)
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {recentUsers.length}
                </p>
              </div>
            </div>
          </div>

          {/* Admin Actions */}
          {/* <div className="bg-white shadow rounded-lg p-5">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 text-yellow-600 rounded-full p-3">
                <i className="fas fa-user-shield text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Admin Tools
                </h3>
                <button
                  onClick={LogoutHandler}
                  className="mt-1 text-sm text-red-600 hover:underline"
                >
                  Logout
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
