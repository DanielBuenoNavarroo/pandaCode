import "./index.css";

import { SnippetEditor, SnippetForm, SnippetList } from "./components";
import TopBar from "./components/TopBar";

const App = () => {
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // })
  return (
    <div
      className="w-screen h-screen text-white"
      style={{
        display: "grid",
        gridTemplateAreas: "'aside header' 'aside main'",
        gridTemplateColumns: '12rem 1fr',
        gridTemplateRows: '2rem 1fr'
      }}
    >
      <div className="bg-zinc-950 [grid-area:aside]">
        <SnippetForm />
        <SnippetList />
      </div>
      <TopBar />
      <SnippetEditor />
    </div>
  );
};

export default App;
