import { fundamentalRights } from "@/app/data/constitution-data";
import { Scale, Bird, ShieldBan, Church, BookOpen, Gavel } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const iconMap: Record<string, any> = {
  scale: Scale,
  bird: Bird,
  "shield-ban": ShieldBan,
  church: Church,
  "book-open": BookOpen,
  gavel: Gavel,
};

export function FundamentalRights() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fundamental Rights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Fundamental Rights are the basic human rights enshrined in the Constitution of India
            which are guaranteed to all citizens (Part III, Articles 12-35)
          </p>
        </div>

        {/* Introduction Box */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">Why are Fundamental Rights Important?</h2>
          <p className="text-lg text-orange-50 leading-relaxed">
            Fundamental Rights protect the liberties and freedoms of the people against any
            invasion by the state. They are justiciable in nature, meaning they are enforceable
            by the courts. Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies)
            the 'Heart and Soul' of the Constitution as it empowers citizens to move the Supreme
            Court for enforcement of these rights.
          </p>
        </div>

        {/* Rights Accordion */}
        <Accordion type="single" collapsible className="space-y-6">
          {fundamentalRights.map((right, index) => {
            const Icon = iconMap[right.icon];

            return (
              <AccordionItem
                key={right.id}
                value={right.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <AccordionTrigger className="p-6 hover:no-underline [&>svg]:size-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-2">
                        {right.articles}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {index + 1}. {right.title}
                      </h3>
                      <p className="text-gray-600 font-normal">{right.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 border-t border-gray-100">
                  <div className="mt-6 space-y-4">
                    {right.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg p-5 border-l-4 border-orange-500"
                      >
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                            {detail.article}
                          </span>
                          <h4 className="font-bold text-gray-900">{detail.title}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{detail.content}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Footer Note */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-2">Important Note</h3>
          <p className="text-blue-800">
            While Fundamental Rights are guaranteed to all citizens, they are not absolute and are
            subject to reasonable restrictions. The State can impose restrictions in the interest of
            sovereignty, integrity, security of India, friendly relations with foreign states, public
            order, decency, morality, or in relation to contempt of court, defamation, or incitement
            to an offence.
          </p>
        </div>
      </div>
    </div>
  );
}
