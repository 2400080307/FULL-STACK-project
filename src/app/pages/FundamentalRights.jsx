import { jsx, jsxs } from "react/jsx-runtime";
import { fundamentalRights } from "@/app/data/constitution-data";
import { Scale, Bird, ShieldBan, Church, BookOpen, Gavel } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/app/components/ui/accordion";
const iconMap = {
  scale: Scale,
  bird: Bird,
  "shield-ban": ShieldBan,
  church: Church,
  "book-open": BookOpen,
  gavel: Gavel
};
function FundamentalRights() {
  return /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx(Scale, { className: "w-16 h-16 text-orange-500 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Fundamental Rights" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "The Fundamental Rights are the basic human rights enshrined in the Constitution of India which are guaranteed to all citizens (Part III, Articles 12-35)" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-white mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Why are Fundamental Rights Important?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-orange-50 leading-relaxed", children: "Fundamental Rights protect the liberties and freedoms of the people against any invasion by the state. They are justiciable in nature, meaning they are enforceable by the courts. Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the 'Heart and Soul' of the Constitution as it empowers citizens to move the Supreme Court for enforcement of these rights." })
    ] }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-6", children: fundamentalRights.map((right, index) => {
      const Icon = iconMap[right.icon];
      return /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: right.id,
          className: "bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "p-6 hover:no-underline [&>svg]:size-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-2", children: right.articles }),
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: [
                  index + 1,
                  ". ",
                  right.title
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 font-normal", children: right.description })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "px-6 pb-6 border-t border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4", children: right.details.map((detail, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg p-5 border-l-4 border-orange-500",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded", children: detail.article }),
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900", children: detail.title })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: detail.content })
                ]
              },
              idx
            )) }) })
          ]
        },
        right.id
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-blue-900 mb-2", children: "Important Note" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: "While Fundamental Rights are guaranteed to all citizens, they are not absolute and are subject to reasonable restrictions. The State can impose restrictions in the interest of sovereignty, integrity, security of India, friendly relations with foreign states, public order, decency, morality, or in relation to contempt of court, defamation, or incitement to an offence." })
    ] })
  ] }) });
}
export {
  FundamentalRights
};
