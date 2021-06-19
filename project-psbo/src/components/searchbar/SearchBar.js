import { InputBase } from "@material-ui/core";
import React from "react";
import theme from "styles/theme";

const SearchBar = ({ input:keyword, onChange:setKeyword }) => {

  return (
    <InputBase
      key="search"
      value={keyword}
      placeholder={"Cari Ruangan Disini..."}
      onChange={(e) => setKeyword(e.target.value)}
      style={{width: "100%", padding: theme.spacing(1)}}
    />
  );
};

export default SearchBar;
