import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    if (id > 0) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(response => response.json())
        .then(data => {
          setCustomerInfo(data);
        });
    }
  }, [id]);
  return (
    <>
      {id && customerInfo
        ? `Customer Profile ${customerInfo.id}, email:
        ${customerInfo.email},. 
        Is the customer VIP: ${customerInfo.vip}, 
        Phone Number: ${customerInfo.phoneNumber}`
        : "loading"}
    </>
  );
};

export default CustomerProfile;
