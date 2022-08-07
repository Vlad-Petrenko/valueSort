import refs from "./refs.js";

export function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

export function addTextTooList(list) {
  const inputValue = refs.inputPairText.value;

  if (!validateInput(inputValue)) {
    alert('Please write pair like this "Name=Value"');
    return;
  }

  const changesForSort = {
    name: inputValue.split("=")[0].trim(),
    value: inputValue.split("=")[1].trim(),
  };

  list.push(changesForSort);

  createMarkup(list);
}

export function createMarkup(list) {
  const markup = list
    .map(({ name, value }) => `<li><p>${name}=${value}</p></li>`)
    .join("");

  refs.pairList.innerHTML = markup;
}

export function onSortListForName(list) {
  list.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  createMarkup(list);
}

export function onSortListForValue(list) {
  list.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));
  createMarkup(list);
}

export function deleteFullList() {
  refs.pairList.innerHTML = "";
}

export function onShowXml() {
  const xml = refs.pairList.innerHTML;
  refs.modalXML.innerText = xml;
}

const validateInput = (data) => data.match(/^\w+\s*=\s*\w+$/i) !== null;
