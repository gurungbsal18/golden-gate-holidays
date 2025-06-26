import React from "react";

const AccomplishmentSection = () => {
  const title = "Recent Accomplishment!";
  return (
    <div className="container py-24">
      <div className="flex flex-col justify-content-center gap-2">
        <h4 className="title text-primary text-center">{title}</h4>
        <p className="text-center text-muted text-sm">
          Congratulations to our recent traveller for their accomplishments.
          <br />
          Hear what our travellers have to say about their experiences with
          Golden Gate Holidays.
        </p>
      </div>
    </div>
  );
};

export default AccomplishmentSection;
