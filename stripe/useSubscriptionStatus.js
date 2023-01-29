import getUserSubscription from "./getUserSubscription";
import { auth } from "@/config/firebase-config";
import { useState, useEffect } from "react";


export default function useSubscriptionStatus(){

    const [subscriptionStatus, setSubscriptionStatus] = useState(false)

    useEffect(
      () => {
        const checkSubscriptionStatus = async function(){
            setSubscriptionStatus(await getUserSubscription)
        }
        checkSubscriptionStatus();
      }  , [auth.currentUser]
    );
    return subscriptionStatus
}