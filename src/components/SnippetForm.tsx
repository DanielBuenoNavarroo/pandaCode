import { useState } from "react";
import { writeTextFile, BaseDirectory } from "@tauri-apps/plugin-fs";
import useSnippetStore from "../stores/snippetsStore";

const SnippetForm = () => {
  const [snippetName, setSnippetName] = useState("");
  const { addSnippetName } = useSnippetStore((state) => state);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const directory = BaseDirectory.Desktop;
        await writeTextFile(`taurifiles/${snippetName}.js`, ``, {
          baseDir: directory,
        });
        addSnippetName(snippetName);
        setSnippetName("");
      }}
    >
      <input
        type="text"
        placeholder="Snippet..."
        className="w-full p-4 bg-zinc-900 broder-none outline-none"
        onChange={(e) => setSnippetName(e.target.value)}
        value={snippetName}
      />
      <button className="hidden">Aceptar</button>
    </form>
  );
};

export default SnippetForm;
