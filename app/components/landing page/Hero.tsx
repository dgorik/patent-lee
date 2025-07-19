import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb, FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Patent Lee
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey from initial ideas to comprehensive proposals.
            Choose your path below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Idea Discovery
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Explore and brainstorm new concepts. Perfect for the initial
              stages of your project when you're looking for inspiration and
              direction.
            </p>
            <Link href="/idea-discovery" className="block">
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-lg">
                Start Discovering
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Draft Proposal
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Create detailed project proposals with structured planning. Ideal
              when you have a clear idea and need to formalize it.
            </p>
            <Link href="/draft-proposal" className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                Create Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
