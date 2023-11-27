import { useState, useEffect } from "react";
import { togetherAuth, togetherFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			// try to login with provided credentials, return a response
			// that contains the "user" matching those credentials
			const res = await togetherAuth.signInWithEmailAndPassword(
				email,
				password,
			);

			// go to firestore and find the uid of our user in "users"
			// set that user's online status to true if logged in
			await togetherFirestore
				.collection("users")
				.doc(res.user.uid)
				.update({ online: true });

			// dispatch login action containing our user data
			dispatch({ type: "LOGIN", payload: res.user });

			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				setError(err.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { login, isPending, error };
};
