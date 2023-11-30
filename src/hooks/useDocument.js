import { useEffect, useState } from "react";
import { togetherFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
	// state setters
	const [doc, setDoc] = useState(null);
	const [error, setError] = useState(null);

	// hook to grab the document & data
	useEffect(() => {
		const reference = togetherFirestore.collection(collection).doc(id);

		const unsubscribe = reference.onSnapshot(
			(snapshot) => {
				setDoc({ ...snapshot.data(), id: snapshot.id });
				setError(null);
			},
			(err) => {
				console.log(err.message);
				setError("Failed to get task data.");
			},
		);

		return () => unsubscribe();
	}, [collection, id]);

	return { doc, error };
};
