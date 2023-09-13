import { Collection, getItem } from "@/storages";
import { UserContext, type User } from "@/storages/context";
import { SplashScreen } from "expo-router";
import { useContext, useEffect, useState } from "react";
import LookForMentor from "./look-for-mentor";
import Onboarding from "./onboarding";

export default function Root() {
  const { user, setUserData } = useContext(UserContext);

  const [storageLoadingHasFinished, setStorageLoadingHasFinished] =
    useState(false);

  useEffect(() => {
    if (storageLoadingHasFinished) {
      SplashScreen.hideAsync();
    }
  }, [storageLoadingHasFinished]);

  useEffect(() => {
    getStorage();
  }, []);

  async function getStorage() {
    const store: User | undefined = await getItem(Collection.USER);
    // await setItem(Collection.USER, null);

    if (!store) {
      setUserData(null);
      setStorageLoadingHasFinished(true);
      return;
    }

    setUserData(store);
    setStorageLoadingHasFinished(true);
  }

  function ComponentSwitch() {
    if (user === null) return <Onboarding />;
    return <LookForMentor />;
  }

  return <ComponentSwitch />;
}
