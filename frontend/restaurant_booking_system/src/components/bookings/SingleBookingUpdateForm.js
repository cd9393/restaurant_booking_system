import React from "react";

const SingleBookingUpdateForm = (props) => {
  if(!props.booking) return null

  function handleSubmit(event){
    event.preventDefault();
  //   if (props.booking.customer.bookings.length > 5) {
  //     const booking = {
  //       "id": props.booking.id,
  //
  //       "firstName": event.target.firstName.value,
  //       "lastName": event.target.lastName.value,
  //       "date": event.target.date.value,
  //       "numberOfCovers": event.target.numberOfCovers.value,
  //       "tableNumber": event.target.tableNumber.value,
  //       "receipt":parseInt(event.target.receipt.value) * 0.8
  //   }
  // }
  console.log(props.booking.customer);
    const booking = {
      "id": props.booking.id,

      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "date": event.target.date.value,
      "numberOfCovers": event.target.numberOfCovers.value,
      "tableNumber": event.target.tableNumber.value,
      "receipt":parseInt(event.target.receipt.value)
    }
    props.handleBookingUpdate(booking)
  }

  // const tableOptions = props.restTables.map((restTable) => {
  //   return <option key={restTable.id} value={restTable._links.self.href}>{resttable}
  // })


  return (

    <form onSubmit={handleSubmit}>
    <div className="single-booking-update-container">
    <input type="text" placeholder="First Name" name="firstName" defaultValue={props.booking.customer.firstName}/>
    <input type="text" placeholder="Last Name" name="lastName" defaultValue={props.booking.customer.lastName}/>
    <input type="text" placeholder="Date" name="date" defaultValue={props.booking.date}/>
    <input type="number" placeholder="numberOfCovers" name="numberOfCovers" defaultValue={props.booking.numberOfCovers}/>
    <input type="number" placeholder="tableNumber" name="tableNumber" defaultValue={props.booking.tableNumber}/>
    <input type = "number" placeholder = "receipt" name = "receipt" defaultValue = {props.booking.receipt}/>
    <button className="btn btn-info"type="submit">Save</button>
    </div>
    </form>

  )


}
export default SingleBookingUpdateForm;
