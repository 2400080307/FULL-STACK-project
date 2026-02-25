import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Eye, Share2, BookOpen } from "lucide-react";

export function ArticleDetail() {
  const { id } = useParams();

  // Mock article data
  const article = {
    id: id,
    title: "Understanding Article 21: Right to Life and Personal Liberty",
    author: "Dr. Rajesh Sharma",
    date: "February 18, 2026",
    views: 456,
    category: "Fundamental Rights",
    content: [
      {
        type: "paragraph",
        text: "Article 21 of the Indian Constitution is one of the most fundamental rights guaranteed to citizens. It states: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.'",
      },
      {
        type: "heading",
        text: "Historical Context",
      },
      {
        type: "paragraph",
        text: "This article has been the cornerstone of various landmark judgments by the Supreme Court of India. Initially, it was interpreted narrowly, but through judicial interpretation, its scope has been significantly expanded over the years.",
      },
      {
        type: "heading",
        text: "Key Interpretations",
      },
      {
        type: "paragraph",
        text: "The Supreme Court has expanded the meaning of 'life' under Article 21 to include the right to live with human dignity, right to livelihood, right to health, right to clean environment, right to education, and many more fundamental aspects that make life meaningful.",
      },
      {
        type: "heading",
        text: "Landmark Cases",
      },
      {
        type: "list",
        items: [
          "Maneka Gandhi v. Union of India (1978) - Expanded the interpretation of 'personal liberty'",
          "Francis Coralie Mullin v. Administrator (1981) - Right to live with human dignity",
          "Olga Tellis v. Bombay Municipal Corporation (1985) - Right to livelihood",
          "M.C. Mehta v. Union of India - Right to clean environment",
        ],
      },
      {
        type: "heading",
        text: "Significance Today",
      },
      {
        type: "paragraph",
        text: "Article 21 continues to evolve through judicial interpretation and remains one of the most invoked articles in the Constitution. It serves as a powerful tool for protecting citizens' rights and ensuring their dignity in various aspects of life.",
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/fundamental-rights"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Fundamental Rights
        </Link>

        {/* Article Header */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 md:p-12 text-white mb-8">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-orange-100">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{article.views} views</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {section.text}
                  </p>
                );
              }

              if (section.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {section.text}
                  </h2>
                );
              }

              if (section.type === "list" && section.items) {
                return (
                  <ul key={index} className="space-y-3 mb-6 ml-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-orange-600">•</span> {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Found this helpful?</span>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all">
                <Share2 className="w-5 h-5" />
                Share Article
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Right to Equality - Article 14",
                category: "Fundamental Rights",
                views: 328,
              },
              {
                title: "Right to Freedom of Speech - Article 19",
                category: "Fundamental Rights",
                views: 412,
              },
              {
                title: "Right to Constitutional Remedies",
                category: "Fundamental Rights",
                views: 267,
              },
            ].map((related, index) => (
              <Link
                key={index}
                to={`/article/${index + 2}`}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-orange-300"
              >
                <div className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                  {related.category}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{related.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span>{related.views} views</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
