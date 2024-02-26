import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

// STYLES
import styles from "./tailwind.css";
// import globalStyles from "./styles/global.css";

// CLERK AUTH
// import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
// import { getAuth, rootAuthLoader } from "@clerk/remix/ssr.server";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Navigation from "~/components/Navigation";
import SideBarMenu from "./components/SideBarMenu";
import { useEffect } from "react";
import clsx from 'clsx';
import { ThemeProvider, useTheme } from '~/utils/theme-provider';

export const meta: MetaFunction = () => {
  return [
      { title: "Inner Fight Fitness App" },
      {
          name: "description",
          content: "Official web app for Inner Fight Fitness Programming",
      },
  ];
};

// LINKS FUNCTION
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // { rel: "stylesheet", href: globalStyles },
];

// LOADER FUNCTION
// export const loader: LoaderFunction = async (args) => {
  // const { sessionClaims } = await getAuth(args);
  // return rootAuthLoader(args, ({ request }) => {
  //     const { sessionId, userId, getToken } = request.auth;
  //     // fetch data
  //   });
    // return { sessionClaims };
// };

// ERROR BOUNDARY
// export const ErrorBoundary = ClerkErrorBoundary();

function App() {
  const [open, cycleOpen] = useCycle(false, true);
  // const data = useLoaderData<typeof loader>();
  // const isAdmin = data.sessionClaims?.metadata.role === "admin";
  const isAdmin = true;
  const [theme] = useTheme()
  console.log(theme);

  useEffect(() => {
      // Disable scrolling when the sidebar is open
      if (open) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  
      // Cleanup the effect when the component is unmounted
      return () => {
          document.body.style.overflow = 'auto';
      };
  }, [open]);
  

  return (
      <html lang="en" 
      className={clsx(theme)}
      >
          <head>
              <meta charSet="utf-8" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <Meta />
              <Links />
          </head>
          <AnimatePresence>
              <body className={`overflow-x-hidden `}>
                  <div className={`${open && "bg-transparent"}`}>
                      {/* NAVIGATION */}
                      <div className="z-20 fixed">
                          <Navigation open={open} cycleOpen={cycleOpen} />
                          {/* SIDEBAR */}
                          <AnimatePresence>
                              {open && (
                                  <motion.div
                                      className="h-[calc(100dvh-3rem)] w-screen absolute top-12 z-50 overflow-hidden"
                                      initial={{ width: 0 }}
                                      animate={{ width: "100vw" }}
                                      exit={{
                                          width: 0,
                                          transition: { duration: 0.3 },
                                      }}
                                      transition={{
                                          duration: 0.3,
                                          type: "tween",
                                      }}
                                  >
                                      <SideBarMenu
                                          isAdmin={isAdmin}
                                          cycleOpen={cycleOpen}
                                      />
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </div>
                  </div>
                  <Outlet />
                  <ScrollRestoration />
                  <Scripts />
                  <LiveReload />
              </body>
          </AnimatePresence>
      </html>
  );
}

function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWithProviders
// export default ClerkApp(App)
// export default App