// import { json, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
// import HomePageWorkoutList from "~/components/HomePageWorkoutList";
// import SectionHeaders from "~/components/SectionHeaders";
// import Video from "~/components/Video";
// import { db } from "~/utils/db";

const video = "M48xlquEkRM";
const image = "/snatch.jpeg";

// export const loader = async () => {
//     const workouts = await db.workout.findMany({
//         orderBy: { date: "desc" },
//     });
//     return json(
//         { workouts },
//         {
//             headers: {
//                 "Cache-Control": "max-age=43200, public",
//             },
//         }
//     );
// };

export default function IndexRoute() {
    // const data = useLoaderData<typeof loader>();

    // const dailyWorkouts = data.workouts.filter(
    //     (workout) => workout.category === "dailyworkout"
    // );
    // const cycleWorkouts = data.workouts.filter(
    //     (workout) => workout.category === "cycles"
    // );

    return (
        <div className="pt-[3rem] max-w-[900px] mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* <Video video={video} image={image} title="IFF Training" /> */}

                {/* <SectionHeaders title="DAILY TRAINING" link="dailytraining" /> */}

                {/* {dailyWorkouts.slice(0, 4).map((workout) => (
                    <div key={workout.id} className="border-b last:border-none border-slate-100 dark:border-slate-700">
                        <HomePageWorkoutList
                            date={workout.formattedDate}
                            name={workout.name}
                            id={workout.id}
                        />
                    </div>
                ))}

                <SectionHeaders title="IFF CYCLES" link="iffcycles" />
                {cycleWorkouts.slice(0, 4).map((workout) => (
                    <div key={workout.id} className="border-b border-slate-100 dark:border-slate-700 last:border-none">
                        <HomePageWorkoutList
                            date={workout.formattedDate}
                            name={workout.name}
                            id={workout.id}
                        />
                    </div>
                ))} */}
            </motion.div>
        </div>
    );
}
