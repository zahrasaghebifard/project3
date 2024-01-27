// @ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "sonner";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      {Component.auth ? (
        <Auth adminOnly={Component.auth.adminOnly}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

function Auth({ children, adminOnly }: any) {
  const [status, setStatus] = useState("loading");
  const router = useRouter();

  // const { status, data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push("/unauthorized");
  //   },
  // });
  const session = { user: { isAdmin: "foo" } };
  if (status === "loading") {
    return "Loading";
  }

  if (adminOnly && !session.user.isAdmin) {
    router.push("/401");
  }

  return children;
}
// USAGE DashboardPage.auth = { adminOnly: true }
