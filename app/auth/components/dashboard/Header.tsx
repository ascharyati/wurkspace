import { ActionCard } from "app/auth/components/dashboard/ActionCard"
import { useState } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import GoalsCard from "app/auth/components/dashboard/GoalsCard"
import { TiMessages } from "react-icons/ti"

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const showSidebar = () => setSidebarOpen(!sidebarOpen)
  return (
    <>
      <div className="flex mt-4">
        <div className=" flex text-blue-700 left-0">
          <TiMessages className="mx-4" style={{ width: "25px", height: "28px" }} />
          <h1 className="font-bold">1:1 with John Doe</h1>
        </div>
        <button onClick={() => showSidebar()}>
          {!sidebarOpen ? (
            <span>
              <IoIosArrowBack
                className="absolute top-0 right-0"
                style={{ height: "25px", width: "35px" }}
              />
            </span>
          ) : (
            <nav
              className={
                sidebarOpen
                  ? "right-0 fixed top-0"
                  : "transition duration-500  transform translate-x-100 "
              }
            >
              <ul className="justify-center" onClick={() => showSidebar()}>
                <li>
                  <div
                    className=" w-64
                    h-screen bg-gray-50 rounded-lg"
                  >
                    <button
                      onClick={() => {
                        showSidebar()
                      }}
                      className="flex left-0 relative"
                    >
                      {
                        <IoIosArrowForward
                          style={{ height: "25px", width: "30px" }}
                          className="m-4"
                        />
                      }
                    </button>
                    <li> fdcvb wdw skhfa aghea ehgf </li>
                    <li> fdcvb wdw skhfa aghea ehgf </li>
                    <li> fdcvb wdw skhfa aghea ehgf </li>
                    <li> fdcvb wdw skhfa aghea ehgf </li>

                    <li> fdcvb wdw skhfa aghea ehgf </li>
                    <li> fdcvb wdw skhfa aghea ehgf </li>
                    <li> fdcvb wdw skhfa aghea ehgf </li>
                  </div>
                </li>
              </ul>
            </nav>
          )}
        </button>
      </div>
    </>
  )
}

export default Header
