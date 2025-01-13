
export type TPerson = {
  gender: "male" | "female";

  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  age?: number;
  id: string;
  picture?: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat?: string;
};

export const people: TPerson[] = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Sean",
      last: "Yildiz",
    },
    email: "sean.yildiz@example.com",
    age: 19,
    id: "8440162191500317",
    picture: {
      large: "https://randomuser.me/api/portraits/men/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
    },
    nat: "NO",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Rose",
      last: "Soto",
    },
    email: "rose.soto@example.com",
    id: "0115964 350 576307882 829805",
    picture: {
      large: "https://randomuser.me/api/portraits/women/66.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Sonia",
      last: "Vicente",
    },
    email: "sonia.vicente@example.com",
    age: 9,
    id: "963-467-222699-370-589",
    picture: {
      large: "https://randomuser.me/api/portraits/women/24.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Ruslana",
      last: "Malešević",
    },
    email: "ruslana.malesevic@example.com",
    age: 5,
    id: "010-5429-596066-9507-691",
    picture: {
      large: "https://randomuser.me/api/portraits/women/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
    },
    nat: "RS",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Mia",
      last: "Lavoie",
    },
    email: "mia.lavoie@example.com",
    age: 13,
    id: "K25 O35-9926Z21 K60-3962",
    picture: {
      large: "https://randomuser.me/api/portraits/women/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Joanikije",
      last: "Spasić",
    },
    email: "joanikije.spasic@example.com",
    age: 6,
    id: "038-0909-105069-4477-473",
    picture: {
      large: "https://randomuser.me/api/portraits/men/66.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
    },
    nat: "RS",
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Hannelore",
      last: "Dufour",
    },
    email: "hannelore.dufour@example.com",
    age: 21,
    id: "076 129 28 35075 713 79 11",
    picture: {
      large: "https://randomuser.me/api/portraits/women/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Thi",
      last: "Durand",
    },
    email: "thi.durand@example.com",
    age: 5,
    id: "075 667 78 40076 946 51 36",
    picture: {
      large: "https://randomuser.me/api/portraits/women/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Julio César",
      last: "Olvera",
    },
    email: "juliocesar.olvera@example.com",
    age: 16,
    id: "(635) 130 1532(600) 932 3225",
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    nat: "MX",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Raymund",
      last: "Timmermann",
    },
    email: "raymund.timmermann@example.com",
    age: 18,
    id: "0257-72798600177-4307617",
    picture: {
      large: "https://randomuser.me/api/portraits/men/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
    },
    nat: "DE",
  },
];
