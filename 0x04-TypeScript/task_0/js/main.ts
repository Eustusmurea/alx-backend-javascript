interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stu1: Student = {
  firstName: 'Eustus',
  lastName: 'Mwirigi',
  age: 26,
  location: 'Kenya',
};

const stu2: Student = {
  firstName: 'Emily',
  lastName: 'Kanana',
  age: 23,
  location: 'Kenya'
};

const StudentsList: Student[] = [stu1, stu2];
