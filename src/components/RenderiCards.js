import React from "react";
import TouristInfoCards from "./TouristInfoCards";

const RenderiCards = () => {
  return (
    <div className="d-flex justify-content-around">
      <TouristInfoCards
        imgUrl="https://media.timeout.com/images/105400989/750/422/image.jpg"
        link="peoplemakeglasgow.com"
        nameCity="Glasgow"
      />
      <TouristInfoCards
        imgUrl="https://www.visitbritain.com/sites/default/files/styles/consumer_campaigns_hero_mobile/public/paragraphs_bundles/hero/manchester_town_hall_albert_square_cropped.jpg?itok=l9lSkiKd"
        link="visitmanchester.com"
        nameCity="Manchester"
      />
      <TouristInfoCards
        imgUrl="https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"
        link="visitlondon.com"
        nameCity="London"
      />
    </div>
  );
};

export default RenderiCards;
