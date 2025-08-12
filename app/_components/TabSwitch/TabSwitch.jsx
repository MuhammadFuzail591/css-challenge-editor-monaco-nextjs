import React from "react";

function TabSwitch({ activeTab, setActiveTab, className }) {
   const tabs = [
      { id: "blog", label: "Blog" },
      { id: "editor", label: "Editor" },
      { id: "target", label: "Preview & Target" },
   ];

   return (
      <div
         className={`flex items-center justify-around border-b lg:hidden bg-card border-border shadow-sm ${className}`}
      >
         {tabs.map((tab) => (
            <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               disabled={activeTab === tab.id}
               className={`relative px-6 py-2 w-full text-sm opacity-30 transition-opacity duration-500
            ${activeTab === tab.id
                     ? "text-text font-bold opacity-100"
                     : "text-text/70 hover:text-text hover:bg-card/80"
                  }
          `}
            >
               {tab.label}

               {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-t transition-all duration-500 "></span>
               )}
            </button>
         ))}
      </div>
   );
}

export default TabSwitch;