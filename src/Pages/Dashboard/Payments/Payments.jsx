import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../Components/Heading/Heading";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//stripe key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payments = () => {
  return (
    <div>
        <Heading subHeading="Pay first to eat" Heading="Payment"></Heading>
        <div className="max-w-5xl mx-auto bg-green-200 p-10 rounded-lg shadow-lg">
            <Elements stripe={stripePromise}>
              <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    </div>
  );
};

export default Payments;