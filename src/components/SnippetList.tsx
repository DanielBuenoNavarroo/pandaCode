import { BaseDirectory, readDir } from "@tauri-apps/plugin-fs";
import { useEffect } from "react";
import useSnippetStore from "../stores/snippetsStore";
import SnippetItem from "./SnippetItem";

const SnippetList = () => {
  const { snippetsNames, setSnippetsNames } = useSnippetStore((state) => state);

  useEffect(() => {
    const loadFiles = async () => {
      const directory = BaseDirectory.Desktop;
      const result = await readDir(`taurifiles`, {
        baseDir: directory,
      });
      const filenames = result.map((file) => file.name);
      setSnippetsNames(filenames);
    };
    loadFiles();
  }, []);

  return (
    <div>
      {snippetsNames.map((snippetName, i) => (
        <SnippetItem snippetName={snippetName} key={i} />
      ))}
    </div>
  );
};

export default SnippetList;
