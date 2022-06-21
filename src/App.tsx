import { gql, useQuery } from "@apollo/client";

function App() {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `;
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <div>
      <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
    </div>
  );
}

export default App;
