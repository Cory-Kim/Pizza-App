import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Banana from '../assets/banana.png'
import HeroImage from '../assets/HeroImage.png'
import { UilPhone } from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

export default function Hero()
{
  return (
    <div className={css.container}>

      {/* left side */}
      <div className={css.left}>

        <div className={css.bananaDiv}>
          <span>More than Faster</span>
          <Image src={Banana} alt="" width={30} height={30} />
        </div>

        {/* catch phrase */}
        <div className={css.heroText}>
          <span>
            Freshly made
          </span>
          <span>
            <span style={{ color: "var(--themeYellow)" }}>pizza</span>, straight
          </span>
          <span> to your door!</span>
        </div>

        <span className={css.miniText}>
          We strive to provide a seamless and hassle-free pizza delivery experience,
          so our customers can spend less time waiting and more time enjoying their food.
        </span>

        <button className={`btn ${ css.btn }`}>
          Get Started
        </button>

      </div>

      {/* right side */}
      <div className={css.right}>

        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout='intrinsic' />
        </div>

        <div className={css.ContactUs}>
          <span>Contact us</span>
          <div>
            <UilPhone color='white' />
          </div>
        </div>

        <div className={css.Pizza}>

          <div>
            <Image src={Pizza1} alt="" objectFit="cover"
              layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeYellow)" }}>$</span>7.49
            </span>
          </div>

        </div>

      </div>

    </div >
  )
};

