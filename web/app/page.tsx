"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("paring_auth_token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">PARING</h1>
          <p className="text-2xl md:text-3xl mb-4">Healthcare at Your Home</p>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Platform perawatan kesehatan modern yang menghubungkan pasien dengan perawat profesional
            untuk layanan perawatan di rumah berkualitas tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/login"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              Register
            </Link>
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Professional Nurses</h3>
              <p className="text-blue-100">
                Perawat bersertifikat dan berpengalaman siap membantu Anda 24/7
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
              <p className="text-blue-100">
                Pesan layanan perawatan dengan mudah kapan saja, di mana saja
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
              <p className="text-blue-100">
                Layanan terpercaya dengan standar kualitas internasional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
