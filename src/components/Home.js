import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../carInfo";

function Home() {
  console.log(cars);
  return (
    <Container>
      {cars.map((car, key) => (
        <Section
          key={car.id}
          title={car.title}
          image={car.image}
          desc={car.description}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
