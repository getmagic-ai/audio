import { createElement, useState } from "react";
import { createCheckoutSession } from "@/stripe/createCheckoutSession";
import { auth } from "@/config/firebase-config";

import { CheckIcon } from "@heroicons/react/24/solid";

const tiers = [
  {
    name: "Pro",
    status: "pro",
    priceMonthly: 24,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
    ],
  },
  {
    name: "Premium",
    status: "premium",
    priceMonthly: 32,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
    ],
  },
];

export default function Upgrade(props) {
  const [upgradestatus, setUpgradestatus] = useState("free"); //make these status as enums later instead of strings

  function handleUpgrade(upgradeType) {
    console.log('in handle upgrade.... new on 30 jan 2023')
    switch (upgradeType) {
      case "pro":
        setUpgradestatus("pro");
        const user = auth.currentUser;
        if (user !== null) {
          createCheckoutSession(user.uid);
        }
        break;
      case "premium":
        setUpgradestatus("premium");
        break;
    }
  }

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-3xl font-semibold text-gray-50'>Pricing Plans</h1>
      <button
        className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'
        onClick={() => handleUpgrade("pro")}
      >
        Upgrade to Pro
      </button>
      <button
        className='bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'
        onClick={() => handleUpgrade("premium")}
      >
        Upgrade to Premium
      </button>
      <div className='mt-12 space-y-4 grid grid-cols-1 gap-6'>
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className='border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200'
          >
            <div className='p-6'>
              <h2 className='text-lg leading-6 font-medium text-gray-50'>
                {tier.name}
              </h2>
              <p className='mt-4 text-sm text-gray-500'>{tier.description}</p>
              <p className='mt-8'>
                <span className='text-4xl font-extrabold text-gray-50'>
                  ${tier.priceMonthly}
                </span>{" "}
                <span className='text-base font-medium text-gray-500'>/mo</span>
              </p>
              <button
                onClick={() => handleUpgrade(tier.status)}
                className='mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900'
              >
                Buy {tier.name}
              </button>
            </div>
            <div className='pt-6 pb-8 px-6'>
              <h3 className='text-xs font-medium text-gray-50 tracking-wide uppercase'>
                What's included
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {tier.includedFeatures.map((feature) => (
                  <li key={feature} className='flex space-x-3'>
                    <CheckIcon
                      className='flex-shrink-0 h-5 w-5 text-green-500'
                      aria-hidden='true'
                    />
                    <span className='text-sm text-gray-500'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
