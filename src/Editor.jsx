import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "bulma/css/bulma.min.css";

export default function Edittor() {
  const editorRef = useRef(null);

  return (
    <div className="container is-flex is-justify-content-center is-align-items-center">
      <div className="box">
        <Editor
          apiKey="poybbk4udfgq3b95i7w3gq8222uqjh66wooovresv5s43bde"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Type here ...</p>"
          init={{
            height: 500,
            width: 800,
            menubar: false,
            min_height: 300,
            max_height: 800,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <div className="buttons mt-4">
          <button className="button is-primary">Save Note</button>
        </div>
      </div>
    </div>
  );
}
