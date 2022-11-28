import { CoreMenu } from "@core/types";

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: "dashboard",
    title: "Dashboard",
    translate: "MENU.DASHBOARD.ANALYTICS",
    type: "item",
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: "activity",
    badge: {
      title: "2",
      translate: "MENU.DASHBOARD.BADGE",
      classes: "badge-light-warning badge-pill",
    },
    url: "dashboard",
  },
  // Apps & Pages
  {
    id: "apps",
    type: "section",
    title: "Apps & Pages",
    translate: "MENU.APPS.SECTION",
    icon: "package",
    children: [
      {
        id: "users",
        title: "User",
        translate: "MENU.APPS.USER.COLLAPSIBLE",
        type: "collapsible",
        icon: "user",
        children: [
          {
            id: "list",
            title: "List",
            translate: "MENU.APPS.USER.LIST",
            type: "item",
            icon: "circle",
            url: "apps/user/user-list",
          },
          {
            id: "view",
            title: "View",
            translate: "MENU.APPS.USER.VIEW",
            type: "item",
            icon: "circle",
            url: "apps/user/user-view",
          },
          {
            id: "edit",
            title: "Edit",
            translate: "MENU.APPS.USER.EDIT",
            type: "item",
            icon: "circle",
            url: "apps/user/user-edit",
          },
        ],
      },
      {
        id: "estates",
        title: "Estates",
        translate: "MENU.APPS.ESTATES",
        type: "item",
        icon: "home",
        url: "apps/email",
      },
      {
        id: "publicity",
        title: "Publicity",
        translate: "MENU.APPS.PUBLICITY",
        type: "item",
        icon: "check-square",
        url: "apps/email",
      },
      {
        id: "memberships",
        title: "Memberships",
        translate: "MENU.APPS.MEMBERSHIPS",
        type: "item",
        icon: "credit-card",
        url: "apps/email",
      },
    ],
  },
  {
    id: "contact",
    type: "section",
    title: "Contact",
    translate: "MENU.CONTACT.SECTION",
    icon: "phone",
    children: [
      {
        id: "support",
        title: "Support",
        translate: "MENU.CONTACT.SUPPORT",
        type: "item",
        icon: "message-circle",
        url: "apps/email",
      },
      {
        id: "message-auditor",
        title: "Message Auditor",
        translate: "MENU.CONTACT.MESSAGEAUDITOR",
        type: "item",
        icon: "message-square",
        url: "apps/email",
      },
    ],
  },
];
