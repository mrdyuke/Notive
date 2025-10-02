import { Toolbox } from "./components/Toolbox";

export const App = () => {
  return (
    <>
      <section className="left-panel-section">
        <Toolbox />
      </section>
      <section className="workspace-section"></section>
    </>
  );
};
