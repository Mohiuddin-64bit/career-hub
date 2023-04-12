import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold mb-24">Blog</h1>
      <div className="flex flex-col gap-4">
        <div className="bg-slate-100 p-5 rounded">
          <h2 className="text-2xl font-bold mb-4">
            1. When should you use context API?
          </h2>
          <p className="text-gray-500">
            Context API is a feature in React that allows you to share data
            between components without having to pass it down through props
            manually. This can be very helpful when you have a lot of components
            that need access to the same data, as it can save you a lot of time
            and effort. You should use Context API when you want to avoid
            passing props down through multiple levels of components, which can
            become cumbersome and hard to manage. It's especially useful when
            you have components that are not directly related to each other but
            still need access to the same data.
          </p>
        </div>
        <div className="bg-slate-100 p-5 rounded">
          <h2 className="text-2xl font-bold mb-4">2.What is a custom hook?</h2>
          <p className="text-gray-500">
            A custom hook is a reusable function in React that lets you extract
            and share logic between different components. It's like a regular
            function, but it's specifically designed to work with React
            components. Custom hooks are a way to encapsulate common
            functionality that you might find yourself repeating across
            different components. By putting that logic into a custom hook, you
            can simplify your code and make it more modular.
          </p>
        </div>
        <div className="bg-slate-100 p-5 rounded">
          <h2 className="text-2xl font-bold mb-4">3. What is useRef?</h2>
          <p className="text-gray-500">
            useRef is a feature in React that allows you to create a reference
            to a specific element or value in your component. This reference can
            be used to access or manipulate that element or value directly. In
            other words, useRef is a way to access DOM elements or store
            variables that persist across renders without having to re-render
            your component.
          </p>
        </div>
        <div className="bg-slate-100 p-5 rounded">
          <h2 className="text-2xl font-bold mb-4">4.What is useMemo?</h2>
          <p className="text-gray-500">
            useMemo is a feature in React that allows you to memoize the result
            of a function call and cache it for future use. This can be very
            helpful when you have expensive computations that are called
            frequently, as it can save you a lot of time and improve the
            performance of your app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
