"use client";

import React, { useState } from "react";
import FieldContainer from "../FieldContainer";
import { Button, Checkbox } from "@nextui-org/react";
import ButtonContainer from "../ButtonContainer";
import { useRouter } from "next/navigation";
import { IoTimerOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { saveStepFour } from "@/features/formSlice";
import AcknowledgeText from "../AcknowledgeText";
import { FaCreditCard } from "react-icons/fa";
import SmallLabel from "../SmallLabel";
import Image from "next/image";

const StepFour = () => {
  const router = useRouter();
  const govermentFeesAmount = 350;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [acknowledge, setAcknowledge] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isGovermentFeesProcessing, setIsGovermentFeesProcessing] =
    useState(false);

  const stepThreeData = useSelector((state) => state.form.stepThree);

  // page authorization | redirect if previous step has no data
  if (Object.keys(stepThreeData).length === 0) {
    return router.push(process.env.NEXT_PUBLIC_APP_URL + "/trademark-register");
  }

  // handle form submission
  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (!acknowledge) {
      setCheckboxError(true);
      setIsLoading(false);
      return;
    }

    const data = {
      isGovermentFeesProcessing,
      govermentFeesAmount: isGovermentFeesProcessing ? govermentFeesAmount : 0,
      i_acknowledge: acknowledge,
    };
    dispatch(saveStepFour(data)); // store data to state

    return router.push("/trademark-register/payment");
  };

  return (
    <section className="w-[70%] max-md:w-[95%] m-auto mt-16 max-md:mt-10">
      <form
        action=""
        method="post"
        onSubmit={handleFormSubmit}
        encType="multipart/form-data"
      >
        <h1 className="text-slate-700 font-semibold text-2xl mb-5">
          IMPORTANT NOTICE: PLEASE READ AND ACKNOWLEDGE
        </h1>

        <div className="relative mt-4">
          <FieldContainer>
            <div className="flex items-center gap-4 mt-6">
              <FaCreditCard className="text-2xl max-md:text-5xl text-[#03579ce0]" />

              <p className="text-[#03579ce0] font-bold text-md uppercase">
                Federal Filing Fee (1 - Class) $350
              </p>
            </div>

            <AcknowledgeText
              text={`The package includes the government fee of $350 for the registration of one mandatory class for your trademark. Our expert paralegals will review your case to determine the optimal number of classes needed to fully protect your business name, logo, or slogan. Additional government fees may apply for each additional class identified during the paralegal team's review. You will be informed about additional classes before proceeding. Our goal is to ensure comprehensive protection for your intellectual property, and our team will guide you through the process with transparency and expertise.`}
            />
            <Checkbox
              isSelected={isGovermentFeesProcessing}
              onValueChange={setIsGovermentFeesProcessing}
              size="md"
              className="mt-2"
            >
              Federal fee:{" "}
              <span className="text-primary-theme font-semibold">
                ${govermentFeesAmount}.00 USD
              </span>
            </Checkbox>
          </FieldContainer>
        </div>

        <div className="relative">
          <FieldContainer>
            <div className="mb-2 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-[#03579ce0] font-bold text-md">
                  1. MANDATORY FOLLOW-UP CALL
                </h4>
                <AcknowledgeText
                  text={`After completing your service fee payment, you must answer a call from your assigned case analyst.
                This call is essential for providing you with a trademark search and clearance report. The analyst will
                help determine the relevant classifications for your trademark based on your business, typically
                ranging from 2 to 4 classifications.`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[#03579ce0] font-bold text-md">
                  2. NO FURTHER ACTION WITHOUT CALL
                </h4>
                <AcknowledgeText
                  text={`Please note that without answering the follow-up call, we will not be able to proceed with your
              trademark registration. `}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[#03579ce0] font-bold text-md">
                  3. FEDERAL FEE REQUIREMENT
                </h4>
                <AcknowledgeText
                  text={`In addition to the service fee, a $350 federal fee per classification is required by the USPTO (United
              States Patent and Trademark Office) for filing your trademark. This fee will be collected after we
              have reviewed your application and prepared your trademark filing.`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[#03579ce0] font-bold text-md">
                  ACKNOWLEDGEMENT
                </h4>
                <p className="text-sm opacity-80 font-bold ml-4 text-slate-800">
                  {`- Agree to receive a follow-up call from your case analyst.`}
                </p>
                <p className="text-sm opacity-80 font-bold ml-4 text-slate-800">
                  {`- Understand that without answering the call, the registration process cannot proceed.`}
                </p>
                <p className="text-sm opacity-80 font-bold ml-4 text-slate-800">
                  {`- Acknowledge there is an additional federal fee of $350 per classification that must be paid to the
                  USPTO after the application is prepared`}
                </p>
              </div>
            </div>

            <Checkbox
              isSelected={acknowledge}
              onChange={(e) => {
                setAcknowledge(e.target.checked);
                if (e.target.checked) setCheckboxError(false);
              }}
              size="md"
              isInvalid={checkboxError}
              isRequired={true}
            >
              <span className="text-orange-600">*</span> I acknowledge and agree
              to the terms and conditions outlined above.
            </Checkbox>

            {checkboxError && (
              <p className="text-[#f31260] text-xs text-center mt-3">
                Please tick the checkbox to process further.
              </p>
            )}
          </FieldContainer>
        </div>

        {/* next or previous button */}
        <ButtonContainer>
          <Button
            color="secondary"
            variant="shadow"
            onClick={() => router.back()}
          >
            Previous
          </Button>
          <Button
            color="primary"
            variant="shadow"
            type="submit"
            isLoading={isLoading}
            className="px-10"
          >
            Next
          </Button>
        </ButtonContainer>
        <p className="text-md max-md:text-sm text-orange-600 mb-16 mt-7 font-semibold">
          Note: Once your search results have been reviewed and our specialists
          have curated your trademark application, Secure Your Mark will collect
          the necessary fees and pay the discounted TEAS Standard electronic
          filing fee of $350 on your behalf.
        </p>
      </form>
    </section>
  );
};

export default StepFour;
