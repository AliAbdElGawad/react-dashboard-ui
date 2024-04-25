import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  InboxArrowDownIcon,
  LinkIcon,
} from "@heroicons/react/16/solid";

const Sidebar = () => {
  return (
    <div className="flex-none h-screen bg-slate-800 w-14 sm:w-20">
      <div className="flex items-center h-20">
        <HomeIcon width={40} className="fixed text-gray-300 left-3 sm:left-6" />
      </div>
      <div className="fixed left-3 sm:left-6 top-[100px]">
        <ChartBarIcon
          width={40}
          className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
        />
        <DocumentMagnifyingGlassIcon
          width={40}
          className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
        />
        <InboxArrowDownIcon
          width={40}
          className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
        />
        <CreditCardIcon
          width={40}
          className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
        />
        <BellIcon
          width={40}
          className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
          />
        </a>
        <LinkIcon
          width={40}
          className="p-2 mb-4 text-gray-300 bg-gray-600 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Sidebar;
