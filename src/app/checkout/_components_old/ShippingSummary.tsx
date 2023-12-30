const ShippingSummary = ({ shippingDetails, onEditClick }) => {
  return (
    <div className="shipping-summary-card border p-5 rounded-xl relative bg-offWhite">
      <div className="font-normal text-dark">
        {shippingDetails.firstName} {shippingDetails.lastName}
      </div>
      <div className="font-normal text-dark">{shippingDetails.address}</div>
      <div className="font-normal text-dark">
        {shippingDetails.city} {shippingDetails.state}{' '}
        {shippingDetails.postalCode}
      </div>
      <div className="font-normal text-dark">{shippingDetails.email}</div>
      <div className="font-normal text-dark">{shippingDetails.phone}</div>
      <div
        className="edit-link absolute top-2 right-2 p-2 cursor-pointer text-dark"
        onClick={onEditClick}
      >
        Edit
      </div>
    </div>
  );
};

export default ShippingSummary;
