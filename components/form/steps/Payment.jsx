"use client";

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import NormalLabel from "@/components/form/NormalLabel";
import { useSelector } from "react-redux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import PageLoader from "@/components/ui/PageLoader";

const Payment = () => {
  const router = useRouter();
  const [isDataSent, setIsDataSent] = useState(false);
  const [loader, setLoader] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const nestedLeadData = useSelector((state) => state.form);
  const stepFourData = nestedLeadData.stepFour;

  // from the nested object, merge them into one object
  const leadData = useMemo(
    () => Object.assign({}, ...Object.values(nestedLeadData)),
    [nestedLeadData]
  );

  // Filter out properties that are empty or undefined
  const leadDataWithValues = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(leadData).filter(([_, value]) => value !== "")
      ),
    [leadData]
  );

  // adjust the order items details
  const orderDetails = useMemo(() => {
    const baseDetails = [
      {
        title: `${nestedLeadData.stepThree.packageName}`,
        amount: nestedLeadData.stepThree.price,
      },
      { title: "Comprehensive Search", amount: 0 },
      { title: "Monitoring", amount: 0 },
      { title: "Office Action Response", amount: 0 },
    ];

    // if (stepFourData.rushAmount !== 0) {
    //   baseDetails.push({
    //     title: "Rush processing",
    //     amount: stepFourData.rushAmount,
    //   });
    // }
    return baseDetails;
  }, [nestedLeadData]);

  // Create the lineItems array
  const lineItem = [
    {
      name: `${nestedLeadData.stepThree.packageName} Package`,
      unitPrice: nestedLeadData.stepThree.price,
    },
  ];

  //count the total and add to total amount into data object
  const totalAmount = orderDetails.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );
  leadDataWithValues.totalAmount = totalAmount;
  leadDataWithValues.zoho_step = 2;

  const createOrder = async () => {
    return await axios
      .post("/api/paypal-checkout/create-order", { totalAmount })
      .then((res) => {
        return res?.data?.order.id;
      })
      .catch((err) => {
        console.log("Error creating order:", err);
        setPaymentError("Something went wrong, please try again.");
      });
  };

  // handle capture order and passing some order data
  const onApprove = async (data) => {
    const orderData = {
      orderId: data.orderID,
    };

    return await axios
      .post("/api/paypal-checkout/capture-order", orderData)
      .then((res) => {
        // payment successful. now make a request to send the data to mail and zoho
        if (res?.data?.result?.status == "COMPLETED") {
          setLoader(true);
          setPaymentError("");
          leadDataWithValues.is_paid = true;
          leadDataWithValues.zoho_step = 3;
          axios
            .post(endPoint, leadDataWithValues)
            .then((res) => {
              if (res.data.success) {
                return router.push("/trademark-register/thank-you");
              }
            })
            .catch((err) => {
              setIsLoading(false);
              console.log(
                "Error sending data to save-data endpoint in payment page: ",
                err
              );
              alert(
                "Payment Successful. But something went wrong, please check your network or contact for support."
              );
            });
        }
      })
      .catch((err) => {
        console.log("Error capturing order:", err);
        setPaymentError("Checkout Failed, Please try again.");
      });
  };

  // send the data to mail and zoho
  const endPoint = process.env.NEXT_PUBLIC_API_URL + "/save-data";
  useEffect(() => {
    const sendData = async () => {
      if (isDataSent) return; // Prevent multiple sends

      try {
        await axios.post(endPoint, leadDataWithValues);
        setIsDataSent(true); // Mark as sent
      } catch (err) {
        console.log("Error sending mail in payment page: ", err);
        alert("Something went wrong, Check your network or Please try again.");
      }
    };

    sendData();
  }, [isDataSent]);

  // page authorization | redirect if previous step has no data
  if (Object.keys(stepFourData).length === 0) {
    return router.push(process.env.NEXT_PUBLIC_APP_URL + "/trademark-register");
  }

  return (
    <div className="px-16 mt-16 mb-14 max-sm:px-2 max-md:mt-12 max-md:mb-8">
      {loader && (
        // <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen bg-slate-700 bg-opacity-25 flex-center">

        // </div>
        <PageLoader />
      )}
      <div className="flex flex-col gap-3 mb-8 w-[800px] max-md:w-auto max-sm:px-4">
        <h1 className="text-[#03589c] font-semibold text-4xl max-md:text-3xl">
          Confirm order and pay
        </h1>
        <NormalLabel
          text={`
            Please enter your payment details below to complete your Trademark
            order. Once completed, our experts will immediately begin reviewing
            and processing your submission.`}
        />
      </div>
      <div className="flex max-md:flex-col-reverse flex-center">
        <section className=" w-3/5 px-20 max-md:px-0 max-md:w-full">
          <div className="bg-white p-8 max-md:px-5 max-md:py-7 border-t-2 border-t-indigo-700 flex flex-col gap-3 mb-6">
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                components: "buttons",
                currency: "USD",
                disableFunding: "paylater",
              }}
            >
              <PayPalButtons
                style={{ layout: "vertical" }}
                disabled={false}
                createOrder={createOrder}
                onApprove={onApprove}
              />
            </PayPalScriptProvider>
            {paymentError && (
              <p className="text-[#f31260] text-sm text-center mt-4 mb-1 capitalize">
                {paymentError}
              </p>
            )}
          </div>
        </section>
        <section className="w-2/5 flex-center max-md:w-full">
          <div className="bg-white border-t-3 border-t-orange-500 flex flex-col gap-3 mb-6 w-full">
            <h1 className="text-2xl font-semibold text-slate-700 text-center pt-8 py-6">
              My Order Details
            </h1>
            <hr />
            <div className="p-8 flex flex-col gap-5">
              {orderDetails.map(({ title, amount }, index) => (
                <div
                  className="flex-between font-medium text-sm text-slate-600 pb-3 border-b-1 border-slate-200"
                  key={index}
                >
                  <div>{title}</div>
                  <div>${amount}.00</div>
                </div>
              ))}
              <div className="flex-between font-semibold text-base text-slate-600">
                <div>{`Total Amount`}</div>
                <div>${totalAmount}.00</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
