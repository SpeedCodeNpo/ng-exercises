export interface UserInterface {
  results: [
    {
      email: string;
      gender: string;
      name: {
        title: string;
        first: string;
        last: string;
      };
    }
  ];
}
