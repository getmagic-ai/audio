import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { userPrefDb } from '@/config/firebase-newsletter-preference-config'

export default function useFetchData() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const { currentUser } = useAuth()

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'users', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setData(docSnap.data().data)
                    // setData('data' in docSnap.data() ? docSnap.data().data : {})
                } else {
                    setData({})
                }
            } catch (err) {
                setError('Failed to load data')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { loading, error, data, setData }
}