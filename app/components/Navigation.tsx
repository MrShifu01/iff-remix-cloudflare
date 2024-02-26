import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";


// export const loader: LoaderFunction = async (args) => {
//     const { sessionClaims } = await getAuth(args);
//     return { sessionClaims };
// };

type NavigationProps = {
    open: boolean;
    cycleOpen: () => void;
};

function Navigation({ open, cycleOpen }: NavigationProps) {
    // const data = useLoaderData<typeof loader>();

    return (
        <div className="bg-slate-100 dark:bg-slate-950 shadow-lg shadow-white/10 w-screen">
            {/* NAVBAR */}
            <div className="grid grid-cols-6 grid-rows-1 h-[3rem] w-screen mx-auto max-w-[1000px]">
                {/* BURGER MENU */}
                <button
                    className="col-start-1 col-end-2 flex flex-col justify-center items-center gap-[0.125rem] hover:scale-110 active:scale-100"
                    onClick={() => cycleOpen()}
                >
                    <div
                        className={`bg-slate-900 dark:bg-slate-200 h-[0.125rem] rounded-sm w-4 transition-all ${
                            open && "rotate-45 translate-y-[0.125rem]"
                        }`}
                    ></div>
                    <div
                        className={`bg-slate-900 dark:bg-slate-200 h-[0.125rem] rounded-sm w-4 transition-all ${
                            open && "hidden"
                        }`}
                    ></div>
                    <div
                        className={`bg-slate-900 dark:bg-slate-200 h-[0.125rem] rounded-sm w-4 transition-all ${
                            open && "-rotate-45 -translate-y-[0.125rem]"
                        }`}
                    ></div>
                </button>

                {/* LOGO */}
                <div className="col-start-2 col-end-6 flex justify-center items-center">
                    <Link
                        onClick={() => open && cycleOpen()}
                        to="/"
                        className="text-2xl text-slate-950 dark:text-slate-300 font-bold hover:scale-105 active:scale-100"
                    >
                        IFF
                    </Link>
                </div>

                {/* PROFILE */}
                <div className="col-start-6 col-end-7 flex justify-center gap-3 pr-3 items-center">
                    {/* {!data.sessionClaims && (
                        <Link to="sign-in" className="text-white text-md">
                            Sign in
                        </Link>
                    )}
                    {data.sessionClaims && (
                        <div className="h-[2rem] w-[2rem] rounded-full overflow-hidden hover:sacle-110 active:scale-100">
                            <UserButton afterSignOutUrl="https://iff-app.vercel.app" />
                        </div>
                    )} */}
                    {/* {data.sessionClaims && (
                        <UserButton afterSignOutUrl="http://localhost:3000" />
                    )} */}

                </div>
            </div>
        </div>
    );
}

export default Navigation;
