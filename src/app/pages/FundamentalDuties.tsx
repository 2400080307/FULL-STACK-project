import { fundamentalDuties } from "../data/constitution-data";
import { Shield, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function FundamentalDuties() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fundamental Duties
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Fundamental Duties are the moral obligations of all citizens to help promote
            a spirit of patriotism and uphold the unity of India (Article 51A)
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">About Fundamental Duties</h2>
          <div className="space-y-3 text-green-50">
            <p className="leading-relaxed">
              Fundamental Duties were added to the Constitution by the 42nd Amendment Act, 1976,
              on the recommendations of the Swaran Singh Committee. These duties serve as a
              constant reminder to every citizen to perform their duties towards the nation.
            </p>
            <p className="leading-relaxed">
              Originally, there were 10 Fundamental Duties. The 11th duty was added by the
              86th Constitutional Amendment Act, 2002, which relates to providing opportunities
              for education to children.
            </p>
          </div>
        </div>

        {/* Duties Accordion */}
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {fundamentalDuties.map((item) => (
            <AccordionItem
              key={item.id}
              value={`duty-${item.id}`}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{item.id}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-800 font-medium leading-relaxed">{item.duty}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 border-t border-gray-100 pt-4">
                <div className="flex items-start gap-4 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>As a responsible citizen, it is important to uphold this duty to ensure the progress and unity of our nation.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Significance</h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Remind citizens that while enjoying rights, they also have duties toward their nation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Help in the promotion of a sense of discipline and commitment among citizens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Create a conducive environment for the nation's progress</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Nature of Duties</h3>
            <ul className="space-y-3 text-purple-800">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Non-justiciable: Cannot be enforced by courts directly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Moral obligations that appeal to citizens' conscience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Courts may consider them while interpreting laws and rights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Be a Responsible Citizen</h2>
          <p className="text-lg text-orange-50 max-w-2xl mx-auto mb-6">
            Every citizen has a role to play in nation-building. By fulfilling our Fundamental Duties,
            we contribute to creating a stronger, more united India.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold">
            <CheckCircle className="w-5 h-5" />
            Commit to Your Duties Today
          </div>
        </div>
      </div>
    </div>
  );
}
