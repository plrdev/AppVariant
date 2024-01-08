import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: IS_DEV ? "AppVariant Dev" : "AppVariant",
    slug: "appvariant",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    ios: {
      bundleIdentifier: IS_DEV
        ? "com.plrdev.appvariant.dev"
        : "com.plrdev.appvariant",
    },
    extra: {
      eas: {
        projectId: "7e83e99b-e9d7-411d-8467-ff1cc4ffa813",
      },
    },
  };
};
