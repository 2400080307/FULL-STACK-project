import { jsx, jsxs } from "react/jsx-runtime";
import { fundamentalDuties } from "../data/constitution-data";
import { Shield, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/app/components/ui/accordion";
function FundamentalDuties() {
  return /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx(Shield, { className: "w-16 h-16 text-green-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Fundamental Duties" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "The Fundamental Duties are the moral obligations of all citizens to help promote a spirit of patriotism and uphold the unity of India (Article 51A)" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "About Fundamental Duties" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-green-50", children: [
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Fundamental Duties were added to the Constitution by the 42nd Amendment Act, 1976, on the recommendations of the Swaran Singh Committee. These duties serve as a constant reminder to every citizen to perform their duties towards the nation." }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Originally, there were 10 Fundamental Duties. The 11th duty was added by the 86th Constitutional Amendment Act, 2002, which relates to providing opportunities for education to children." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4 mb-12", children: fundamentalDuties.map((item) => /* @__PURE__ */ jsxs(
      AccordionItem,
      {
        value: `duty-${item.id}`,
        className: "bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden",
        children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "p-6 hover:no-underline", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: item.id }) }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 text-left", children: /* @__PURE__ */ jsx("p", { className: "text-gray-800 font-medium leading-relaxed", children: item.duty }) })
          ] }) }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "px-6 pb-6 border-t border-gray-100 pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 text-gray-600", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("p", { children: "As a responsible citizen, it is important to uphold this duty to ensure the progress and unity of our nation." })
          ] }) })
        ]
      },
      item.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-900 mb-4", children: "Significance" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-blue-800", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-bold", children: "\u2022" }),
            /* @__PURE__ */ jsx("span", { children: "Remind citizens that while enjoying rights, they also have duties toward their nation" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-bold", children: "\u2022" }),
            /* @__PURE__ */ jsx("span", { children: "Help in the promotion of a sense of discipline and commitment among citizens" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-bold", children: "\u2022" }),
            /* @__PURE__ */ jsx("span", { children: "Create a conducive environment for the nation's progress" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-purple-900 mb-4", children: "Nature of Duties" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-purple-800", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-purple-600 font-bold", children: "\u2022" }),
            /* @__PURE__ */ jsx("span", { children: "Non-justiciable: Cannot be enforced by courts directly" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-purple-600 font-bold", children: "\u2022" }),
            /* @__PURE__ */ jsx("span", { children: "Moral obligations that appeal to citizens' conscience" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-purple-600 font-bold", children: "\u2022" }),
            /* @__PURE__ */ jsx("span", { children: "Courts may consider them while interpreting laws and rights" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-center text-white", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Be a Responsible Citizen" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-orange-50 max-w-2xl mx-auto mb-6", children: "Every citizen has a role to play in nation-building. By fulfilling our Fundamental Duties, we contribute to creating a stronger, more united India." }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5" }),
        "Commit to Your Duties Today"
      ] })
    ] })
  ] }) });
}
export {
  FundamentalDuties
};
