import { create } from "zustand";

type Snippet = {
  name: string;
  content: string | null;
};

type SnippetState = {
  snippetsNames: string[];
  selectedSnippet: Snippet | null;
  addSnippetName: (name: string) => void;
  setSnippetsNames: (names: string[]) => void;
  setSelectedSnippet: (snippet: Snippet | null) => void;
};

const useSnippetStore = create<SnippetState>((set) => ({
  snippetsNames: [],
  selectedSnippet: null,
  addSnippetName: (name) =>
    set((state) => ({
      snippetsNames: [...state.snippetsNames, name],
    })),
  setSnippetsNames: (names) =>
    set({
      snippetsNames: names,
    }),
  setSelectedSnippet: (snippet) =>
    set({
      selectedSnippet: {
        name: snippet ? snippet.name : "",
        content: snippet ? snippet.content : "",
      },
    }),
}));

export default useSnippetStore;
