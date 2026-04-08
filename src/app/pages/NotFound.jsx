import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router";
import { Home, Search, BookOpen } from "lucide-react";
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-180px)] flex items-center justify-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-9xl font-bold text-gray-200 mb-4", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Page Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8", children: "The page you're looking for doesn't exist or has been moved." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-8 mb-8", children: [
      /* @__PURE__ */ jsx(Search, { className: "w-16 h-16 text-orange-500 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Looking for something specific?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Here are some helpful links to get you back on track:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-green-50 hover:from-orange-100 hover:to-green-100 rounded-lg border border-orange-200 transition-all",
            children: [
              /* @__PURE__ */ jsx(Home, { className: "w-6 h-6 text-orange-600" }),
              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: "Home Page" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Start from the beginning" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/framework",
            className: "flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg border border-blue-200 transition-all",
            children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-blue-600" }),
              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: "Constitution Framework" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Learn the basics" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all",
        children: [
          /* @__PURE__ */ jsx(Home, { className: "w-5 h-5" }),
          "Return to Home"
        ]
      }
    )
  ] }) });
}
export {
  NotFound
};
