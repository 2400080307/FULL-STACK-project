import { Outlet, Link, useLocation } from "react-router";
import { BookOpen, Scale, Users, Home, GraduationCap, Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Framework", href: "/framework", icon: BookOpen },
    { name: "Fundamental Rights", href: "/fundamental-rights", icon: Scale },
    { name: "Fundamental Duties", href: "/fundamental-duties", icon: Shield },
    { name: "Quiz", href: "/quiz", icon: GraduationCap },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Constitution of India</h1>
                <p className="text-xs text-gray-600">Know Your Rights & Duties</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive(item.href)
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Admin/Educator Links */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/educator"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 rounded-lg transition-all"
              >
                Educator
              </Link>
              <Link
                to="/admin"
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all"
              >
                Admin
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                        isActive(item.href)
                          ? "bg-orange-500 text-white"
                          : "text-gray-700 hover:bg-orange-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
                <div className="border-t mt-2 pt-2">
                  <Link
                    to="/educator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-green-100 rounded-lg"
                  >
                    <Users className="w-4 h-4" />
                    <span className="font-medium">Educator</span>
                  </Link>
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg mt-2"
                  >
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">Admin</span>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-180px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3">About</h3>
              <p className="text-sm text-gray-400">
                An educational platform dedicated to spreading awareness about the Constitution of India,
                its principles, and the rights and duties of every citizen.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/framework" className="hover:text-white transition-colors">Constitution Framework</Link></li>
                <li><Link to="/fundamental-rights" className="hover:text-white transition-colors">Fundamental Rights</Link></li>
                <li><Link to="/fundamental-duties" className="hover:text-white transition-colors">Fundamental Duties</Link></li>
                <li><Link to="/quiz" className="hover:text-white transition-colors">Take a Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">For Educators</h3>
              <p className="text-sm text-gray-400 mb-3">
                Join our platform to create educational content and help spread constitutional awareness.
              </p>
              <Link
                to="/educator"
                className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors"
              >
                Educator Portal
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>© 2026 Constitution of India Education Platform. Built for awareness and education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
