import React from "react";
import styled from "styled-components";

function Home() {
  return <HomeLayout>계산기</HomeLayout>;
}

const HomeLayout = styled.div`
  position: relative;
  width: 360px;
  height: 800px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
