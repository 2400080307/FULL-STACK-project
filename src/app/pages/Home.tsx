import { Link } from "react-router";
import { BookOpen, Scale, Shield, GraduationCap, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Learn the Framework",
      description: "Explore the structure, preamble, and key features of the Indian Constitution",
      link: "/framework",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Scale,
      title: "Fundamental Rights",
      description: "Understand your rights as guaranteed by the Constitution",
      link: "/fundamental-rights",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Fundamental Duties",
      description: "Learn about the duties every citizen must uphold",
      link: "/fundamental-duties",
      color: "from-green-500 to-green-600"
    },
    {
      icon: GraduationCap,
      title: "Test Your Knowledge",
      description: "Take interactive quizzes to assess your understanding",
      link: "/quiz",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { label: "Articles", value: "470", icon: BookOpen },
    { label: "Parts", value: "25", icon: Scale },
    { label: "Schedules", value: "12", icon: Shield },
    { label: "Amendments", value: "106+", icon: Award }
  ];

  const highlights = [
    "Longest written constitution in the world",
    "Adopted on November 26, 1949",
    "Came into effect on January 26, 1950",
    "Guarantees fundamental rights to all citizens",
    "Federal system with unitary features",
    "Independent judiciary with Supreme Court"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-white to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Know Your Constitution</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Constitution of India
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Empowering citizens through constitutional awareness. Learn about your rights, duties,
              and the framework that governs our nation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/framework"
                className="px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Take a Quiz
                <GraduationCap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Explore the Constitution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interactive modules to help you understand every aspect of the Indian Constitution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 hover:border-orange-200"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-orange-500 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Highlights of the Constitution
              </h2>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Preamble</h3>
              <p className="text-gray-700 leading-relaxed italic">
                "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a{" "}
                <span className="font-semibold text-orange-600">SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</span>{" "}
                and to secure to all its citizens:{" "}
                <span className="font-semibold text-green-600">JUSTICE, LIBERTY, EQUALITY</span> and{" "}
                <span className="font-semibold text-blue-600">FRATERNITY</span>..."
              </p>
              <Link
                to="/framework"
                className="mt-6 inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
              >
                Read full preamble
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Educators */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Are you an Educator?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our platform to create educational content, conduct interactive sessions,
            and contribute to constitutional awareness
          </p>
          <Link
            to="/educator"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Educator Portal
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
