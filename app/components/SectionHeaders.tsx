import { Link } from "@remix-run/react";
import { ReactNode } from "react";

type SectionHeadersProps = {
    title: string;
    icon?: ReactNode;
    link?: string;
};

function SectionHeaders({ title, icon, link }: SectionHeadersProps) {
    return (
        <div className="flex items-center h-[3rem] bg-slate-100 dark:bg-slate-950 w-screen shadow-inner dark:shadow-slate-800 max-w-[900px] mx-auto">
            <div className="flex justify-center items-center gap-3 ml-5 font-bold dark:text-white">
                    {icon}
                    {title}
                    {link === "dailytraining" && <Link to="/dailytraining" className="text-blue-500 font-semibold text-xs mt-1 hover:text-blue-600">VIEW ALL</Link>}
                    {link === "iffcycles" && <Link to="/iffcycles" className="text-blue-500 font-semibold text-xs mt-1 hover:text-blue-600">VIEW ALL</Link>}
                    {link === "challenges" && <Link to="/challenges" className="text-blue-500 font-semibold text-xs mt-1 hover:text-blue-600">VIEW ALL</Link>}
            </div>
        </div>
    );
}

export default SectionHeaders;
