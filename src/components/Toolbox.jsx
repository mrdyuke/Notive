import { SquarePen, FolderPlus, Search, ArrowUpNarrowWide } from "lucide-react";

export const Toolbox = () => {
  return (
    <section className="left-panel-section__toolbox">
      <button className="left-panel-section__item" id="addFileBtn">
        <SquarePen />
      </button>
      <button className="left-panel-section__item" id="addFolderBtn">
        <FolderPlus />
      </button>
      <button className="left-panel-section__item" id="searchBtn">
        <Search />
      </button>
      <button className="left-panel-section__item" id="sortBtn">
        <ArrowUpNarrowWide />
      </button>
    </section>
  );
};
