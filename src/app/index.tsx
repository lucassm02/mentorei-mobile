import { Collection, getItem } from "@/storages";
import { UserContext, type User } from "@/storages/context";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { Redirect, SplashScreen } from "expo-router";

import { useContext, useEffect, useState } from "react";
import Onboarding from "./(public)/onboarding";

export default function Root() {
  const { user, setUser } = useContext(UserContext);

  const [storageLoadingHasFinished, setStorageLoadingHasFinished] =
    useState(false);

  useEffect(() => {
    if (storageLoadingHasFinished) {
      SplashScreen.hideAsync();
    }
  }, [storageLoadingHasFinished]);

  useEffect(() => {
    if (__DEV__) {
      loadDevMessages();
      loadErrorMessages();
    }

    getStorage();
  }, []);

  async function getStorage() {
    // setItem(Collection.USER, null);
    const store: User | undefined = await getItem(Collection.USER);

    if (!store) {
      setUser(null);
      setStorageLoadingHasFinished(true);
      return;
    }

    setUser(store);
    setStorageLoadingHasFinished(true);
  }

  function ComponentSwitch() {
    if (user === null) return <Onboarding />;
    return <Redirect href="/(private)/home" />;
  }

  return <ComponentSwitch />;
}
