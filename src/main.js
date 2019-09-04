import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/slider-parts";
import "./scripts/slider-reviews";
import "./scripts/form";
import "./scripts/formPopup";
import "./scripts/questionForm";
import "./scripts/btns";
import "./scripts/anchorlink";