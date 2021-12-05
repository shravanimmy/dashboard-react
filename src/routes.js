import Dashboard from "views/Dashboard/Dashboard.js";
import ReactTables from "views/Tables/ReactTables.js";
import UserProfile from "views/Pages/UserProfile.js";
import Timelines from "views/Pages/Timeline.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Produits",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/product-page",
        name: "Liste des produits",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "LP",
        rtlMini: "شع",
        component: UserProfile,
        layout: "/admin",
      },
      {
        path: "/product-page",
        name: "Liste des marques",
        rtlName: "صفحة الخطأ",
        mini: "LM",
        rtlMini: "البريد",
        component: Timelines,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Ventes",
    rtlName: "المكونات",
    icon: Apps,
    state: "componentsCollapse",
    views: [
      {
        path: "/aventes",
        name: "Clients",
        rtlName: "وصفت",
        mini: "CL",
        rtlMini: "ب",
        component: Wizard,
        layout: "/admin",
      },
      {
        path: "/aventes",
        name: "Commandes",
        rtlName: "نظام الشبكة",
        mini: "CM",
        rtlMini: "زو",
        component: Wizard,
        layout: "/admin",
      },
      {
        path: "/aventes",
        name: "Factures",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: Wizard,
        layout: "/admin",
      },
      {
        path: "/aventes",
        name: "Avoirs",
        rtlName: "الحلو تنبيه",
        mini: "SA",
        rtlMini: "ومن",
        component: Wizard,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Achats",
    rtlName: "إستمارات",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/react-tables",
        name: "Liste des fournisseurs",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "Commandes",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        component: ReactTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "Approvisionnement",
        rtlName: "نماذج التحقق من الصحة",
        mini: "VF",
        rtlMini: "تو",
        component: ReactTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "Inventaire",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: ReactTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "Paiements fournisseurs",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: ReactTables,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Comptabilité",
    rtlName: "إستمارات",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/time",
        name: "Liste des fournisseurs",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        layout: "/admin",
        component: Timelines,
      },
      {
        path: "/time2",
        name: "Commandes",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        layout: "/admin",
        component: Timelines,
      },
    ],
  },
];
export default dashRoutes;
