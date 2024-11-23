"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    user && CheckUser();
  }, [user]);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    });

    console.log(result);
  };
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 py-24 text-center lg:text-left">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Elevate Your Productivity <br />
                with <span className="text-yellow-300">Rapid Noter AI</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8">
              Your Ultimate AI-Powered Note-Taking Assistant. 
              Accelerate Your Reading and Note-Taking with the Power of AI! 😀
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link href="/sign-up">
                  <button className="bg-yellow-300 text-indigo-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                    Get Started for Free
                  </button>
                </Link>
                <Link href="/sign-in">
                  <button className="bg-transparent border border-yellow-300 px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-yellow-300 hover:text-indigo-900 transition">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <Image
                src="/hero.png"
                alt="AI Productivity"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gray rounded-t-full"></div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
          Features That Make Note-Taking Effortless
          </h2>
          <p className="text-lg mb-16 text-gray-600">
          Your AI-powered companion for capturing, organizing, and refining every piece of information effortlessly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="absolute top-[-20px] left-4 w-[80px] h-[80px] rounded-full bg-indigo-100 flex items-center justify-center shadow-lg">
                <Image
                  src="/answers.png"
                  alt="Smart Summaries"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold mt-16">Instant Answers at Your Fingertips</h3>
              <p className="mt-4 text-gray-600">
              Get access to a personal research assistant that answers any question in seconds, helping you stay informed and efficient.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="absolute top-[-20px] left-4 w-[80px] h-[80px] rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                <Image
                  src="/answers2.png"
                  alt="Seamless Integration"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold mt-16">AI-Powered Answer Generation</h3>
              <p className="mt-4 text-gray-600">
              Ask complex questions and receive detailed, accurate answers powered by AI, making research and decision-making faster than ever.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="absolute top-[-20px] left-4 w-[80px] h-[80px] rounded-full bg-pink-100 flex items-center justify-center shadow-lg">
                <Image
                  src="/cloudsync.png"
                  alt="AI-Powered Organization"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold mt-16">
              Cloud Sync Across Devices
              </h3>
              <p className="mt-4 text-gray-600">
              Access your answers anytime, anywhere, with secure cloud synchronization, ensuring up-to-date information across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">See It in Action (Demo)</h2>
          <p className="text-lg mb-8">
            Watch how Rapid Noter AI transforms your notes into brilliance.
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              poster="/thumbnail.png"
            >
              <source src="/rapidnoterai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">
          Choose Your Plan
          </h2>
          <p className="text-lg mb-12 text-gray-600">
            Start for free or unlock premium features to take your productivity
            to the next level with Rapid Noter AI!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Freemium Plan */}
            <div className="bg-white shadow-lg rounded-lg p-8 border hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600">Freemium</h3>
              <p className="mt-2 text-lg font-medium">$0 / 3 PDF</p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li>3 PDF Uploads</li>
                <li>Unlimited Notes</li>
                <li>Email Support</li>
                <li>Help Center Access</li>
              </ul>
              <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
                Get Started For Free
              </button>
            </div>
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg rounded-lg p-8 transform scale-105">
              <h3 className="text-2xl font-bold">Starter (Beta)</h3>
              <p className="mt-2 text-lg font-medium">$19/ 30 PDF</p>
              <ul className="mt-6 space-y-4">
                <li>30 PDF Uploads</li>
                <li>Unlimited Notes</li>
                <li>Priority Email Support</li>
                <li>Help Center Access</li>
              </ul>
              <button className="mt-6 w-full bg-white text-indigo-600 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-24 text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            TRY TODAY FOR FREE!
          </h2>
          <p className="text-xl mb-8">
            Try Rapid Noter today and discover how it can revolutionize your
            note-taking and research workflow!
          </p>
          <p className="text-lg mb-6">No credit card required.</p>
          <Link href="/sign-up">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Get Started For Free
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            © 2024 Rapid Noter. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            <Link
              href="/sign-up"
              className="hover:text-yellow-500 transition-colors mx-2"
            >
              Sign Up
            </Link>
            <span>|</span>
            <Link
              href="/sign-in"
              className="hover:text-yellow-500 transition-colors mx-2"
            >
              Sign In
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
