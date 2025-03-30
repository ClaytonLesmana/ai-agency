const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About AI Agency</h1>

      <div className="prose dark:prose-invert">
        <p className="mb-4">
          This is a template project showcasing React, TypeScript, and Tailwind
          CSS working together. It provides a solid foundation for building
          modern web applications with type safety and utility-first styling.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3">Tech Stack</h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>React</strong> - A JavaScript library for building user
            interfaces
          </li>
          <li>
            <strong>TypeScript</strong> - Adds static type definitions to
            JavaScript
          </li>
          <li>
            <strong>Tailwind CSS</strong> - A utility-first CSS framework
          </li>
          <li>
            <strong>Vite</strong> - Next generation frontend tooling
          </li>
          <li>
            <strong>React Router</strong> - Declarative routing for React
          </li>
        </ul>

        <p>
          Feel free to use this template as a starting point for your projects.
        </p>
      </div>
    </div>
  );
};

export default About;
