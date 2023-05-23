"use client";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Page() {
    return (
        <div>
            <h1>Styled with Styled Components</h1>
            <Container>hello</Container>
        </div>
    );
}
