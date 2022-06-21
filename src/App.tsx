import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

function App() {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `;

  useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
    </div>
  );
}

export default App;
