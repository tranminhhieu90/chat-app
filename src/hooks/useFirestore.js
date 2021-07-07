import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
const useFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createdAt");
    if (condition) {
      if (!condition.compareValue || condition.compareValue.length === 0)
        return;
      collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unSubscribed = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    });
    setDocuments(documents);
    return unSubscribed;
  }, [collection, condition]);

  return documents;
};

export default useFirestore;
