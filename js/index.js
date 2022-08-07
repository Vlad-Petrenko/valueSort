import refs from "./refs.js";
import {
  toggleModal,
  addTextTooList,
  deleteFullList,
  onSortListForValue,
  onSortListForName,
  onShowXml,
} from "./function.js";

let pairListArray = [];

refs.addPairText.addEventListener("click", () => {
  addTextTooList(pairListArray);
});

refs.deleteList.addEventListener("click", () => {
  deleteFullList(pairListArray);
});
refs.sortByName.addEventListener("click", () => {
  onSortListForName(pairListArray);
});

refs.sortByValue.addEventListener("click", () => {
  onSortListForValue(pairListArray);
});

refs.showXML.addEventListener("click", () => {
  onShowXml();
  toggleModal();
});

refs.closeModalBtn.addEventListener("click", toggleModal);
