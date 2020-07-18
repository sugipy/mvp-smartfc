import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Feature</Subtitle>
      <SectionTitle>機能一覧</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>チャット機能</FeatureTitle>
          <FeatureText>
            加盟店とSVはチャットで話し、電話・FAX・移動を削減。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>マニュアルをクラウド管理</FeatureTitle>
          <FeatureText>
            マニュアルを簡単に整理、常に最新のマニュアルを加盟店に表示。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>売上管理</FeatureTitle>
          <FeatureText>
            加盟店の売上をクラウド管理して、全ての経営状況が1目で分かる。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>加盟店管理</FeatureTitle>
          <FeatureText>
            加盟店の経営状況と本部情報を集計し、サポートが必要な加盟店が1目でわかる。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>掲示板機能</FeatureTitle>
          <FeatureText>
            おしらせは全てクラウドの掲示板へ。加盟店へ本部の活動をアピール。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>オンライン発注</FeatureTitle>
          <FeatureText>
            加盟店への仕事の発注もオンラインで実現。全て記録をクラウドに保存。
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
