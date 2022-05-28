import { useEffect, useState } from "react";
import { getUsers } from "./Requests/getUsers";
import Card from "./Components/Card";
import UserDetailsCard from "./Components/UserDetailsCard";
import styled from "styled-components";

const MainComponent = styled.div`
  background: #333;
  padding: 20px;
`;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const Users = async () => {
      try {
        const response = await getUsers();

        setUsers(response.data);
      } catch (err) {
        alert(err);
      }
    };

    Users();
  }, []);

  return (
    <MainComponent>
      <Card>
        {users.map((user, i) => (
          <UserDetailsCard user={user} key={i} />
        ))}
      </Card>
    </MainComponent>
  );
}

export default App;
