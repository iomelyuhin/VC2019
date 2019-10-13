import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/slider-parts";
import "./scripts/slider-reviews";
import "./scripts/formPopup";
import "./scripts/formPopupCond";
import "./scripts/formPopupPhone";
import "./scripts/questionForm";
import "./scripts/freeForm";
import "./scripts/btns";
import "./scripts/anchorlink";
import "./scripts/navigation";