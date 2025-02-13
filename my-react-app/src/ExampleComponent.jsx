import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // 1️⃣ Runs on every render (not recommended for heavy operations)
  useEffect(() => {
    console.log("Component rendered!");
  });

  // 2️⃣ Runs only once when the component mounts (like componentDidMount)
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  // 3️⃣ Runs when 'count' state changes
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // 4️⃣ Fetch data from API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // 5️⃣ Cleanup function (runs when the component unmounts)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup when component unmounts
      console.log("Interval cleared!");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
