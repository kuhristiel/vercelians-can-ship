import React from 'react'

export default function WorkoutSchedule() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Weekly Workout Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-indigo-800">Monday: Cardio + Strength</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>30 min moderate-intensity running or cycling</li>
            <li>Full-body strength workout:</li>
            <ul className="list-circle pl-5 space-y-1">
              <li>Squats: 3 sets of 10-12 reps</li>
              <li>Push-ups: 3 sets of 10-15 reps</li>
              <li>Dumbbell rows: 3 sets of 10-12 reps per arm</li>
              <li>Lunges: 3 sets of 10 reps per leg</li>
              <li>Plank: 3 sets of 30-60 seconds</li>
            </ul>
          </ul>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">Tuesday: Flexibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>45-60 min Yoga or Pilates session</li>
            <li>Focus on full-body stretching</li>
            <li>Improve overall flexibility</li>
          </ul>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-indigo-800">Wednesday: Strength + Cardio</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Upper body strength focus:</li>
            <ul className="list-circle pl-5 space-y-1">
              <li>Bench press or push-ups: 3 sets of 10-12 reps</li>
              <li>Pull-ups or lat pulldowns: 3 sets of 8-10 reps</li>
              <li>Shoulder press: 3 sets of 10-12 reps</li>
              <li>Bicep curls: 3 sets of 10-12 reps</li>
              <li>Tricep dips: 3 sets of 10-15 reps</li>
            </ul>
            <li>20 min high-intensity interval training (HIIT)</li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-green-800">Thursday: Rest</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Allow your body to recover and repair</li>
            <li>Light stretching or walking if desired</li>
          </ul>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-indigo-800">Friday: Cardio + Strength</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>30 min swimming or rowing</li>
            <li>Lower body and core strength focus:</li>
            <ul className="list-circle pl-5 space-y-1">
              <li>Deadlifts: 3 sets of 8-10 reps</li>
              <li>Leg press or squats: 3 sets of 10-12 reps</li>
              <li>Calf raises: 3 sets of 15-20 reps</li>
              <li>Russian twists: 3 sets of 20 reps</li>
              <li>Leg raises: 3 sets of 12-15 reps</li>
            </ul>
          </ul>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">Saturday: Flexibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>30 min dynamic stretching routine</li>
            <li>Focus on improving range of motion in all major joints</li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-green-800">Sunday: Rest</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Another day for recovery</li>
            <li>Light activities like walking or gentle stretching</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Remember:</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Warm up before each workout with 5-10 min of light cardio and dynamic stretching</li>
          <li>Cool down after each session with 5-10 min of static stretching</li>
          <li>Stay hydrated throughout your workouts</li>
          <li>Listen to your body and adjust intensity or exercises as needed</li>
          <li>Gradually increase difficulty as you build strength and endurance</li>
        </ul>
      </div>
    </div>
  )
}

