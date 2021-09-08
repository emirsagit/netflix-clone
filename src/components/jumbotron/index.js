import React from "react";
import { Inner, Item, Container, Title, Subtitle, Image, Pane } from "./styles/jumbotron";

export default function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function title({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function subtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Image = function image({ ...props }) {
  return <Image {...props} />;
};

Jumbotron.Pane = function pane({ ...props }) {
  return <Pane {...props} />;
};
