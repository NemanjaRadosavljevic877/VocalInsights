import MainBar from "@/components/MainBar";
import SideBar from "@/components/SideBar";
import TopNavigation from "@/components/TopNavigation";

export default function Home() {
  return (
    <div>
      <header className="">
        <TopNavigation />
      </header>
      <main className="flex h-[calc(100vh-56px)]">
        <div className="w-[25%] xl:w-[18%] hidden lg:block">
          <SideBar />
        </div>

        <div className="flex-1 bg-[#F9FAFB]">
          <MainBar />
        </div>
      </main>
    </div>
  );
}
