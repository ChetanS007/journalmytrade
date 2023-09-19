let nextID = localStorage.getItem("nextID") || 0;

const newID = () => {
  localStorage.setItem("nextID", nextID + 1);
  return nextID++;
};

export default newID;
