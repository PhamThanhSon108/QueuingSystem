import { async } from "@firebase/util";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
  where,
  query,
} from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "../../firebase/config";

import { getAuth } from "firebase/auth";
import axios from "axios";
export const writeLog = async ({ log }: { log: string }) => {
  //time
  //ip
  //work
  //user

  const res = await axios.get("https://geolocation-db.com/json/");
  const currentIp = res.data.IPv4;
  const currentUserEmail = getAuth().currentUser?.email;
  const user: Array<any> | undefined = [];

  if (currentUserEmail) {
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", currentUserEmail)
    );
    const userQuerySnapshot = await getDocs(userQuery);
    userQuerySnapshot.forEach((doc) => {
      user.push(doc.data());
    });
  } else return;

  setDoc(doc(db, "userLogs", v4()), {
    createdAt: Timestamp.now(),
    ipAddress: currentIp,
    log,
    userEmail: currentUserEmail,
    userName: user[0]?.userName,
  });
};
export const getDevices = async () => {
  let devices: Array<undefined | object> = [];
  const q = collection(db, "devices");

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    devices.push(doc.data());
  });
  return devices;
};

export const addDevice = async ({
  device,
  id,
}: {
  device: object;
  id: string;
}) => {
  writeLog({ log: "Thêm thiết bị" });
  return await setDoc(doc(db, "devices", id), {
    ...device,
    id,
    statusActive: "active",
    statusConect: "conected",
  });
};

export const updateDevice = async ({
  device,
  id,
}: {
  device: object;
  id: string;
}) => {
  writeLog({ log: "Điều chỉnh thông tin thiết bị" });
  return await setDoc(doc(db, "devices", id), { ...device, id });
};

export const getDetailProvideNumberOfDevice = async ({
  id,
}: {
  id: string | undefined;
}) => {
  if (id) {
    const numberDoc = await getDoc(doc(db, "provideNumbers", id));
    return numberDoc.data();
  }
};
