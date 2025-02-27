import React from "react";
import { Metadata } from "next";
import Link from "next/link";

// Define the metadata for the page
export const metadata: Metadata = {
  title: "About", // Page title
  description: "About company", // Page description
};

const Team = () => {
  // Using a simpler function component definition
    return (
        <div className="bg-slate-700 w-full h-screen flex text-sky-50 flex-col items-center justify-center">
                <Link href='/'>Home</Link>
            <h1 className="text-4xl font-bold mb-4">Our Team</h1> {/* Title */}
            <p className="text-lg">Welcome to the Team page</p>
            {/* Add more content or team member details here */}
        </div>
    );
};

export default Team;
