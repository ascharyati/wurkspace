import { ActionCard } from "app/auth/components/dashboard/ActionCard"
import { useState } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const showSidebar = () => setSidebarOpen(!sidebarOpen)
  return (
    <>
      <div className="flex  justify-between">
        <h1 className="m-4 text-purple-500">Good Morning Emma</h1>
        <button onClick={() => showSidebar()} className="m-4 pt-1">
          {!sidebarOpen ? (
            <span>
              <IoIosArrowBack style={{ height: "25px", width: "30px" }} />
            </span>
          ) : (
            <nav
              className={
                sidebarOpen
                  ? "right-0"
                  : "top-0 absolute transition duration-500  transform translate-x-100 "
              }
            >
              <ul className="justify-center" onClick={() => showSidebar()}>
                <li className="">
                  <div
                    className=" w-64
                   h-auto bg-gray-50 rounded-lg"
                  >
                    <button
                      onClick={() => {
                        showSidebar()
                      }}
                      className="flex justify-start"
                    >
                      {
                        <IoIosArrowForward
                          style={{ height: "25px", width: "30px" }}
                          className="m-4"
                        />
                      }
                    </button>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
                    <li>ajsdd ansjd sanks</li>
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
