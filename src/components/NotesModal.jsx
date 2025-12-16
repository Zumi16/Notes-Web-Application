import React, { useState } from "react";

const NotesModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("")
  const [textContent, setTextContent] = useState("")

  const handleSave = () => {
    if (title.trim() === "" && textContent.trim() === "") return
    onSave({ title, textContent }) // send to App
    setTitle("")
    setTextContent("")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <h1 className="text-xl font-semibold mb-4">Add Note</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-3 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <textarea
          placeholder="Write notes here"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          className="mb-4 h-32 w-full resize-none rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotesModal
