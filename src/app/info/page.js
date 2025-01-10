import Image from "next/image";

export default function info() {
  return (
    <>
      <header>
        <h1 style={{ textAlign: 'center' }}>
          <span style={{
            backgroundImage: 'linear-gradient(135deg, #e6ba5d 0%, #9ac78a 100%)',
            WebkitBackgroundClip: 'text',
            MozBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            INFO
          </span>
        </h1>
      </header>
      <main style={{ textAlign: 'center' }}>
        <section>
          <h2>山の中にひっそり佇む<br className="onlySP" />隠れ家レストラン</h2>
          <p className="lead">
            駅からはちょっぴり遠いですが、<br />
            たまには遠回りしてみませんか？
          </p>
          <section>
            <h3>Access</h3>
            <p className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2381.3378364030896!2d139.72054154511156!3d35.68929551223065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c1e99747ec1e94e!2z77yI5qCq77yJ57-U5rOz56S-!5e0!3m2!1sja!2sjp!4v1617701157289!5m2!1sja!2sjp"
                width={800} height={600} style={{border:0}} allowFullScreen="" loading="lazy"
              >
              </iframe>
              Capybaland Mt.Sunny 1-2-3 in Capyzou farm<br />
              「サニー山駅」から車で10分<br />
              [OPEN]10:00-22:00　[CLOSE]Monday
            </p>
          </section>
          <section>
            <h3>Garelly</h3>
            <ul className="photoGarelly">
              <li className="item01">
                <Image
                  src="/images/info_g01.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
              <li className="item02">
                <Image
                  src="/images/info_g02.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
              <li className="item03">
                <Image
                  src="/images/info_g03.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
              <li className="item04">
                <Image
                  src="/images/info_g04.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
              <li className="item05">
                <Image
                  src="/images/info_g05.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
              <li className="item06">
                <Image
                  src="/images/info_g06.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
              <li className="item07">
                <Image
                  src="/images/info_g07.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </li>
            </ul>
          </section>
        </section>
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
