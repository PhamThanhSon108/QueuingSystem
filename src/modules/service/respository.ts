import { async } from "@firebase/util";

import {
  collection,
  doc,
  getDocs,
  setDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/config";
export const getServices = async () => {
  let services: Array<undefined | object> = [];
  const q = collection(db, "services");

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    services.push(doc.data());
  });
  return services;
};

export const addService = async ({
  service,
  id,
}: {
  service: object;
  id: string;
}) => {
  return setDoc(doc(db, "services", id), { ...service, id });
};

export const updateService = async ({
  service,
  id,
}: {
  service: object;
  id: string;
}) => {
  return setDoc(doc(db, "services", id), { ...service, id });
};

export const getNumbersProvidedbyService = async ({
  id,
}: {
  id: string | undefined;
}) => {
  let numbers: Array<undefined | object> = [];
  const provideNumbersCollection = query(
    collection(db, "provideNumbers"),
    where("service.id", "==", id)
  );

  const querySnapshot = await getDocs(provideNumbersCollection);
  querySnapshot.forEach((doc) => {
    numbers.push(doc.data());
  });
  console.log(numbers, ["numbers"]);
  return numbers;
};
