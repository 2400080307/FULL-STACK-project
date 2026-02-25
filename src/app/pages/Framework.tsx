import { constitutionFramework } from "../data/constitution-data";
import { BookOpen, FileText, Award } from "lucide-react";

export function Framework() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Constitution Framework
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the structure and key features of the world's longest written constitution
          </p>
        </div>

        {/* Preamble Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">The Preamble</h2>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                {constitutionFramework.preamble.text}
              </p>
              <div className="flex flex-wrap gap-3">
                {constitutionFramework.preamble.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-full font-semibold text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Structure Statistics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Constitutional Structure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {constitutionFramework.structure.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {item.count}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {constitutionFramework.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Box */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold">•</span>
                <span>The Constitution took 2 years, 11 months, and 18 days to draft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold">•</span>
                <span>Dr. B.R. Ambedkar is known as the Father of the Indian Constitution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold">•</span>
                <span>The original Constitution was handwritten and calligraphed in both Hindi and English</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold">•</span>
                <span>Each page was decorated by artists from Shantiniketan</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
