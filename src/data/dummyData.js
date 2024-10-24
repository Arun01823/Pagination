const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    description: `Description of Item ${index + 1}`,
  }));
  
  export default dummyData;
  