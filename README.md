## Reproduction for app variants + env variables using EAS build

This is a minimal reproduction for a bug I'm experiencing with EAS build. I'm trying to build a variant of my app with different env variables, but the build fails with an error. The command I am running is: `NODE_ENV=development eas build --platform ios --profile development --local`

And this is the error I get:

```
[CONFIGURE_XCODE_PROJECT] Configuring Xcode project
[CONFIGURE_XCODE_PROJECT] Assigning provisioning profile '*[expo] com.plrdev.appvariant.dev AppStore 2024-01-08T21:20:00.273Z' (Apple Team ID: 8WMD2R55Z9) to target 'AppVariantDev'
[CONFIGURE_XCODE_PROJECT]
Error: Could not find target 'AppVariantDev' in project.pbxproj
```

First commit is a working solution with just the dynamic app config, supporting the app variants. Second commit is the one that fails with the error above, adding the env variables, nothing else.

The culprit seems to be if .env has APP_VARIANT defined, the build fails. If I remove that, the build succeeds. If .env also has APP_VARIANT=development, it works. It's as if the project config would use .env value when generating the ios project, so it ends up as AppVariant, but when trying to config it, it is referring to the right app variant (AppVariantDev), but failing since that one wasn't generated.
