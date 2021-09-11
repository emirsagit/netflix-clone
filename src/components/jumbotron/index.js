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

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage({ ...props }) {
  return <Image {...props} />;
};

Jumbotron.Pane = function JumbotronPane({ ...props }) {
  return <Pane {...props} />;
};
