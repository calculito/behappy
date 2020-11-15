import NOTES from "./Notes";
export default (note) => {
  return NOTES.includes(note) && note.includes("#");
};
