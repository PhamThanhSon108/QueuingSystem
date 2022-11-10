import { async } from "@firebase/util";
import { query } from "express";
import { collection, doc, getDocs, setDoc, where } from "firebase/firestore";
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
