import React from "react";
import Helmet from "react-helmet";
import styled from "../../typed_components";

const Container = styled.div``;

interface IProps {
    loaded?: boolean;
}

const HomePresenter: React.SFC<IProps> = () => (
  <Container>
    <Helmet>
      <title>Minimal ts</title>
    </Helmet>
  </Container>
);

export default HomePresenter;
