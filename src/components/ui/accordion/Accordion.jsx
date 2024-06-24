import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { icons } from '../../../assets'
const { ExpandMoreIcon, ExpandLessIcon,CheveronRightAccordionIcon } = icons;


const Accordion = () => {

  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  const [questionFive, setQuestionFive] = useState(false);
  const [questionSix, setQuestionSix] = useState(false);
  const [questionSeven, setQuestionSeven] = useState(false);
  const [questionEight, setQuestionEight] = useState(false);



    const accordionData = [
      {
        accordionLabel: "How does the booking process work?",
        key: 1,
        state: questionOne,
        stateFunc: setQuestionOne,
        accordionAnswer:
          "Provide your move-in and move-out dates, guest details and contact information which will then be sent as a request to the lanlord of your chosen apartment. Once the landlord approves your request, you wil recieve an email within 48 hours that will guide you through the billing and payment process so you can finalize your booking. In the case of instant bookings, the process is even faster! After providing the required information, you can book the apartment by 'confirm and book now' without priior approval from the landlord.",
      },
      {
        accordionLabel: "Can I visit the apartment before I book?",
        key: 2,
        state: questionTwo,
        stateFunc: setQuestionTwo,
        accordionAnswer:
          "Unfortunately, we do not offer apartment viewings at this point in time. Nevertheless we always make sure all images and details of our apartments are always up to date.",
      },
      {
        accordionLabel:
          "Will the landlord be able to provide a certificate of residence?",
        key: 3,
        state: questionThree,
        stateFunc: setQuestionThree,
        accordionAnswer:
          "Yes, most landlords on Luxuryhomes will be able to provide a certificate of residence so that you can register at the citizen's office. You can find this information on the apartment listing under the landlord section",
      },
      {
        accordionLabel: "What is included in the rent?",
        key: 4,
        state: questionFour,
        stateFunc: setQuestionFour,
        accordionAnswer:
          "The rental price always includes the rent and utility costs such as water, electricity, gas, heating and wifi and the service fee in case it applies to your apartment. Further costs covering the optional or mandatory services will be issued per invoice by your landlord. Please note in case your landlord requires a security deposit, you will need to pay the deposit directory to your landlord shortly before the move-in date. The deposit wil be returned to you right after you move out, on the condition that there have been no damages caused to the property during the tenancy. Further details will be provided by your landlord.",
      },
      {
        accordionLabel: "The landlord accepted my request: what now?",
        key: 5,
        state: questionFive,
        stateFunc: setQuestionFive,
        accordionAnswer:
          "You can complete your booking by clicking on 'Finish booking' in your Homelike dashboard. We will guide you through billing, contact, payment details and -if applies-digital rental agreement signature to successfully complete the booking process. In case your move-in date is within 2 months, we will charge you instantly. If your move-in date is within 2 months, we wil charge you instantly. If your move-in date is later, we will charge your chosen payment method shortly before you move in.",
      },
      {
        accordionLabel: "Can I cancel my booking?",
        key: 6,
        state: questionSix,
        stateFunc: setQuestionSix,
        accordionAnswer:
          "You may cancel your booking at any time, however, the cancellation policy will apply. If you cancel your booking before the landlord has approved your request, you will not be charged. If you cancel the request after it has been finalized, the cancellation policy will apply. Please be sure to review the apartment's cancellation and termination policy during the booking process",
      },
      {
        accordionLabel: "Can I extend my stay?",
        key: 7,
        state: questionSeven,
        stateFunc: setQuestionSeven,
        accordionAnswer:
          "We are happy to extend your stay on the conditions that the apartment is available and your landlord is willing to extend it. Please visit your luxuryhome dashboard, select your booking and click on 'Request extention' on the booking sidebar. Once you send the extention request, Our booking management team is happy to mediate the process between you and your landlord.",
      },
      {
        accordionLabel: "How can I pay on Luxuryhomes?",
        key: 8,
        state: questionEight,
        stateFunc: setQuestionEight,
        accordionAnswer:
          "We generally support payments via card payments such as MasterCard, Visa, Amex and other local card providers. Alternatively, you can pay via wire bank transfer inside the EU zone and pay per invoice. In case you run into issues during the payment process or require an alternative payment option, you can always contact us via support@luxuryhomes.cc - we are happy to support you!",
      },
    ];


  return (
    <section className="text-gray-900">
      <h2 className="text-3xl font-medium text-gray-900 font-palanquin mb-6">
        Your Questions Answered
      </h2>
      {accordionData.map(
        ({ key, state, stateFunc, accordionAnswer, accordionLabel }) => (
          <div key={key} className="cursor-pointer">
            <div className="accordion-border"></div>
            <div className="mt-6 mb-6" onClick={() => stateFunc(!state)}>
              <header className="font-palanquin flex justify-between">
                <h2 className="font-semibold text-[20px]">{accordionLabel}</h2>
                <button>
                  {state ? (
                    <ExpandLessIcon className="text-3xl" />
                  ) : (
                    <ExpandMoreIcon className="text-3xl" />
                  )}
                </button>
              </header>
              {state && (
                <div className="font-montserrat text-[1.1rem] mt-4 mb-4 font-medium custom-trans">
                  {accordionAnswer}
                </div>
              )}
            </div>
          </div>
        )
      )}

      <div className="flex space-x-2 underline font-palanquin text-gray-700 hover:text-gray-500 transition-all mt-5">
        <Link className="text-xl">View all</Link>
        <CheveronRightAccordionIcon className="text-3xl" />
      </div>
    </section>
  );
}

export default Accordion