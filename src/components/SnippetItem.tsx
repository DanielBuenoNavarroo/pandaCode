import useSnippetStore from "../stores/snippetsStore";
import { BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";

type Props = {
  snippetName: string;
};

const SnippetItem = ({ snippetName }: Props) => {
  const { selectedSnippet, setSelectedSnippet } = useSnippetStore(
    (store) => store
  );
  return (
    <div
      className={`py-2 px-4 cursor-pointer text-neutral-300 ${
        selectedSnippet?.name === snippetName
          ? "bg-zinc-800"
          : "bg-zinc-900 hover:bg-neutral-800 "
      }`}
      onClick={async () => {
        const directory = BaseDirectory.Desktop;
        const content = await readTextFile(`taurifiles/${snippetName}`, {
          baseDir: directory,
        });
        console.log("content: ", content);
        setSelectedSnippet({ name: snippetName, content: content });
      }}
    >
      {snippetName}
    </div>
  );
};

export default SnippetItem;
