import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import useSnippetStore from "../stores/snippetsStore";
import { writeTextFile, BaseDirectory } from "@tauri-apps/plugin-fs";
import { FaPencil } from "react-icons/fa6";

const SnippetEditor = () => {
  const { selectedSnippet } = useSnippetStore((state) => state);
  const [text, setText] = useState<string | undefined>("");

  useEffect(() => {
    if (!selectedSnippet) return;

    const saveText = setTimeout(async () => {
      console.log("saving...");
      const directory = BaseDirectory.Desktop;
      await writeTextFile(`taurifiles/${selectedSnippet.name}`, `${text}`, {
        baseDir: directory,
      });
    }, 1000);

    return () => {
      clearTimeout(saveText);
    };
  }, [text]);

  return (
    <div className="[grid-area:main] flex items-center justify-center">
      {selectedSnippet ? (
        <Editor
          theme="vs-dark"
          defaultLanguage="javascript"
          options={{
            fontSize: 20,
          }}
          onChange={(value) => setText(value)}
          value={selectedSnippet.content ?? ""}
        />
      ) : (
        <FaPencil className="text-9xl text-neutral-900" />
      )}
    </div>
  );
};

export default SnippetEditor;
