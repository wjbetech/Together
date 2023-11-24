import { useEffect, useState, useRef } from "react";
import { togetherFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
	const [documents, setDocuments] = useState(null);
	const [error, setError] = useState(null);

	// if we don't use a ref --> infinite loop in useEffect
	// _query is an array and is "different" on every function call
	const query = useRef(_query).current;
	const orderBy = useRef(_orderBy).current;

	useEffect(() => {
		let ref = togetherFirestore.collection(collection);

		if (query) {
			ref = ref.where(...query);
		}
		if (orderBy) {
			ref = ref.orderBy(...orderBy);
		}

		const unsubscribe = ref.onSnapshot(
			(snapshot) => {
				const results = [];
				// biome-ignore lint/complexity/noForEach: <explanation>
				snapshot.docs.forEach((doc) => {
					results.push({ ...doc.data(), id: doc.id });
				});

				// update state
				setDocuments(results);
				setError(null);
			},
			(error) => {
				console.log(error);
				setError("Data could not be retrieved.");
			},
		);

		// unsubscribe on unmount
		return () => unsubscribe();
	}, [collection, query, orderBy]);

	return { documents, error };
};
