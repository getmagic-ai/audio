import {auth} from '../config/firebase-config'


export default async function getUserSubscription(){

const decodedToken = await auth.currentUser?.getIdTokenResult()
return decodedToken.claims.stripeRole;


}