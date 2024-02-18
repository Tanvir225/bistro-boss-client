import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../Hook/useAxios";
import useCart from "../../../Hook/useCart";
import useAuth from "../../../Hook/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState('')
  const [clientSecret,setClientSecret] = useState('')

  //useCart hooks
  const [cart] = useCart()
  const total = cart.reduce((prev,item)=> prev+item.price,0)


  //useAxios and useAuth hook
  const axios = useAxios()
  const {user} = useAuth()

  useEffect(()=>{
    // Create a new PaymentMethod object in the Stripe API.
    axios.post("/create-payment-intent",{price: total})
    .then(res=>{
        console.log(res.data.client_secret);
        setClientSecret(res.data.client_secret)
    })
  },[axios,total])

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
        return
    }

    //payment intent
    const {error,paymentMethod} =  await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        console.log(error);
        setError(error?.message)
    }
    else{
        console.log(paymentMethod);
    }

    //confirm payment intent
    const {paymentIntent , error: confirmationError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })

    if (confirmationError) {
        console.log(confirmationError);
    }
    if (paymentIntent) {
        console.log(paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
      className="my-5"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>

      <div className="text-center my-10">
        <button
          className="btn btn-outline w-52"
          type="submit"
          disabled={!stripe || !clientSecret}
        >   
          Pay
        </button>
        <p className="text-red-600 my-5">{error}</p>
      </div>
    </form>
  );
};

export default CheckOutForm;
