'use client';
export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-300 dark:border-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.name
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 dark:text-gray-300 hover:text-blue-500'
            }`}
            aria-selected={activeTab === tab.name}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
}