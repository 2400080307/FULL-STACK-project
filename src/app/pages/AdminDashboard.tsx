import { useState } from "react";
import {
  Shield,
  Users,
  FileText,
  BarChart3,
  Settings,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Plus,
  Search,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";
import { colorMap, getStatusColor } from "@/app/lib/dashboard-utils";

interface ContentItem {
  id: number;
  title: string;
  type: string;
  author: string;
  status: "published" | "pending" | "rejected";
  date: string;
}

interface UserItem {
  id: number;
  name: string;
  email: string;
  role: "educator" | "user";
  status: "active" | "inactive";
  joinDate: string;
}


export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "content" | "users" | "analytics">("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const stats = [
    { label: "Total Users", value: "2,543", change: "+12%", icon: Users, color: "blue" },
    { label: "Educators", value: "127", change: "+8%", icon: Users, color: "green" },
    { label: "Content Items", value: "456", change: "+23%", icon: FileText, color: "purple" },
    { label: "Quiz Attempts", value: "8,234", change: "+34%", icon: BarChart3, color: "orange" },
  ];

  const [contentItems] = useState<ContentItem[]>([
    {
      id: 1,
      title: "Understanding Fundamental Rights in Detail",
      type: "Article",
      author: "Dr. Sharma",
      status: "published",
      date: "2026-02-20",
    },
    {
      id: 2,
      title: "Interactive Quiz on Preamble",
      type: "Quiz",
      author: "Prof. Kumar",
      status: "pending",
      date: "2026-02-22",
    },
    {
      id: 3,
      title: "Video Lecture: Constitutional Framework",
      type: "Video",
      author: "Dr. Verma",
      status: "published",
      date: "2026-02-18",
    },
    {
      id: 4,
      title: "Case Study: Right to Education",
      type: "Article",
      author: "Prof. Gupta",
      status: "pending",
      date: "2026-02-24",
    },
  ]);

  const [users] = useState<UserItem[]>([
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      email: "rajesh.sharma@example.com",
      role: "educator",
      status: "active",
      joinDate: "2025-11-15",
    },
    {
      id: 2,
      name: "Prof. Meera Kumar",
      email: "meera.kumar@example.com",
      role: "educator",
      status: "active",
      joinDate: "2025-12-03",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@example.com",
      role: "user",
      status: "active",
      joinDate: "2026-01-10",
    },
    {
      id: 4,
      name: "Dr. Priya Verma",
      email: "priya.verma@example.com",
      role: "educator",
      status: "inactive",
      joinDate: "2025-10-22",
    },
  ]);

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: BarChart3 },
    { id: "content" as const, label: "Content Management", icon: FileText },
    { id: "users" as const, label: "User Management", icon: Users },
    { id: "analytics" as const, label: "Analytics", icon: TrendingUp },
  ];


  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600">
            Oversee platform content, manage users, and monitor platform performance
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const colors = colorMap[stat.color] || colorMap.blue;
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${colors.border}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 ${colors.bg} rounded-lg`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pending Approvals</h3>
                <div className="space-y-3">
                  {contentItems
                    .filter((item) => item.status === "pending")
                    .map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                      >
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                          <p className="text-xs text-gray-600">
                            {item.type} • {item.author}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1.5 bg-green-600 text-white rounded hover:bg-green-700">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 bg-red-600 text-white rounded hover:bg-red-700">
                            <XCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg border border-blue-200 transition-all">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Platform Settings</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg border border-green-200 transition-all">
                    <div className="flex items-center gap-3">
                      <Plus className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">Add New Content</span>
                    </div>
                  </button>
                  <Link
                    to="/framework"
                    className="block w-full text-left p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg border border-purple-200 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">View Platform Content</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Management Tab */}
        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Content Items</h2>
                <div className="flex gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2 whitespace-nowrap">
                    <Plus className="w-4 h-4" />
                    Add New
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Author</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <p className="font-medium text-gray-900">{item.title}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                            {item.type}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{item.author}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{item.date}</td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Platform Users</h2>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Join Date
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <p className="font-medium text-gray-900">{user.name}</p>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{user.email}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded text-sm font-medium ${user.role === "educator"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{user.joinDate}</td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Content</h3>
                <div className="space-y-3">
                  {[
                    { title: "Fundamental Rights Overview", views: 1243 },
                    { title: "Constitution Framework", views: 987 },
                    { title: "Fundamental Duties", views: 856 },
                    { title: "Preamble Explained", views: 743 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.views} views</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quiz Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Average Score</span>
                      <span className="font-semibold text-gray-900">72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-semibold text-gray-900">86%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                        style={{ width: "86%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Retry Rate</span>
                      <span className="font-semibold text-gray-900">34%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full"
                        style={{ width: "34%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Platform Growth</h3>
              <p className="text-blue-100 mb-4">
                Your platform has grown by 45% in the last 30 days with increasing user
                engagement across all content categories.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">+45%</div>
                  <div className="text-sm text-blue-100">New Users</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">+62%</div>
                  <div className="text-sm text-blue-100">Content Views</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">+38%</div>
                  <div className="text-sm text-blue-100">Quiz Attempts</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
