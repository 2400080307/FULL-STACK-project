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
  Trash2,
} from "lucide-react";
import { colorMap, getStatusColor } from "@/app/lib/dashboard-utils";

interface ContentItem {
  id: number;
  title: string;
  type: "article" | "video" | "quiz" | "session";
  status: "draft" | "published" | "scheduled";
  views: number;
  date: string;
}

interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: number;
  status: "upcoming" | "completed" | "cancelled";
}


export function EducatorDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "content" | "sessions" | "insights">(
    "overview"
  );
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [contentType, setContentType] = useState<"article" | "quiz" | "video" | "session">(
    "article"
  );

  // Mock data
  const stats = [
    { label: "Total Content", value: "24", icon: FileText, color: "blue" },
    { label: "Total Views", value: "3,456", icon: Eye, color: "green" },
    { label: "Sessions Conducted", value: "12", icon: Calendar, color: "purple" },
    { label: "Students Reached", value: "892", icon: Users, color: "orange" },
  ];

  const [contentItems] = useState<ContentItem[]>([
    {
      id: 1,
      title: "Understanding Article 21: Right to Life",
      type: "article",
      status: "published",
      views: 456,
      date: "2026-02-18",
    },
    {
      id: 2,
      title: "Constitutional Amendments Quiz",
      type: "quiz",
      status: "published",
      views: 234,
      date: "2026-02-20",
    },
    {
      id: 3,
      title: "Deep Dive into Preamble",
      type: "video",
      status: "draft",
      views: 0,
      date: "2026-02-24",
    },
    {
      id: 4,
      title: "Fundamental Rights Workshop",
      type: "session",
      status: "scheduled",
      views: 156,
      date: "2026-02-28",
    },
  ]);

  const [sessions] = useState<Session[]>([
    {
      id: 1,
      title: "Interactive Session: Understanding the Preamble",
      date: "2026-02-28",
      time: "10:00 AM",
      attendees: 45,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Q&A: Fundamental Rights and Duties",
      date: "2026-03-05",
      time: "2:00 PM",
      attendees: 38,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Constitution Framework Workshop",
      date: "2026-02-15",
      time: "11:00 AM",
      attendees: 52,
      status: "completed",
    },
  ]);

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: GraduationCap },
    { id: "content" as const, label: "My Content", icon: FileText },
    { id: "sessions" as const, label: "Sessions", icon: Calendar },
    { id: "insights" as const, label: "Insights", icon: Award },
  ];


  const getTypeIcon = (type: string) => {
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

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-10 h-10 text-green-600" />
                <h1 className="text-3xl font-bold text-gray-900">Educator Dashboard</h1>
              </div>
              <p className="text-gray-600">
                Create educational content and conduct interactive sessions
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create New
            </button>
          </div>
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
                    ? "text-green-600 border-b-2 border-green-600"
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
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => {
                  setContentType("article");
                  setShowCreateModal(true);
                }}
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border border-blue-200 transition-all"
              >
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Write Article</h3>
                <p className="text-sm text-gray-600">Create educational articles</p>
              </button>

              <button
                onClick={() => {
                  setContentType("quiz");
                  setShowCreateModal(true);
                }}
                className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl border border-purple-200 transition-all"
              >
                <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Create Quiz</h3>
                <p className="text-sm text-gray-600">Build interactive quizzes</p>
              </button>

              <button
                onClick={() => {
                  setContentType("video");
                  setShowCreateModal(true);
                }}
                className="p-6 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl border border-green-200 transition-all"
              >
                <Video className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Upload Video</h3>
                <p className="text-sm text-gray-600">Share video lectures</p>
              </button>

              <button
                onClick={() => {
                  setContentType("session");
                  setShowCreateModal(true);
                }}
                className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl border border-orange-200 transition-all"
              >
                <Calendar className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Schedule Session</h3>
                <p className="text-sm text-gray-600">Conduct live sessions</p>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Content</h3>
                <div className="space-y-3">
                  {contentItems.slice(0, 3).map((item) => {
                    const Icon = getTypeIcon(item.type);
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 text-sm truncate">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span>{item.views} views</span>
                            <span>•</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Sessions</h3>
                <div className="space-y-3">
                  {sessions
                    .filter((s) => s.status === "upcoming")
                    .map((session) => (
                      <div
                        key={session.id}
                        className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                      >
                        <p className="font-medium text-gray-900 text-sm mb-2">{session.title}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{session.attendees} registered</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Content</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    All
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Published
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Draft
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {contentItems.map((item) => {
                  const Icon = getTypeIcon(item.type);
                  return (
                    <div
                      key={item.id}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-green-100 rounded-lg">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === "sessions" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Sessions</h2>
                <button
                  onClick={() => {
                    setContentType("session");
                    setShowCreateModal(true);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Schedule New Session
                </button>
              </div>

              <div className="space-y-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{session.title}</h3>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                            session.status
                          )}`}
                        >
                          {session.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="font-medium">{session.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-xs text-gray-500">Time</p>
                          <p className="font-medium">{session.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-xs text-gray-500">Attendees</p>
                          <p className="font-medium">{session.attendees} registered</p>
                        </div>
                      </div>
                    </div>

                    {session.status === "upcoming" && (
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          View Details
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Edit
                        </button>
                        <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm">
                          Cancel
                        </button>
                      </div>
                    )}

                    {session.status === "completed" && (
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                        View Feedback
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === "insights" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Content Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Average Views per Content</span>
                      <span className="font-semibold text-gray-900">287</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Engagement Rate</span>
                      <span className="font-semibold text-gray-900">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Student Satisfaction</span>
                      <span className="font-semibold text-gray-900">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                        style={{ width: "91%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performing Content</h3>
                <div className="space-y-3">
                  {contentItems
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 4)
                    .map((item, index) => {
                      const Icon = getTypeIcon(item.type);
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <Icon className="w-5 h-5 text-green-600" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-sm truncate">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-600">{item.views} views</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <h3 className="text-xl font-bold">Your Impact</h3>
              </div>
              <p className="text-green-100 mb-4">
                Your educational content has reached 892 students and received excellent feedback.
                Keep up the great work!
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <MessageSquare className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold mb-1">126</div>
                  <div className="text-sm text-green-100">Comments</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <Users className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold mb-1">892</div>
                  <div className="text-sm text-green-100">Students</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <Award className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold mb-1">4.8</div>
                  <div className="text-sm text-green-100">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Content Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Create New {contentType.charAt(0).toUpperCase() + contentType.slice(1)}
                </h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="text-2xl text-gray-500">×</span>
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder={`Enter ${contentType} title...`}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {contentType === "article" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      rows={8}
                      placeholder="Write your article content..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                )}

                {contentType === "session" && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                        <input
                          type="time"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your session..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>
                  </>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
