import Routes from "@components/routes";
import styled from "styled-components";

function App() {
    return (
        <Main>
            <Routes />
        </Main>
    );
}

const Main = styled.main`
    margin: auto;
    width: 90rem;
    padding: 1.5rem 1.5rem 0 1.5rem;
    position: relative;
`;

export default App;
