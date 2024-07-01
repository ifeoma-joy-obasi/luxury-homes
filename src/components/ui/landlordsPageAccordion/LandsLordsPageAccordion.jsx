import React, { useState } from 'react'
import { icons } from '../../../assets';
const { PlusIcon, MinusIcon } = icons;

const LandsLordsPageAccordion = () => {

 const [faqOne, setFaqOne] = useState(false);
 const [faqTwo, setFaqTwo] = useState(false);
 const [faqThree, setFaqThree] = useState(false);
 const [faqFour, setFaqFour] = useState(false);
 const [faqFive, setFaqFive] = useState(false);



 const landlordspageAccordiondata = [
   {
     accordionLabel: "What kind of apartments can be published on Luxuryhomes?",
     key: 1,
     state: faqOne,
     stateFunc: setFaqOne,
       accordionAnswer: {
       paragraphOne:
         "The Homelike platform lists furnished studios, apartments, houses, as well as serviced apartments, regardless of the size of your accommodation.",
       paragraphTwo:
         "Your accommodation must meet the following 10 Homelike Apartment Standards:",
       apartmentStandards: [
         "Ready to move in equipment",
         "Fast Internet",
         "Workplace",
         "Washing machine in the apartment or building or Laundry Service",
         "Lockable housing unit",
         "Local contact",
         "Final cleaning service",
         "All-in rental price",
         "Transparent leases",
         "Professional invoicing",
       ],
     },
   },
   {
     accordionLabel: "Can I visit the apartment before I book?",
     key: 2,
     state: faqTwo,
     stateFunc: setFaqTwo,
     accordionAnswer: {
       paragraphOne:
         "The Homelike platform lists furnished studios, apartments, houses, as well as serviced apartments, regardless of the size of your accommodation.",
       
     },
   },
   {
     accordionLabel:
       "Will the landlord be able to provide a certificate of residence?",
     key: 3,
     state: faqThree,
     stateFunc: setFaqThree,
     accordionAnswer: {
       paragraphOne:
         "An advertisement on our platform is free of charge and therefore risk-free for you.",
       paragraphTwo:
         "A usage fee is only charged once your apartment has been successfully placed. This fee is a percentage of the total order value (plus VAT) allocated to the landlord and depends on the market and the type of landlord. The fee is charged per month and is deducted collectively from the first month’s rent.",
       paragraphThree:
         "For information on the exact amount of the fee for your particular market, please contact us via the form below.",
       paragraphFour:
         "The usage fee also includes exclusive insurance through our partner AXA, for your optimal landlord protection.",
       paragraphFive: "Click here for more information on landlord protection.",
     },
   },
   {
     accordionLabel: "What is included in the rent?",
     key: 4,
     state: faqFour,
     stateFunc: setFaqFour,
     accordionAnswer:
       "The rental price always includes the rent and utility costs such as water, electricity, gas, heating and wifi and the service fee in case it applies to your apartment. Further costs covering the optional or mandatory services will be issued per invoice by your landlord. Please note in case your landlord requires a security deposit, you will need to pay the deposit directory to your landlord shortly before the move-in date. The deposit wil be returned to you right after you move out, on the condition that there have been no damages caused to the property during the tenancy. Further details will be provided by your landlord.",
   },
   {
     accordionLabel: "The landlord accepted my request: what now?",
     key: 5,
     state: faqFive,
     stateFunc: setFaqFive,
     accordionAnswer:
       "You can complete your booking by clicking on 'Finish booking' in your Homelike dashboard. We will guide you through billing, contact, payment details and -if applies-digital rental agreement signature to successfully complete the booking process. In case your move-in date is within 2 months, we will charge you instantly. If your move-in date is within 2 months, we wil charge you instantly. If your move-in date is later, we will charge your chosen payment method shortly before you move in.",
   },
 ];

  return (
    <section className="text-gray-900">
      <h2 className="text-3xl font-medium text-gray-900 font-palanquin mb-10">
        Frequently Asked Questions​
      </h2>
      <div className='border-x border-b'>
        {landlordspageAccordiondata.map(
          ({ key, state, stateFunc, accordionAnswer, accordionLabel }) => (
            <div key={key} className="cursor-pointer">
              <div className="accordion-border"></div>
              <div className="mt-4 mb-4 px-6" onClick={() => stateFunc(!state)}>
                <header className="font-palanquin flex justify-between">
                  <h2 className="font-semibold text-[20px]">
                    {accordionLabel}
                  </h2>
                  <button>
                    {state ? (
                      <MinusIcon className="text-2xl" />
                    ) : (
                      <PlusIcon className="text-2xl" />
                    )}
                  </button>
                </header>
                {state && (
                  <div className="font-montserrat text-[1.1rem] mt-4 mb-4 font-medium custom-trans">
                    <div>
                      <p>{accordionAnswer.paragraphOne}</p>
                      <p>{accordionAnswer.paragraphTwo}</p>
                      <p>{accordionAnswer.paragraphThree}</p>
                      <p>{accordionAnswer.paragraphFour}</p>
                      <p>{ accordionAnswer.paragraphFive}</p>
                      {accordionAnswer.apartmentStandards &&
                        <ol className='list-decimal'>
                        {accordionAnswer.apartmentStandards.map((list) => (
                          <li key={list}>{list }</li>
                        ))}
                        </ol>}

                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default LandsLordsPageAccordion