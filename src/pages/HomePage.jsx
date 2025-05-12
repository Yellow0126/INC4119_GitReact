import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: "정보통신공학과 4학년 김동욱",
      
    },
    {
      title: "프로젝트",
      description: "웹디자인,실내위치측정,MCI진단모델델",
    },
    {
      title: "연락처",
      description: "denissla@naver.com,010-6692-0126",
    },
    {
      title: "수강과목",
      description: "켑스톤디자인, 소프트웨어 공학,데이터 압축",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
