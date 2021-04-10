import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { FlexContainer } from "../../components";

export const Arrows = ({
  goToPreviousPage,
  goToNextPage,
  pages,
  currentPage,
}) => {
  return (
    <FlexContainer margin='20px' space='space-between'>
      <ArrowBackIcon
        className={`arrow arrow-left ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => goToPreviousPage()}
      />

      <ArrowForwardIcon
        className={`arrow arrow-right ${
          currentPage === pages ? "disabled" : ""
        }`}
        onClick={() => goToNextPage()}
      />
    </FlexContainer>
  );
};