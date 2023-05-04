import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services()
{
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favorite Food</span>
        <span>Delivery Partner</span>
      </div>

      {/* features */}
      <div className={css.services}>

        <div className={css.feature}>

          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />
          </div>

          <span>Easy to Order</span>

          <span>Only need a few steps to order food</span>

        </div>

        <div className={css.feature}>

          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />
          </div>

          <span>Easy to Order</span>

          <span>Delivery that is always on time</span>

        </div>

        <div className={css.feature}>

          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />
          </div>

          <span>Easy to Order</span>

          <span>Not only fast, quality is number one</span>

        </div>

      </div>


    </>
  )
}
