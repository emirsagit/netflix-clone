import React from "react";
import { Jumbotron } from "../components";
import JumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {JumboData.map((el) => (
        <Jumbotron key={el.id} direction={el.direction}>
          {console.log(el)}
          <Jumbotron.Pane>
            <Jumbotron.Title>{el.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{el.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={el.image} alt={el.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
