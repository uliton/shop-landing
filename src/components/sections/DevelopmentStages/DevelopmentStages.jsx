/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { ONLINE_ORDERS_MOCK } from '../../../mockData';
import { DevelopmentStage } from '../../ui/DevelopmentStage';
import styles from './DevelopmentStages.module.scss';
import prev from '../../../images/developmentStages/prev.svg';
import next from '../../../images/developmentStages/next.svg';

// import { Carousel } from '@trendyol-js/react-carousel';
// import { LeftArrow } from '../../ui/LeftArrow';
// import { RightArrow } from '../../ui/RightArrow';

// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     window.addEventListener('resize', () => handleResize());

//     return window.removeEventListener('resize', () => handleResize());
//   }, []);

//   function handleResize() {
//     if (window.innerWidth < 768) {
//       setIsMobile(true);
//     } else {
//       setIsMobile(false);
//     }
//   }

//   return isMobile;
// };

const devStages = ONLINE_ORDERS_MOCK.filter(stages => stages.section === 'developmentstages');

export const DevelopmentStages = () => {
  // const isMobile = useIsMobile();

  // const shideToShow = isMobile ? 1 : 2;

  // console.log(shideToShow);

  const [active] = useState(0);

  console.log(active);

  return (
    <section id="levels">
      <div className={styles.container}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {devStages.map(stage => (
              <div key={stage.id} className="carousel-item active">
                <DevelopmentStage subtitle={stage.subtitle} description={stage.description} image={stage.img} />
              </div>
            ))}
            {/* <div className="carousel-item active">
              <DevelopmentStage subtitle={devStages[0].subtitle} description={devStages[0].description} image={devStages[0].img} />
            </div>
            <div className="carousel-item">
              <DevelopmentStage subtitle={devStages[1].subtitle} description={devStages[1].description} image={devStages[1].img} />
            </div>
            <div className="carousel-item">
              <DevelopmentStage subtitle={devStages[2].subtitle} description={devStages[2].description} image={devStages[2].img} />
            </div>
            <div className="carousel-item">
              <DevelopmentStage subtitle={devStages[3].subtitle} description={devStages[3].description} image={devStages[3].img} />
            </div>
            <div className="carousel-item">
              <DevelopmentStage subtitle={devStages[4].subtitle} description={devStages[4].description} image={devStages[4].img} />
            </div> */}
          </div>
          <div className={styles.buttons}>
            <button
              className={`carousel-control-prev ${styles.prev}`}
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className={`carousel-control-prev-icon ${styles.icon}`} aria-hidden="true">
                <img src={prev} alt="prev" className={styles.img} />
              </span>
              {/* <span className={`visually-hidden ${styles.prev}`}>Previous</span> */}
            </button>
            <button
              className={`carousel-control-next ${styles.next}`}
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className={`carousel-control-next-icon ${styles.icon}`} aria-hidden="true">
                <img src={next} alt="next" className={styles.img} />
              </span>
              {/* <span className="visually-hidden">Next</span> */}
            </button>
          </div>
        </div>

        {/* <Carousel
          useArrowKeys
          responsive
          show={shideToShow}
          slide={shideToShow}
          transition={0.5}
          rightArrow={<RightArrow text="right" />}
          leftArrow={<LeftArrow text="left" />}
        >
          <DevelopmentStage />
          <DevelopmentStage />
          <DevelopmentStage />
        </Carousel> */}
      </div>
    </section>
  );
};
