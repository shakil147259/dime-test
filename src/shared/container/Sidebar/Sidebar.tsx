import { bottomItems, ItemsShape, topItems } from "./items";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const LinkItem = ({ item }: { item: ItemsShape }) => (
    <NavLink
      to={item.href}
      className={({ isActive }) => {
        return `rounded flex items-center px-4 py-2 text-gray-300 ${
          isActive ? "bg-slate-800" : "hover:bg-slate-700 hover:text-white"
        } `;
      }}
    >
      {item.icon} {item.label}
    </NavLink>
  );

  return (
    <div className="bg-customDark text-gray-100 w-60 min-h-screen flex flex-col justify-between">
      <div>
        <div className="px-6 py-4 text-center">
          <h1 className="text-2xl scale-x-110 tracking-tighter">
            <span className="text-customGreen">INSUR</span>
            <span className="text-white">GENT</span>
          </h1>
        </div>
        <nav className="mt-10">
          <ul>
            {topItems.map((item, i) => {
              return (
                <li className="mb-2 mx-3" key={`top-li-${i}`}>
                  <LinkItem item={item} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mb-10">
        <nav>
          <ul>
            {bottomItems.map((item, i) => {
              return (
                <li className="mb-3 mx-3" key={`bottom-li-${i}`}>
                  <LinkItem item={item} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
