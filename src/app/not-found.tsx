import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="bg-white text:[] flex flex-col justify-center items-center h-dvh">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Could not find requested resource
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
