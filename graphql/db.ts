export const people = [
  {
    id: 1,
    name: "A",
    age: 100,
    gender: "M",
  },
  {
    id: 2,
    name: "B",
    age: 3,
    gender: "M",
  },
  {
    id: 3,
    name: "C",
    age: 1,
    gender: "M",
  },
];

export const getById = (id: number) => {
  return people.filter((person) => id === person.id);
};
