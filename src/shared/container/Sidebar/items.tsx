import React from "react";
import {
  IconUsers,
  IconChartLine,
  IconTheater,
  IconFile,
  IconBell,
  IconLogout,
  IconSettings,
  IconHeadset,
  IconUserPlus,
} from "@tabler/icons-react";
export interface ItemsShape {
  icon: React.ReactElement;
  label: string;
  href: string;
}

export const topItems: ItemsShape[] = [
  { icon: <IconUsers className="mr-3" />, label: "Clients", href: "/clients" },
  {
    icon: <IconChartLine className="mr-3" />,
    label: "AI Analysis",
    href: "/ai-analysis",
  },
  {
    icon: <IconTheater className="mr-3" />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <IconFile className="mr-3" />,
    label: "Insurance Portfolio",
    href: "/insurance-portfolio",
  },
];

export const bottomItems: ItemsShape[] = [
  {
    icon: <IconBell className="mr-3" />,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: <IconUserPlus className="mr-3" />,
    label: "Invite a Friend",
    href: "/invite-friend",
  },
  {
    icon: <IconHeadset className="mr-3" />,
    label: "Support",
    href: "/support",
  },
  {
    icon: <IconSettings className="mr-3" />,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: (
      <span className="mr-3 bg-green-500 h-6 w-6 rounded-full flex items-center justify-center text-xs">
        DL
      </span>
    ),
    label: "David Lovejoy",
    href: "/user",
  },
  {
    icon: <IconLogout className="mr-3" />,
    label: "Log Out",
    href: "/logout",
  },
];
