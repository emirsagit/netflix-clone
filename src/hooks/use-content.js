import { useState, useContext, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [data, setData] = useState([]);
  const { fireStore } = useContext(FirebaseContext);

  async function fetchData() {
    const querySnapshot = await getDocs(collection(fireStore, target));
    setData(
      querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      })
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { [target]: data };
}
