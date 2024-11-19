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
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-24 text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Welcome to Rapid Noter</h1>
          <p className="text-xl mb-8">
            Accelerate Your Reading and Note-Taking with the Power of AI!
            &#128512;
            
          </p>

          {/* Sign In / Sign Up Buttons */}
          <div className="flex justify-center gap-6 mb-8">
            <Link href="/sign-up">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
                Sign Up
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-lg py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
                Sign In
              </Button>
            </Link>
          </div>
          
        </div>
      
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-10">
            Features That Make Note-Taking Effortless
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Multiple PDF Uploads
              </h3>
              <p className="text-lg">
                Easily upload and manage multiple PDFs for seamless note-taking.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4">Unlimited Notes</h3>
              <p className="text-lg">
                Take unlimited notes with full flexibility to organize them your
                way.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4">Cloud Sync</h3>
              <p className="text-lg">
                Access your notes anytime, anywhere with secure cloud sync
                across devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Choose Your Plan</h2>
          <p className="text-lg mb-10">
            Get started with a free plan or upgrade to upload more PDFs and unlock advanced features!
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Freemium Plan */}
            <div className="bg-white p-8 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Freemium Plan</h3>
              <p className="text-4xl font-bold mb-4">$0 / 3 PDF</p>
              <ul className="mb-6 text-center">
                <li className="mb-2">3 PDF Uploads</li>
                <li className="mb-2">Unlimited Notes</li>
                <li className="mb-2">Email Support</li>
                <li className="mb-2">Help Center Access</li>
              </ul>
              <Link href="/sign-up">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded-lg">
                Get Started
              </Button>
              </Link>
            </div>

            {/* Starter Plan */}
            <div className="bg-indigo-600 text-white p-8 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">
                Starter (Beta) Plan
              </h3>
              <p className="text-4xl font-bold mb-4">$19 / 30 PDF</p>
              <ul className="mb-6 text-center">
                <li className="mb-2">30 PDF Uploads</li>
                <li className="mb-2">Unlimited Notes</li>
                <li className="mb-2">Priority Email Support</li>
                <li className="mb-2">Help Center Access</li>
              </ul>
              <Link href="sign-up">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-lg">
              Get Started
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Get Started For Free
            </Button>
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
