import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Eye, Share2, BookOpen } from "lucide-react";
function ArticleDetail() {
  const { id } = useParams();
  const article = {
    id,
    title: "Understanding Article 21: Right to Life and Personal Liberty",
    author: "Dr. Rajesh Sharma",
    date: "February 18, 2026",
    views: 456,
    category: "Fundamental Rights",
    content: [
      {
        type: "paragraph",
        text: "Article 21 of the Indian Constitution is one of the most fundamental rights guaranteed to citizens. It states: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.'"
      },
      {
        type: "heading",
        text: "Historical Context"
      },
      {
        type: "paragraph",
        text: "This article has been the cornerstone of various landmark judgments by the Supreme Court of India. Initially, it was interpreted narrowly, but through judicial interpretation, its scope has been significantly expanded over the years."
      },
      {
        type: "heading",
        text: "Key Interpretations"
      },
      {
        type: "paragraph",
        text: "The Supreme Court has expanded the meaning of 'life' under Article 21 to include the right to live with human dignity, right to livelihood, right to health, right to clean environment, right to education, and many more fundamental aspects that make life meaningful."
      },
      {
        type: "heading",
        text: "Landmark Cases"
      },
      {
        type: "list",
        items: [
          "Maneka Gandhi v. Union of India (1978) - Expanded the interpretation of 'personal liberty'",
          "Francis Coralie Mullin v. Administrator (1981) - Right to live with human dignity",
          "Olga Tellis v. Bombay Municipal Corporation (1985) - Right to livelihood",
          "M.C. Mehta v. Union of India - Right to clean environment"
        ]
      },
      {
        type: "heading",
        text: "Significance Today"
      },
      {
        type: "paragraph",
        text: "Article 21 continues to evolve through judicial interpretation and remains one of the most invoked articles in the Constitution. It serves as a powerful tool for protecting citizens' rights and ensuring their dignity in various aspects of life."
      }
    ]
  };
  return /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/fundamental-rights",
        className: "inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 font-medium",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5" }),
          "Back to Fundamental Rights"
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 md:p-12 text-white mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4", children: article.category }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-6", children: article.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-6 text-orange-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(User, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { children: article.author })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { children: article.date })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxs("span", { children: [
            article.views,
            " views"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-8 md:p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "prose prose-lg max-w-none", children: article.content.map((section, index) => {
        if (section.type === "paragraph") {
          return /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: section.text }, index);
        }
        if (section.type === "heading") {
          return /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mt-8 mb-4", children: section.text }, index);
        }
        if (section.type === "list" && section.items) {
          return /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-6 ml-6", children: section.items.map((item, itemIndex) => /* @__PURE__ */ jsxs("li", { className: "text-gray-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-600", children: "\u2022" }),
            " ",
            item
          ] }, itemIndex)) }, index);
        }
        return null;
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 pt-8 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Found this helpful?" })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ jsx(Share2, { className: "w-5 h-5" }),
          "Share Article"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Related Articles" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
        {
          title: "Right to Equality - Article 14",
          category: "Fundamental Rights",
          views: 328
        },
        {
          title: "Right to Freedom of Speech - Article 19",
          category: "Fundamental Rights",
          views: 412
        },
        {
          title: "Right to Constitutional Remedies",
          category: "Fundamental Rights",
          views: 267
        }
      ].map((related, index) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/article/${index + 2}`,
          className: "bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-orange-300",
          children: [
            /* @__PURE__ */ jsx("div", { className: "inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3", children: related.category }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-3", children: related.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxs("span", { children: [
                related.views,
                " views"
              ] })
            ] })
          ]
        },
        index
      )) })
    ] })
  ] }) });
}
export {
  ArticleDetail
};
