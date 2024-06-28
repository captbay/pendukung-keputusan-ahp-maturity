"use client";

import { DashboardIcon } from "@/app/icon/DashboardIcon";
import { HierarchyIcon } from "@/app/icon/HierarchyIcon";
import { LogoutIcon } from "@/app/icon/LogoutIcon";
import { MaturityIcon } from "@/app/icon/MaturityIcon";
import { Button, Divider, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmationModal from "../confirmation-modal/confirmationModal";
import Cookie from "js-cookie";
import { logout } from "@/lib/authentication";

interface SidebarProps {
  isAdmin: boolean;
  session: any;
}

const Sidebar: React.FC<SidebarProps> = ({ isAdmin, session }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const user = Cookie.get("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleButtonClick = (item: string) => {
    router.push(`/${item}`);
  };

  const handleLogoutClicked = () => {
    logout();
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div
        style={{
          transform: `translateX(${isOpen ? 0 : "-250px"})`,
          transition: "transform 0.3s ease",
          zIndex: 100,
          position: "fixed",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "100vh",
            backgroundColor: "primary",
            padding: "8px",
            position: "fixed",
            top: 0,
            display: "flex",
            flexDirection: "column",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
            transition: "left 0.3s ease",
          }}
          className="bg-primary"
        >
          <div className="flex flex-row gap-4 items-center p-4">
            <Image
              src="https://i.pravatar.cc/201"
              alt="Photo Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-lg text-secondary font-bold">{session?.user.name}</p>
              <p className="text-sm text-secondary">{session?.user.jabatan}</p>
            </div>
          </div>
          <div className="">
            <Spacer y={2} />
            <Divider />
            <Spacer y={2} />
            <Button
              onClick={() =>
                handleButtonClick(isAdmin ? "dashboard-admin" : "dashboard")
              }
              className={`text-secondary w-full justify-start bg-primary hover:bg-red-700 hover:text-white ${
                isAdmin
                  ? isActive("/dashboard-admin")
                    ? "bg-red-700 text-white"
                    : ""
                  : isActive("/dashboard")
                  ? "bg-red-700 text-white"
                  : ""
              }`}
              shadow-md
            >
              <DashboardIcon />
              <h2 className="text-secondary">
                {isAdmin ? "Dashboard Admin" : "Dashboard"}
              </h2>
            </Button>

            {isAdmin ? (
              <>
                <Button
                  onClick={() => handleButtonClick("ahp-recap")}
                  className={`text-secondary w-full justify-start bg-primary hover:bg-red-700 hover:text-white ${
                    isActive("/ahp-recap") ? "bg-red-700 text-white" : ""
                  }`}
                  shadow-md
                >
                  <HierarchyIcon />
                  <h2 className="text-secondary">AHP Recap</h2>
                </Button>
                <Button
                  onClick={() => handleButtonClick("result-recap")}
                  className={`text-secondary w-full justify-start bg-primary hover:bg-red-700 hover:text-white ${
                    isActive("/result-recap") ? "bg-red-700 text-white" : ""
                  }`}
                  shadow-md
                >
                  <HierarchyIcon />
                  <h2 className="text-secondary">Maturity Recap</h2>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => handleButtonClick("ahp")}
                  className={`text-secondary w-full justify-start bg-primary hover:bg-red-700 hover:text-white ${
                    isActive("/ahp") ? "bg-red-700 text-white" : ""
                  }`}
                  shadow-md
                >
                  <HierarchyIcon />
                  <h2 className="text-secondary">AHP</h2>
                </Button>

                <Button
                  onClick={() => handleButtonClick("maturity")}
                  className={`text-secondary w-full justify-start bg-primary hover:bg-red-700 hover:text-white ${
                    isActive("/maturity") ? "bg-red-700 text-white" : ""
                  }`}
                  shadow-md
                >
                  <MaturityIcon />
                  <h2 className="text-secondary">Maturity</h2>
                </Button>
              </>
            )}
            <Spacer y={2} />
            <Divider />
            <Button
              onClick={() => setIsConfirmationModalOpen(true)}
              className="text-secondary w-full justify-start bg-primary hover:bg-red-700 hover:text-white"
              shadow-md
            >
              <LogoutIcon />
              <h2 className="text-secondary">Logout</h2>
            </Button>
          </div>
          <ConfirmationModal
            isOpen={isConfirmationModalOpen}
            onClose={() => setIsConfirmationModalOpen(false)}
            onConfirm={() => handleLogoutClicked()}
            title="Logout"
            message="Are you sure you want to logout?"
          />
        </div>
        <div className="flex ml-[230px] z-0">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary text-secondary text-right mt-4"
          >
            <p className="text-right ml-4 text-secondary">{isOpen ? "✖" : "☰"}</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
