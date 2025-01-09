import React from "react";

const MapComponent = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.436281229413!2d38.737381595588644!3d9.035959875627249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f68908aad97%3A0x6c67d2e35cbb4d62!2s6%20Kilo%20Yekatit%2012%20Square!5e0!3m2!1sen!2set!4v1703621054917!5m2!1sen!2set"
        allowfullscreen=""
        style={{ border: "0", width: "100%", height: "100%" }}
        title="map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>
  );
};

export default MapComponent;
