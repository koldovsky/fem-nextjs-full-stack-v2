import clsx from "clsx";

const Sidebar = () => {
  return (
    <aside className={clsx("w-64 h-full", "bg-white dark:bg-gray-800")}>
      <h1 className="text-2xl font-bold">Sidebar</h1>
    </aside>
  );
};

export default Sidebar;
