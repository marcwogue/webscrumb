import { Calendar, CreditCard, FileText, LogOut, Menu, Settings, Users } from "lucide-react";
import { useSide } from "../context/side";
import { Link } from "react-router-dom";
import type { JSX } from "react";

interface NavItem {
  label: string;
  icon: JSX.Element,
  path: string;
}

const navItems: NavItem[] = [
  { label: "Étudiants", icon: <Users size={20} />, path: "/etudiants" },
  { label: "Enseignants", icon: <Users size={20} />, path: "/enseignants" },
  { label: "Emplois du temps", icon: <Calendar size={20} />, path: "/emplois" },
  { label: "Notes & Bulletins", icon: <FileText size={20} />, path: "/notes" },
  { label: "Paiements", icon: <CreditCard size={20} />, path: "/paiements" },
  { label: "Paramètres", icon: <Settings size={20} />, path: "/parametres" },
];

const SideBar = () => {
  const { setSidebarOpen, sidebarOpen } = useSide();

  return (
    <div
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
      className={`bg-gradient-to-b from-indigo-600 to-purple-600 text-white transition-all duration-300 
      ${sidebarOpen ? "w-56" : "w-16"} flex flex-col`}
    >
      <div className="flex items-center justify-center h-16 font-bold text-lg">
        {sidebarOpen ? (
          <img src="camp.png" alt="campus map" className="bg-white w-full h-16 mt-0 object-cover" />
        ) : (
          <Menu />
        )}
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path} className="hover:bg-indigo-500 rounded p-2">
              <Link to={item.path} className="flex items-center space-x-2">
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-indigo-400 cursor-pointer flex items-center space-x-2 hover:bg-indigo-500">
        <LogOut size={20} />
        {sidebarOpen && <span>Déconnexion</span>}
      </div>
    </div>
  );
};

export default SideBar;
