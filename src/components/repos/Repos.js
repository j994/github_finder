import React, { useContext } from "react";
import RepoItem from "./RepoItem";

import { GlobalContext } from "../../context/GlobalState";

const Repos = () => {
  const { repos } = useContext(GlobalContext);
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
