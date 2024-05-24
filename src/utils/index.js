const getInitialData = () => [
  {
    "id": 1,
    "title": "Babel",
    "body": "Babel is an open-source tool used to transform ECMAScript 2015+ syntax into syntax supported by older JavaScript engines. It's often used when using the latest syntax, including JSX.",
    "createdAt": "2024-05-14T04:27:34.572Z",
    "archived": false
  },
  {
    "id": 2,
    "title": "Functional Component",
    "body": "Functional components are React components created using JavaScript functions. To be called a component, a JavaScript function must return a React element and be invoked like a React component.",
    "createdAt": "2024-05-15T05:30:34.572Z",
    "archived": false
  },
  {
    "id": 3,
    "title": "Modularization",
    "body": "In the context of JavaScript programming, modularization is a technique used to break down or use code in separate JavaScript files based on their respective responsibilities.",
    "createdAt": "2024-05-17T06:00:34.572Z",
    "archived": false
  },
  {
    "id": 4,
    "title": "Lifecycle",
    "body": "In the context of React components, lifecycle refers to a collection of methods that represent the component's lifecycle starting from creation (constructor), rendering (render), post-render (componentDidMount), and so on.",
    "createdAt": "2024-05-17T04:27:34.572Z",
    "archived": false
  },
  {
    "id": 5,
    "title": "ESM",
    "body": "ESM (ECMAScript Module) is a standard JavaScript modularization format.",
    "createdAt": "2024-05-18T04:27:34.572Z",
    "archived": false
  },
  {
    "id": 6,
    "title": "Module Bundler",
    "body": "In the context of JavaScript programming, a module bundler is a tool used to combine all JavaScript modules used by the application into one file.",
    "createdAt": "2024-05-19T04:27:34.572Z",
    "archived": false
  }
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export { getInitialData, showFormattedDate };

