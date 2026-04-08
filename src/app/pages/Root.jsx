import { jsx, jsxs } from "react/jsx-runtime";
import { Outlet, Link, useLocation } from "react-router";
import { BookOpen, Scale, Users, Home, GraduationCap, Shield, Menu, X } from "lucide-react";
import { useState } from "react";
function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Framework", href: "/framework", icon: BookOpen },
    { name: "Fundamental Rights", href: "/fundamental-rights", icon: Scale },
    { name: "Fundamental Duties", href: "/fundamental-duties", icon: Shield },
    { name: "Quiz", href: "/quiz", icon: GraduationCap }
  ];
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-orange-500", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Scale, { className: "w-7 h-7 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl text-gray-900", children: "Constitution of India" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Know Your Rights & Duties" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: navigation.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.href,
              className: `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive(item.href) ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-100"}`,
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.name })
              ]
            },
            item.name
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/educator",
              className: "px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 rounded-lg transition-all",
              children: "Educator"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/admin",
              className: "px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all",
              children: "Admin"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            className: "md:hidden p-2 rounded-lg hover:bg-gray-100",
            children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] }),
      mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden py-4 border-t", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-2", children: [
        navigation.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.href,
              onClick: () => setMobileMenuOpen(false),
              className: `flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${isActive(item.href) ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-100"}`,
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.name })
              ]
            },
            item.name
          );
        }),
        /* @__PURE__ */ jsxs("div", { className: "border-t mt-2 pt-2", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/educator",
              onClick: () => setMobileMenuOpen(false),
              className: "flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-green-100 rounded-lg",
              children: [
                /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Educator" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/admin",
              onClick: () => setMobileMenuOpen(false),
              className: "flex items-center gap-2 px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg mt-2",
              children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Admin" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "min-h-[calc(100vh-180px)]", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white mt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold mb-3", children: "About" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "An educational platform dedicated to spreading awareness about the Constitution of India, its principles, and the rights and duties of every citizen." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold mb-3", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/framework", className: "hover:text-white transition-colors", children: "Constitution Framework" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/fundamental-rights", className: "hover:text-white transition-colors", children: "Fundamental Rights" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/fundamental-duties", className: "hover:text-white transition-colors", children: "Fundamental Duties" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/quiz", className: "hover:text-white transition-colors", children: "Take a Quiz" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold mb-3", children: "For Educators" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-3", children: "Join our platform to create educational content and help spread constitutional awareness." }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/educator",
              className: "inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors",
              children: "Educator Portal"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400", children: /* @__PURE__ */ jsx("p", { children: "\xA9 2026 Constitution of India Education Platform. Built for awareness and education." }) })
    ] }) })
  ] });
}
export {
  Root
};
