import Image from "next/image";

export default function menu() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <span style={{
          backgroundImage: 'linear-gradient(135deg, #e6ba5d 0%, #9ac78a 100%)',
          WebkitBackgroundClip: 'text',
          MozBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          MENU
        </span>
      </h1>
      <main style={{ textAlign: 'center' }}>
      <section>
        <h2>旬の野菜と食材を<br className="onlySP" />手軽に味わえる</h2>
        <p className="lead">
          自家農園の食材のため、リーズナブルにご提供<br />
          季節ごとにサラダ/メインメニューは変わります
        </p>
        <section className="menuDetailSec">
          <h3>Salad</h3>
          <ul className="menuList">
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_s01.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_s02.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_s03.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_s04.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
          </ul>
        </section>
        <section className="menuDetailSec">
          <h3>Main</h3>
          <ul className="menuList">
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_m01.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_m02.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_m03.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_m04.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
          </ul>
        </section>
        <section className="menuDetailSec">
          <h3>Pasta</h3>
          <ul className="menuList">
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_p01.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_p02.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_p03.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
              />
            </li>
            <li style={{ position: 'relative', aspectRatio: '1/1' }}>
              <Image
                src="/images/menu_p04.webp"
                alt=""
                style={{ objectFit: 'cover' }}
                fill
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
