"use client";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

export default function ProtectedRoute({
  children,
}) {

  const router = useRouter();

  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      router.push("/auth/login");

    } else {

      setAuthorized(true);
    }

  }, []);

  if (!authorized) {

    return null;
  }

  return children;
}