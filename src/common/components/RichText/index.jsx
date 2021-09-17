import axios from "axios";
import { convertToRaw, EditorState } from "draft-js";
import React, { useState } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";

const RichText = ({ onChangeValue }) => {
  const [state, setstate] = useState({
    editorState: EditorState.createEmpty(),
  });
  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        "https://api.imgbb.com/1/upload?key=d896df32002ac664b0d89df95bcb46f4"
      );
      // xhr.setRequestHeader('Authorization', 'Client-ID da12d301a4c1ed6475e4b037ab56582f7c24be6f');
      const data = new FormData();
      data.append("image", file);

      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);

        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);

        reject(error);
      });
    });
  };
  const onEditorStateChange = (editorState) => {
    setstate({
      editorState,
    });
    const convertedData = draftToHtml(
      convertToRaw(state.editorState.getCurrentContent())
    );
    onChangeValue(convertedData);
  };
  return (
    <div>
      <div className="editor">
        <Editor
          editorState={state.editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RichText;
