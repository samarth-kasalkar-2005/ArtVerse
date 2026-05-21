"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import {
  Home,
  Compass,
  Upload,
  User,
  Settings,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function Sidebar() {

  const pathname = usePathname();

  const router = useRouter();

  const { theme } = useTheme();

  // TOKEN STATE
  const [token, setToken] =
    useState(null);

  // GET TOKEN
  useEffect(() => {

    const storedToken =
      localStorage.getItem(
        "token"
      );

    setToken(storedToken);

  }, []);

  // MENU ITEMS
  const menuItems = [

    {
      name: "Home",
      icon: <Home size={22} />,
      path: "/",
    },

    {
      name: "Explore",
      icon: <Compass size={22} />,
      path: "/explore",
    },

    ...(token
      ? [
          {
            name: "Upload",
            icon: <Upload size={22} />,
            path: "/upload",
          },

          {
            name: "Profile",
            icon: <User size={22} />,
            path: "/profile",
          },
        ]
      : []),

    {
      name: "Settings",
      icon: <Settings size={22} />,
      path: "/settings",
    },
  ];

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setToken(null);

    router.push("/auth/login");

    router.refresh();
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-[260px] border-r z-50
      ${
        theme === "dark"
          ? "bg-black border-zinc-800"
          : "bg-white border-gray-200"
      }`}
    >

      {/* LOGO */}
      <div className="h-[90px] flex items-center px-8 border-b border-inherit">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">

          ArtVerse

        </h1>

      </div>

      {/* NAVIGATION */}
      <div className="flex flex-col gap-5 p-5 mt-6">

        {menuItems.map((item, index) => {

          const active =
            pathname === item.path;

          return (

            <Link
              key={index}
              href={item.path}
              className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 text-lg
              ${
                active
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : theme === "dark"
                  ? "hover:bg-zinc-900"
                  : "hover:bg-gray-100"
              }`}
            >

              {item.icon}

              <span>
                {item.name}
              </span>

            </Link>

          );
        })}

        {/* AUTH SECTION */}
        <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col gap-4">

          {token ? (

            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-6 py-5 rounded-2xl text-lg hover:bg-red-500/20 transition"
            >

              <LogOut size={22} />

              Logout

            </button>

          ) : (

            <>
              <Link
                href="/auth/login"
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 text-lg
                ${
                  pathname === "/auth/login"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                    : theme === "dark"
                    ? "hover:bg-zinc-900"
                    : "hover:bg-gray-100"
                }`}
              >

                <LogIn size={22} />

                <span>
                  Login
                </span>

              </Link>

              <Link
                href="/auth/register"
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 text-lg
                ${
                  pathname === "/auth/register"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                    : theme === "dark"
                    ? "hover:bg-zinc-900"
                    : "hover:bg-gray-100"
                }`}
              >

                <UserPlus size={22} />

                <span>
                  Register
                </span>

              </Link>

            </>

          )}

        </div>

      </div>

    </aside>
  );
}