import React from "react";

const ShowNotes = (props) => {
    return (
        <div className="aspect-square rounded-md bg-gray-100 p-4 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col min-h-[210px]">
            <h1 className="text-lg font-semibold mb-5">{props.title}</h1>
            <p className="text-sm text-gray-700">{props.textContent}</p>
        </div>
    )
}

export default ShowNotes;