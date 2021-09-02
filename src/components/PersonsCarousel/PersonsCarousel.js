import './PersonsCarousel.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

function PersonsCarousel({persons}) {

    const trendingPersons = persons.map((person) => {
      const {id, name, profile, known} = person
        return (
          <div className="persons col text-center" key={id}>
            <img
              className="img-fluid rounded-circle mx-auto d-block"
              src={profile}
              alt={name}
            ></img>
            <p className="font-weight-bold text-center">{name}</p>
            <p
              className="font-weight-light text-center"
              style={{ color: "#5a606b" }}
            >
              Trending for {known}
            </p>
          </div>
        );
      });

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        smallTablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        Mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
            <div className="row mt-3">
              <div className="col">
                <Carousel 
                  responsive={responsive}
                  // draggable={true}
                  // infinite={true}
                  // autoPlay={true}
                  // autoPlaySpeed={1000}
                  // keyBoardControl={true}
                  // customTransition="all .5"
                  // transitionDuration={500}
                  // containerClass="carousel-container"
                  // removeArrowOnDeviceType={["tablet", "mobile"]}
                  // itemClass="carousel-item-padding-40-px"
                >
                  {trendingPersons}
                </Carousel>
              </div>
            </div>
    )
}

export default PersonsCarousel
