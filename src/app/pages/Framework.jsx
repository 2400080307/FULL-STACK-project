import { jsx, jsxs } from "react/jsx-runtime";
import { constitutionFramework } from "../data/constitution-data";
import { BookOpen, FileText, Award } from "lucide-react";
function Framework() {
  return /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 text-orange-500 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Constitution Framework" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Understanding the structure and key features of the world's longest written constitution" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-orange-600" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "The Preamble" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 md:p-8 shadow-lg", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-gray-800 mb-6", children: constitutionFramework.preamble.text }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: constitutionFramework.preamble.keywords.map((keyword, index) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-full font-semibold text-sm",
            children: keyword
          },
          index
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6 text-center", children: "Constitutional Structure" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: constitutionFramework.structure.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-orange-500 mb-2", children: item.count }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: item.description })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-orange-600" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Key Features" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: constitutionFramework.keyFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: feature.description })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mt-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Did You Know?" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-blue-100", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-yellow-300 font-bold", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { children: "The Constitution took 2 years, 11 months, and 18 days to draft" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-yellow-300 font-bold", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { children: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-yellow-300 font-bold", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { children: "The original Constitution was handwritten and calligraphed in both Hindi and English" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-yellow-300 font-bold", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { children: "Each page was decorated by artists from Shantiniketan" })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Framework
};
