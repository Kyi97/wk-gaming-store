import {
  LayoutDashboard,
  Barcode,
  Mails,
  Settings,
  LogOut,
} from "lucide-vue-next";
import type { Component } from "vue";

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
export const iconMap: Record<string, Component> = {
  LayoutDashboard,
  Barcode,
  Mails,
  Settings,
  LogOut,
};

export const navigationItems: NavItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    label: "Products",
    path: "/products",
    icon: "Barcode",
  },
  {
    label: "Renting List",
    path: "/rent-listing",
    icon: "Mails",
  },
  {
    label: "Customers",
    path: "/customers",
    icon: "LayoutDashboard",
  },
  {
    label: "Setting",
    path: "/setting",
    icon: "Settings",
  },
  {
    label: "Sing Out",
    path: "/sign-out",
    icon: "LogOut",
  },
];
