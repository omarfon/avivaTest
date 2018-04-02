export const mocks = {
    Query: () => ({
      Centers: ["Hello World! (with Apollo)"],
      hello: (root, { name }) => `Hello ${name}!`
    })
  };
  