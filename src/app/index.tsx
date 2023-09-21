import { Collection, getItem } from "@/storages";
import { UserContext, type User } from "@/storages/context";
import { Redirect, SplashScreen } from "expo-router";

import { useContext, useEffect, useState } from "react";
import Onboarding from "./(public)/onboarding";

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
    return <Redirect href="/(private)/home" />;
  }

  return <ComponentSwitch />;
}
