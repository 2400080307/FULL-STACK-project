import { jsx, jsxs } from "react/jsx-runtime";
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
  TrendingUp
} from "lucide-react";
import { Link } from "react-router";
import { colorMap, getStatusColor } from "@/app/lib/dashboard-utils";
function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const stats = [
    { label: "Total Users", value: "2,543", change: "+12%", icon: Users, color: "blue" },
    { label: "Educators", value: "127", change: "+8%", icon: Users, color: "green" },
    { label: "Content Items", value: "456", change: "+23%", icon: FileText, color: "purple" },
    { label: "Quiz Attempts", value: "8,234", change: "+34%", icon: BarChart3, color: "orange" }
  ];
  const [contentItems] = useState([
    {
      id: 1,
      title: "Understanding Fundamental Rights in Detail",
      type: "Article",
      author: "Dr. Sharma",
      status: "published",
      date: "2026-02-20"
    },
    {
      id: 2,
      title: "Interactive Quiz on Preamble",
      type: "Quiz",
      author: "Prof. Kumar",
      status: "pending",
      date: "2026-02-22"
    },
    {
      id: 3,
      title: "Video Lecture: Constitutional Framework",
      type: "Video",
      author: "Dr. Verma",
      status: "published",
      date: "2026-02-18"
    },
    {
      id: 4,
      title: "Case Study: Right to Education",
      type: "Article",
      author: "Prof. Gupta",
      status: "pending",
      date: "2026-02-24"
    }
  ]);
  const [users] = useState([
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      email: "rajesh.sharma@example.com",
      role: "educator",
      status: "active",
      joinDate: "2025-11-15"
    },
    {
      id: 2,
      name: "Prof. Meera Kumar",
      email: "meera.kumar@example.com",
      role: "educator",
      status: "active",
      joinDate: "2025-12-03"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@example.com",
      role: "user",
      status: "active",
      joinDate: "2026-01-10"
    },
    {
      id: 4,
      name: "Dr. Priya Verma",
      email: "priya.verma@example.com",
      role: "educator",
      status: "inactive",
      joinDate: "2025-10-22"
    }
  ]);
  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "content", label: "Content Management", icon: FileText },
    { id: "users", label: "User Management", icon: Users },
    { id: "analytics", label: "Analytics", icon: TrendingUp }
  ];
  return /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-10 h-10 text-blue-600" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Admin Dashboard" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Oversee platform content, manage users, and monitor platform performance" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-md mb-6 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex border-b border-gray-200 overflow-x-auto", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }),
            tab.label
          ]
        },
        tab.id
      );
    }) }) }),
    activeTab === "overview" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => {
        const colors = colorMap[stat.color] || colorMap.blue;
        const Icon = stat.icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-white rounded-xl shadow-md p-6 border-l-4 ${colors.border}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: `p-3 ${colors.bg} rounded-lg`, children: /* @__PURE__ */ jsx(Icon, { className: `w-6 h-6 ${colors.text}` }) }),
                /* @__PURE__ */ jsx("span", { className: "text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded", children: stat.change })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900 mb-1", children: stat.value }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label })
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Pending Approvals" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: contentItems.filter((item) => item.status === "pending").map((item) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm", children: item.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                    item.type,
                    " \u2022 ",
                    item.author
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("button", { className: "p-1.5 bg-green-600 text-white rounded hover:bg-green-700", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsx("button", { className: "p-1.5 bg-red-600 text-white rounded hover:bg-red-700", children: /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4" }) })
                ] })
              ]
            },
            item.id
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Quick Actions" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("button", { className: "w-full text-left p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg border border-blue-200 transition-all", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Settings, { className: "w-5 h-5 text-blue-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Platform Settings" })
            ] }) }),
            /* @__PURE__ */ jsx("button", { className: "w-full text-left p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg border border-green-200 transition-all", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5 text-green-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Add New Content" })
            ] }) }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/framework",
                className: "block w-full text-left p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg border border-purple-200 transition-all",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-purple-600" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "View Platform Content" })
                ] })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    activeTab === "content" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Content Items" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1 sm:flex-none", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Search content...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2 whitespace-nowrap", children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
            "Add New"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Title" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Type" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Author" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Date" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: contentItems.map((item) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100 hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: item.title }) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm", children: item.type }) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-gray-700", children: item.author }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: `px-2 py-1 rounded text-sm font-medium ${getStatusColor(
                item.status
              )}`,
              children: item.status
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-gray-700", children: item.date }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("button", { className: "p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors", children: /* @__PURE__ */ jsx(Edit, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsx("button", { className: "p-2 text-red-600 hover:bg-red-50 rounded transition-colors", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
          ] }) })
        ] }, item.id)) })
      ] }) })
    ] }) }),
    activeTab === "users" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Platform Users" }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-64", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search users...",
              className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Name" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Email" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Role" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Join Date" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-semibold text-gray-700", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: users.map((user) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100 hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: user.name }) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-gray-700", children: user.email }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: `px-2 py-1 rounded text-sm font-medium ${user.role === "educator" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`,
              children: user.role
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: `px-2 py-1 rounded text-sm font-medium ${getStatusColor(
                user.status
              )}`,
              children: user.status
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-gray-700", children: user.joinDate }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("button", { className: "p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors", children: /* @__PURE__ */ jsx(Edit, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsx("button", { className: "p-2 text-red-600 hover:bg-red-50 rounded transition-colors", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
          ] }) })
        ] }, user.id)) })
      ] }) })
    ] }) }),
    activeTab === "analytics" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Popular Content" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            { title: "Fundamental Rights Overview", views: 1243 },
            { title: "Constitution Framework", views: 987 },
            { title: "Fundamental Duties", views: 856 },
            { title: "Preamble Explained", views: 743 }
          ].map((item, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm", children: item.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                    item.views,
                    " views"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-green-600" })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Quiz Performance" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Average Score" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "72%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full",
                  style: { width: "72%" }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Completion Rate" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "86%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full",
                  style: { width: "86%" }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Retry Rate" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "34%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full",
                  style: { width: "34%" }
                }
              ) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Platform Growth" }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-4", children: "Your platform has grown by 45% in the last 30 days with increasing user engagement across all content categories." }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold mb-1", children: "+45%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-100", children: "New Users" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold mb-1", children: "+62%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-100", children: "Content Views" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold mb-1", children: "+38%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-100", children: "Quiz Attempts" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AdminDashboard
};
