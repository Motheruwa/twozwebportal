import React from "react";

const MapComponent = () => {
  // New location coordinates for Gafat Security and Human Resource in Addis Ababa
  const latitude = 8.997628;
  const longitude = 38.758690;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31525.83447216631!2d38.733817345792794!3d8.997036900000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f6bbb2738d%3A0x42c9c35edf714199!2sGafat%20Security%20%26%20Human%20Resource%20P.L.C!5e0!3m2!1sen!2set!4v1736773891767!5m2!1sen!2set" style={{ border: "0", width: "100%", height: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MapComponent;