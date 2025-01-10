"use client";
import Image from "next/image";
import styled from "styled-components";

const GradientTitle = styled.h1`
  text-align: center;
  span {
    background-image: linear-gradient(135deg, #e6ba5d 0%, #9ac78a 100%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Section = styled.section`
  text-align: center;

  h2, h3, p {
    text-align: center;
  }
`;

export default function concept() {
  return (
    <>
      <GradientTitle>
        <span>CONCEPT</span>
      </GradientTitle>
      <main>
        <Section>
          <h2>口に入れた瞬間<br className="onlySP" />カラダが喜ぶ</h2>
          <p className="lead">
            自家農園で太陽の光をたっぷり浴びた<br />
            採れたて・無農薬のお野菜をふんだんに使っています
          </p>
          <section className="conceptDetailSec">
            <h3>Fresh</h3>
            <p className="photo">
              <Image
                src="/images/concept_ph01.jpg"
                alt=""
                width={300}
                height={300}
              />
            </p>
            <p className="text">
              カラフルサラダでしっかりビタミンをチャージ。<br />
              朝採れ野菜のパリッとした食感と自家製ドレッシングをお楽しみください。
            </p>
          </section>
          <section className="conceptDetailSec reverse">
            <h3>Healthy</h3>
            <p className="photo">
              <Image
                src="/images/concept_ph02.jpg"
                alt=""
                width={300}
                height={300}
              />
            </p>
            <p className="text">
              メインはすべて熟練の一流シェフによる創作料理。<br />
              地元の新鮮な食材を使用し、ヘルシーな調理法にこだわっています。
            </p>
          </section>
          <section className="conceptDetailSec">
            <h3>Mindful</h3>
            <p className="photo">
              <Image
                src="/images/concept_ph03.jpg"
                alt=""
                width={300}
                height={300}
              />
            </p>
            <p className="text">
              自然の木々から差し込む優しい光。一口一口味わう食材そのものの旨み。<br />
              都会とは違うゆったりとした時間が流れています。
            </p>
          </section>
        </Section>
      </main>
      <footer>
        <p>
          <Image
            src="/images/footer_logo.svg"
            alt=""
            width={300}
            height={300}
          />
        </p>
      </footer>
    </>
  )
}
