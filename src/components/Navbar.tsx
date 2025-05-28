import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  const user = undefined;
  const isAdmin = false;

  return (
    // main nav div
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className=" flex h-14 items-center justify-between border-b border-zinc-200">
          {/* case cobra name and access for homepage also */}
          <Link href="/" className="flex z-40 font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>
          {/* Links and also redirecting to logout, login and signup according to authentication */}
          <div className="h-full flex items-center space-x-4">
            {/* UI will change according to user present or not */}
            {user ? (
              <>
                {/* signout functioning */}
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>
                {/* if admin is available it will show dashboard otherwise nothing*/}
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                {/* It will redirect to create case page */}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                {/* if user not available or login so this functioning will come at work */}
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block " />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
