import { Link } from "react-router";
import { Home, Search, BookOpen } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <Search className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Looking for something specific?
          </h2>
          <p className="text-gray-600 mb-6">
            Here are some helpful links to get you back on track:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-green-50 hover:from-orange-100 hover:to-green-100 rounded-lg border border-orange-200 transition-all"
            >
              <Home className="w-6 h-6 text-orange-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Home Page</div>
                <div className="text-sm text-gray-600">Start from the beginning</div>
              </div>
            </Link>

            <Link
              to="/framework"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg border border-blue-200 transition-all"
            >
              <BookOpen className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Constitution Framework</div>
                <div className="text-sm text-gray-600">Learn the basics</div>
              </div>
            </Link>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
