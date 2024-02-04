import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

export default function MarkdownEditor({handleProcedureContentChange,value}) {
var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

   handleProcedureContentChange(value) ;

  return (
    <div style={{ display: "flex", justifyContent: "center"}} >
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="write your Product Description ...."
          onChange={handleProcedureContentChange}
          style={{ height: "100%",backgroundColor: "white", width: "100%",overflow: "hidden"}}
        >
        </ReactQuill>
    </div>
  );
}