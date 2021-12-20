import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../carInfo";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
