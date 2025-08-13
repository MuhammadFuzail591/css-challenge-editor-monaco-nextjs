import React from "react";

function TabSwitch({ activeTab, setActiveTab, className }) {
   const tabs = [
      { id: "blog", label: "Blog" },
      { id: "editor", label: "Editor" },
      { id: "target", label: "Preview & Target" },
   ];

   const containerRef = React.useRef()
   const [underlineStyle, setUnderlineStyle] = React.useState({ left: 0, width: 0 })

   React.useEffect(() => {


      console.log(containerRef)
      if (containerRef.current) {

         const currentButton = containerRef.current.querySelector(
            `button[data-id="${activeTab}"]`
         )
         if (currentButton) {
            setUnderlineStyle(
               {
                  left: currentButton.offsetLeft,
                  width: currentButton.offsetWidth
               }
            )
         }
      }


   }, [activeTab])


   return (
      <div
         ref={containerRef}
         className={`flex relative items-center justify-around border-b lg:hidden bg-card border-border shadow-sm ${className}`}
      >
         {tabs.map((tab) => (
            <button
               key={tab.id}
               data-id={tab.id}
               onClick={() => setActiveTab(tab.id)}
               disabled={activeTab === tab.id}
               className={`relative px-6 py-2 w-full text-sm font-medium transition-all duration-500 ease-in-out
            ${activeTab === tab.id
                     ? "text-text scale-105"
                     : "text-text/70 hover:text-text hover:bg-card/80"
                  }
          `}
            >
               {tab.label}
            </button>
         ))}

         <span
            style={{
               left: underlineStyle.left,
               width: underlineStyle.width
            }}
            className="absolute bottom-0 h-[2px] scale-75 bg-blue-500 ease-in-out rounded-t transition-all duration-200">

         </span>




      </div>
   );
}

export default TabSwitch;