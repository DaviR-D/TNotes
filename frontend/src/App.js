import styled from "styled-components";
import "./App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 0.1em;
  background: rgb(40, 0, 90);
`;

const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.5em;
  outline: none;
  transition: outline-color 0.2s;
  &:focus {
    outline: 2px solid rgb(40, 0, 90);
  }
`;

const TList = styled.li`
  color: white;
  background: rgb(40, 0, 90);
  width: 25%;
  height: 25%;
  text-align: center;
  padding: 0.5em;
  border-radius: 3px;
`;

const tasks = [<TList>Tarefa 1</TList>, <TList>Tarefa 2</TList>];

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>TNotes</Title>
      </Wrapper>
      <Input></Input>
      <ul>{tasks}</ul>
    </div>
  );
}

export default App;
