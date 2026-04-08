import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import {
  GraduationCap,
  Plus,
  FileText,
  Video,
  Calendar,
  Users,
  BookOpen,
  MessageSquare,
  Award,
  Clock,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { colorMap, getStatusColor } from "@/app/lib/dashboard-utils";
function EducatorDashboard() {
  const [activeTab, setActiveTab] = useState(
    "overview"
  );
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [contentType, setContentType] = useState(
    "article"
  );
  const stats = [
    { label: "Total Content", value: "24", icon: FileText, color: "blue" },
    { label: "Total Views", value: "3,456", icon: Eye, color: "green" },
    { label: "Sessions Conducted", value: "12", icon: Calendar, color: "purple" },
    { label: "Students Reached", value: "892", icon: Users, color: "orange" }
  ];
  const [contentItems] = useState([
    {
      id: 1,
      title: "Understanding Article 21: Right to Life",
      type: "article",
      status: "published",
      views: 456,
      date: "2026-02-18"
    },
    {
      id: 2,
      title: "Constitutional Amendments Quiz",
      type: "quiz",
      status: "published",
      views: 234,
      date: "2026-02-20"
    },
    {
      id: 3,
      title: "Deep Dive into Preamble",
      type: "video",
      status: "draft",
      views: 0,
      date: "2026-02-24"
    },
    {
      id: 4,
      title: "Fundamental Rights Workshop",
      type: "session",
      status: "scheduled",
      views: 156,
      date: "2026-02-28"
    }
  ]);
  const [sessions] = useState([
    {
      id: 1,
      title: "Interactive Session: Understanding the Preamble",
      date: "2026-02-28",
      time: "10:00 AM",
      attendees: 45,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Q&A: Fundamental Rights and Duties",
      date: "2026-03-05",
      time: "2:00 PM",
      attendees: 38,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Constitution Framework Workshop",
      date: "2026-02-15",
      time: "11:00 AM",
      attendees: 52,
      status: "completed"
    }
  ]);
  const tabs = [
    { id: "overview", label: "Overview", icon: GraduationCap },
    { id: "content", label: "My Content", icon: FileText },
    { id: "sessions", label: "Sessions", icon: Calendar },
    { id: "insights", label: "Insights", icon: Award }
  ];
  const getTypeIcon = (type) => {
    switch (type) {
      case "article":
        return FileText;
      case "video":
        return Video;
      case "quiz":
        return BookOpen;
      case "session":
        return Calendar;
      default:
        return FileText;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "w-10 h-10 text-green-600" }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Educator Dashboard" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Create educational content and conduct interactive sessions" })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setShowCreateModal(true),
          className: "px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" }),
            "Create New"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-md mb-6 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex border-b border-gray-200 overflow-x-auto", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? "text-green-600 border-b-2 border-green-600" : "text-gray-600 hover:text-gray-900"}`,
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
              /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-3", children: /* @__PURE__ */ jsx("div", { className: `p-3 ${colors.bg} rounded-lg`, children: /* @__PURE__ */ jsx(Icon, { className: `w-6 h-6 ${colors.text}` }) }) }),
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900 mb-1", children: stat.value }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label })
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setContentType("article");
              setShowCreateModal(true);
            },
            className: "p-6 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border border-blue-200 transition-all",
            children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-blue-600 mb-3" }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Write Article" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Create educational articles" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setContentType("quiz");
              setShowCreateModal(true);
            },
            className: "p-6 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl border border-purple-200 transition-all",
            children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-8 h-8 text-purple-600 mb-3" }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Create Quiz" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Build interactive quizzes" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setContentType("video");
              setShowCreateModal(true);
            },
            className: "p-6 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border border-green-200 transition-all",
            children: [
              /* @__PURE__ */ jsx(Video, { className: "w-8 h-8 text-green-600 mb-3" }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Upload Video" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Share video lectures" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setContentType("session");
              setShowCreateModal(true);
            },
            className: "p-6 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl border border-orange-200 transition-all",
            children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-8 h-8 text-orange-600 mb-3" }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Schedule Session" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Conduct live sessions" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Recent Content" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: contentItems.slice(0, 3).map((item) => {
            const Icon = getTypeIcon(item.type);
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-100 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-green-600" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm truncate", children: item.title }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-600", children: [
                      /* @__PURE__ */ jsxs("span", { children: [
                        item.views,
                        " views"
                      ] }),
                      /* @__PURE__ */ jsx("span", { children: "\u2022" }),
                      /* @__PURE__ */ jsx("span", { children: item.date })
                    ] })
                  ] })
                ]
              },
              item.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Upcoming Sessions" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: sessions.filter((s) => s.status === "upcoming").map((session) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200",
              children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm mb-2", children: session.title }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-600", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsx("span", { children: session.date })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsx("span", { children: session.time })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      session.attendees,
                      " registered"
                    ] })
                  ] })
                ] })
              ]
            },
            session.id
          )) })
        ] })
      ] })
    ] }),
    activeTab === "content" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "My Content" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("button", { className: "px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors", children: "All" }),
          /* @__PURE__ */ jsx("button", { className: "px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors", children: "Published" }),
          /* @__PURE__ */ jsx("button", { className: "px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors", children: "Draft" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: contentItems.map((item) => {
        const Icon = getTypeIcon(item.type);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-green-100 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-green-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-1", children: item.title }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                        item.status
                      )}`,
                      children: item.status
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600 mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    item.views,
                    " views"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: item.date })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxs("button", { className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(Edit, { className: "w-4 h-4" }),
                  "Edit"
                ] }),
                /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
              ] })
            ]
          },
          item.id
        );
      }) })
    ] }) }),
    activeTab === "sessions" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "My Sessions" }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setContentType("session");
              setShowCreateModal(true);
            },
            className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm",
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
              "Schedule New Session"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: sessions.map((session) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-lg mb-2", children: session.title }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                    session.status
                  )}`,
                  children: session.status
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Date" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: session.date })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Time" }),
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: session.time })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Attendees" }),
                  /* @__PURE__ */ jsxs("p", { className: "font-medium", children: [
                    session.attendees,
                    " registered"
                  ] })
                ] })
              ] })
            ] }),
            session.status === "upcoming" && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm", children: "View Details" }),
              /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm", children: "Edit" }),
              /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm", children: "Cancel" })
            ] }),
            session.status === "completed" && /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm", children: "View Feedback" })
          ]
        },
        session.id
      )) })
    ] }) }),
    activeTab === "insights" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Content Performance" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Average Views per Content" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "287" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full",
                  style: { width: "72%" }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Engagement Rate" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "68%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full",
                  style: { width: "68%" }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Student Satisfaction" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: "91%" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full",
                  style: { width: "91%" }
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Top Performing Content" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: contentItems.sort((a, b) => b.views - a.views).slice(0, 4).map((item, index) => {
            const Icon = getTypeIcon(item.type);
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm", children: index + 1 }),
                  /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-green-600" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm truncate", children: item.title }),
                    /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                      item.views,
                      " views"
                    ] })
                  ] })
                ]
              },
              item.id
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-8 h-8" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Your Impact" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-green-100 mb-4", children: "Your educational content has reached 892 students and received excellent feedback. Keep up the great work!" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold mb-1", children: "126" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-green-100", children: "Comments" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold mb-1", children: "892" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-green-100", children: "Students" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold mb-1", children: "4.8" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-green-100", children: "Avg Rating" })
          ] })
        ] })
      ] })
    ] }),
    showCreateModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-gray-900", children: [
          "Create New ",
          contentType.charAt(0).toUpperCase() + contentType.slice(1)
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowCreateModal(false),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ jsx("span", { className: "text-2xl text-gray-500", children: "\xD7" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: `Enter ${contentType} title...`,
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] }),
        contentType === "article" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Content" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 8,
              placeholder: "Write your article content...",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] }),
        contentType === "session" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Time" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "time",
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                rows: 4,
                placeholder: "Describe your session...",
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowCreateModal(false),
              className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all",
              children: "Create"
            }
          )
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  EducatorDashboard
};
