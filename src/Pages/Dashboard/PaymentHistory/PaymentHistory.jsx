import Heading from "../../../Components/Heading/Heading";
import usePaymentHistory from "../../../Hook/usePaymentHistory";


const PaymentHistory = () => {
  //paymentHistory routes
  const [paymentHistory] = usePaymentHistory();
  console.log(paymentHistory);
  return (
    <div>
      <Heading subHeading="At a glance" Heading="Payment history"></Heading>
      <h2 className="text-3xl font-semibold">
        Total Payments : {paymentHistory.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table  w-full text-center my-5">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>email</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>T_ID</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paymentHistory.map((payment,index) =>(
                <tr key={payment._id}>
                    <th>{(index+1)}</th>
                    <td>{payment.name}</td>
                    <td>{payment.email}</td>
                    <td>{payment.date}</td>
                    <td>{payment.amount} $</td>
                    <td>{payment.status}</td>
                    <td>{payment.transaction_id}</td>
                </tr>
            ) )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
