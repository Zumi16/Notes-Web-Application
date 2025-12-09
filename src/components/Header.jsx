import React from "react";

const Header = () => {
    return (
    <>
        <header className="flex p-5 px-15 border-b-3 justify-between h-17 items-center bg-[#FFFF85]">
            <h1 className="text-[25px] font-medium">Notes Web Application</h1>
            <div className="flex font-medium gap-4">
                <button id="addNotesBtn" className="max-h-11 border-2 bg-white rounded-lg p-2 cursor-pointer" 
                >✚ Add Note
                </button>
                <button className="material-symbols-outlined bg-white rounded-lg p-2 cursor-pointer border-2"
                id="themeToggleBtn"
                >Light
                </button>
            </div>
        </header>
    </>
    );
}
export default Header;
