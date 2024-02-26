import { Link } from "@remix-run/react";
import { CgList, CgProfile } from "react-icons/cg";
import { FaCog } from "react-icons/fa";
import SectionHeaders from "./SectionHeaders";
import { BsJournal, BsMoon, BsSun } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings, MdOutlineEvent } from "react-icons/md";
import { motion } from "framer-motion";
import { Theme, useTheme } from "~/utils/theme-provider";

type SideBarMenuProps = {
    isAdmin: boolean;
    cycleOpen: () => void;
};

function SideBarMenu({ isAdmin, cycleOpen }: SideBarMenuProps) {
    const [theme, setTheme] = useTheme();
    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        );
    };
    return (
        <div className="relative grid grid-cols-1 grid-rows-5 py-8 h-[100%] max-w-[900px] mx-auto bg-white overflow-hidden dark:bg-slate-900">
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ x: -200, opacity: 0 }}
                className="mb-2 lg:text-center h-[55vh] overflow-y-scroll overflow-x-hidden"
            >
                <button onClick={toggleTheme} className="text-blue-500 text-xl pb-4 pl-4 hover:text-blue-600 hover:scale-110 active:scale-100">
                    {theme === "dark" ? (
                            <BsSun />
                    ) : (
                            <BsMoon className="pl-1"/>
                    )}
                </button>
                <div className="flex flex-col gap-4">
                    {/* MEMBER ROUTES - Standard */}
                    <Link
                        onClick={() => cycleOpen()}
                        to="/dashboard"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-4 flex items-center gap-2"
                    >
                        <CgList className="text-black/50 dark:text-slate-400" />
                        Dashboard
                    </Link>

                    <Link
                        onClick={() => cycleOpen()}
                        to="/trainingjournal"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-4 flex items-center gap-2"
                    >
                        <BsJournal className="text-black/50 dark:text-slate-400" />
                        Training Journal
                    </Link>

                    <Link
                        onClick={() => cycleOpen()}
                        to="/videolibrary"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-4 flex items-center gap-2"
                    >
                        <GoVideo className="text-black/50 dark:text-slate-400" />
                        Video Library
                    </Link>
                    {/* MEMBER ROUTES - Training */}
                    <div>
                        <SectionHeaders
                            title="TRAINING"
                            icon={
                                <IoCalendarNumberOutline className="text-black text-lg dark:text-slate-400" />
                            }
                        />
                    </div>
                    <Link
                        onClick={() => cycleOpen()}
                        to="/dailytraining"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                    >
                        Daily Training
                    </Link>
                    <Link
                        onClick={() => cycleOpen()}
                        to="/iffcycles"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                    >
                        IFF Cycles
                    </Link>

                    {/* MEMBER ROUTES - Events */}
                    <SectionHeaders
                        title="EVENTS"
                        icon={
                            <MdOutlineEvent className="text-black text-xl dark:text-slate-400" />
                        }
                    />

                    <Link
                        onClick={() => cycleOpen()}
                        to="/events/10kchallenge"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                    >
                        10k Challenge
                    </Link>
                    <Link
                        onClick={() => cycleOpen()}
                        to="/events/lindachallenge"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                    >
                        Linda Challenge
                    </Link>
                    <Link
                        onClick={() => cycleOpen()}
                        to="/events/484challenge"
                        className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                    >
                        48 x 4 Challenge
                    </Link>

                    {/* ADMIN ROUTES */}
                    {isAdmin && (
                        <>
                            <SectionHeaders
                                title="ADMIN"
                                icon={
                                    <MdOutlineAdminPanelSettings className="text-black text-xl dark:text-slate-400" />
                                }
                            />
                            <Link
                                onClick={() => cycleOpen()}
                                to="/admin"
                                className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                            >
                                Manage Users
                            </Link>
                            <Link
                                onClick={() => cycleOpen()}
                                to="/workoutlibrary"
                                className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                                prefetch="viewport"
                            >
                                Workout Library
                            </Link>
                            <Link
                                onClick={() => cycleOpen()}
                                to="/add-workout"
                                className="text-slate-950 dark:text-slate-200 text-nowrap px-10 flex items-center gap-2"
                            >
                                Add New Workout
                            </Link>
                        </>
                    )}
                </div>
            </motion.div>

            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ x: -200, opacity: 0 }}
                className="absolute bottom-0 border-t border-black/10 w-[93vw] left-4 mb-2 p-2"
            >
                <Link
                    onClick={() => cycleOpen()}
                    className="flex gap-3 items-center text-slate-950 dark:text-slate-200 py-2"
                    to="/user/chris"
                >
                    <CgProfile />
                    PROFILE
                </Link>
                <Link
                    onClick={() => cycleOpen()}
                    to="/shop"
                    className="flex gap-3 items-center text-slate-950 dark:text-slate-200 py-2"
                >
                    <FaCog />
                    SHOP
                </Link>

                <Link
                    onClick={() => cycleOpen()}
                    to="/settings"
                    className="flex gap-3 items-center text-slate-950 dark:text-slate-200 py-2"
                >
                    <FaCog />
                    SETTINGS
                </Link>
            </motion.div>
        </div>
    );
}

export default SideBarMenu;
