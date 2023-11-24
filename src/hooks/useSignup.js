import { useState, useEffect } from "react";
import {
	togetherAuth,
	togetherStorage,
	togetherFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName, thumbnail) => {
		setError(null);
		setIsPending(true);

		try {
			// signup
			const res = await togetherAuth.createUserWithEmailAndPassword(
				email,
				password,
			);

			if (!res) {
				throw new Error("Could not complete signup process.");
			}

			// add photoURL from thumbnail
			// remember to add to signup func args
			// -- upload to firebase storage
			const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
			const img = await togetherStorage.ref(uploadPath).put(thumbnail);
			const imgURL = await img.ref.getDownloadURL();

			// add display name & profile picture to user
			await res.user.updateProfile({ displayName, photoURL: imgURL });

			// create user document
			await togetherFirestore.collection("users").doc(res.user.uid).set({
				online: true,
				displayName,
				photoURL: imgURL,
			});

			// dispatch login action
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

	return { signup, error, isPending };
};
