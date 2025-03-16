import { PrevPlan } from "./components/prev-plan";
import { Journal } from "./components/journal";
import { VisionBoard } from "./components/vision-board/vision-board";
import { HabitChart } from "./components/habit-chart/habit-chart";
import { TomoPlan } from "./components/tomo-plan";

export default function Home() {
  return (
    <main className="top-0 right-0 flex flex-col items-center min-h-screen w-screen font-[Funnel Display] ">
      <div className="w-screen min-h-screen  flex flex-col items-center ">
        <div className="w-11/12 md:w-1/2 my-30 space-y-8">
          <PrevPlan />
          <Journal />
          <TomoPlan />
        </div>
      </div>
      <div className="w-screen min-h-screen  flex flex-col items-center bg-slate-800 text-slate-300">
        <div className="mt-96 w-11/12 md:w-1/2 my-30 space-y-8">
          <VisionBoard />
          <HabitChart />
        </div>
      </div>
    </main>
  );
}
