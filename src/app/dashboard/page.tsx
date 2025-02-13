"use client"; // 👈 Marks this as a Client Component

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userId) {
      router.push("/sign-in"); // Redirect on the client side
    }
  }, [userId, router]);

  if (!userId) return null; // Prevent rendering while redirecting

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
      <p>This is a protected page. Only logged-in users can see this.</p>
    </div>
  );
}
