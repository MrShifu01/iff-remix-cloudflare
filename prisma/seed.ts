
import { db } from "~/utils/db";

async function seed(workouts) {
    for (const workout of workouts) {
        await db.workout.create({
            data: workout,
        });
    }
}

const workouts = [
    {
        name: 'Workout 1',
        formattedDate: 'Feb 06',
        date: new Date("2024-02-06"),
        category: 'dailyworkout',
        coachNote: 'Remember to stay hydrated!',
        shortOnTime: 'No',
        warmUp: '5 minutes of stretching',
        mainWorkout: '30 minutes of running',
        coolDown: '5 minutes of cool down exercises',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 2',
        date: new Date("2024-02-07"),
        formattedDate: 'Feb 07',
        category: 'cycles',
        coachNote: 'Focus on proper form',
        shortOnTime: 'Yes',
        warmUp: '10 minutes of dynamic warm up',
        mainWorkout: '3 sets of squats, 3 sets of bench press',
        coolDown: '5 minutes of stretching',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 3',
        formattedDate: 'Feb 08',
        date: new Date("2024-02-08"),
        category: 'challenges',
        coachNote: 'Push your limits!',
        shortOnTime: 'No',
        warmUp: '15 minutes of cardio',
        mainWorkout: 'AMRAP in 20 minutes: 10 push-ups, 15 squats',
        coolDown: '10 minutes of yoga stretches',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 4',
        formattedDate: 'Feb 09',
        date: new Date("2024-02-09"),
        category: 'dailyworkout',
        coachNote: 'Stay consistent!',
        shortOnTime: 'Yes',
        warmUp: '5 minutes of jumping jacks',
        mainWorkout: '20 minutes of bodyweight exercises',
        coolDown: '5 minutes of relaxation techniques',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 5',
        formattedDate: 'Feb 10',
        date: new Date("2024-02-10"),
        category: 'challenges',
        coachNote: 'Challenge yourself!',
        shortOnTime: 'No',
        warmUp: '10 minutes of jogging',
        mainWorkout: '5 rounds of 10 burpees, 15 lunges',
        coolDown: '8 minutes of stretching',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 6',
        formattedDate: 'Feb 11',
        date: new Date("2024-02-11"),
        category: 'cycles',
        coachNote: 'Focus on your breathing',
        shortOnTime: 'Yes',
        warmUp: '5 minutes of light cardio',
        mainWorkout: '3 sets of deadlifts, 3 sets of overhead press',
        coolDown: '5 minutes of cool down exercises',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 7',
        formattedDate: 'Feb 12',
        date: new Date("2024-02-12"),
        category: 'dailyworkout',
        coachNote: '<p>Prioritize your health!</p>',
        shortOnTime: 'No',
        warmUp: '15 minutes of dynamic stretching',
        mainWorkout: '45 minutes of mixed cardio',
        coolDown: '10 minutes of yoga',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
    {
        name: 'Workout 8',
        formattedDate: 'Feb 13',
        date: new Date("2024-02-13"),
        category: 'challenges',
        coachNote: 'You can do it!',
        shortOnTime: 'Yes',
        warmUp: '5 minutes of jump rope',
        mainWorkout: 'AMRAP in 15 minutes: 5 push-ups, 10 squats',
        coolDown: '5 minutes of deep breathing',
        mainVideoId: 'UrdNFJaTAnc',
        movementVideos: ["UrdNFJaTAnc", "UrdNFJaTAnc"]
    },
];

seed(workouts)