// user interface

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  jabatan: string | null;
};

export type valueFromAhp = {
  section_one: number[];
  section_two: number[];
  section_three: number[];
  section_four: number[];
  section_five: number[];
};
