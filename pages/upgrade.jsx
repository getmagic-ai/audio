import { createElement, useState } from "react";
import { createCheckoutSession } from "@/stripe/createCheckoutSession";
import { auth } from "../config/firebase-config";

export default function Upgrade(props) {
  const [upgradestatus, setUpgradestatus] = useState("free"); //make these status as enums later instead of strings

  function handleUpgrade(upgradeType) {
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
    <div className="flex flex-col">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
        onClick={() => handleUpgrade("pro")}
      >
        Upgrade to Pro
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
        onClick={() => handleUpgrade("premium")}
      >
        Upgrade to Premium
      </button>
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-lg font-medium">Pricing</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Plan</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr className={upgradestatus === "free" ? "bg-blue-200" : ""}>
              <td className="p-2">Free</td>
              <td className="p-2">$0</td>
              <td className="p-2">
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                </ul>
              </td>
            </tr>
            <tr className={upgradestatus === "pro" ? "bg-blue-200" : ""}>
              <td className="p-2">Pro</td>
              <td className="p-2">$5</td>
              <td className="p-2">
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
              </td>
            </tr>
            <tr className={upgradestatus === "premium" ? "bg-blue-200" : ""}>
              <td className="p-2">Premium</td>
              <td className="p-2">$20</td>
              <td className="p-2">
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
