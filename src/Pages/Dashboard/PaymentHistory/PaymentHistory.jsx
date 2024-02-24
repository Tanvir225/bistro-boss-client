import Heading from "../../../Components/Heading/Heading";
import usePaymentHistory from "../../../Hook/usePaymentHistory";

const PaymentHistory = () => {
  //paymentHistory routes
  const [paymentHistory,isLoading,refetch] = usePaymentHistory();
  refetch()
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
              <th>Items</th>
              <th>Amount</th>
              <th>T_ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paymentHistory.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.name}</td>
                <td>{payment.email}</td>
                <td>{payment.date}</td>
                <td>{payment.menuNames.join(" , ")}</td>
                <td>{payment.amount} $</td>
                <td>{payment.transaction_id}</td>
                <td className="text-red-600 font-bold">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
