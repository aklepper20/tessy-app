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
      <Section
        title="Lower cost solar panels in america"
        description="money back garutentee"
        backgroundImg="Solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar panels for new roofs"
        description="Order online for touchless delivery"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="accessories"
        description="Order online for touchless delivery"
        backgroundImg="accessories.jpg"
        leftBtnText="shop now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
