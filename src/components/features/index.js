import React from "react";
import { Container, Title, Subtitle } from "./styles/features";

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Features.Title = function FeauturesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Features.Subtitle = function FeaturesSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
