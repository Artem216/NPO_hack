import TopBar from "@/components/widgets/TopBar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="w-full">
      <TopBar />
      {/* <LeftSideBar /> */}

      <section className="min-h-[calc(100vh-88px)] mx-auto overflow-hidden">
        <Outlet />
      </section>

      {/* <BottomBar /> */}
    </div>
  )
}

export default RootLayout