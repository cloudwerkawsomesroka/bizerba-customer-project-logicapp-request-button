# CloudWerk SPFx Update

## Prerequisites

* [NodeJS](https://nodejs.org/en/download/releases/) (Recommend LTS 16.x)

    > * Node.js v16.16+

* Setup SharePoint Environment by following the [instructions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant).

 To install the TeamsFx CLI, use the npm package manager:
    ```npm install -g @microsoft/teamsfx-cli```

1. Provision the project to create an app in Teams App Studio.

    ```teamsfx provision```

1. Deploy your project.
    > This step will generate a SharePoint package (*.sppkg) under `sharepoint/solution` folder. The cli will automatically upload and deploy it to your tenant App Catalog site. Only tenant App Catalog site admin has permission to do it.

    ```teamsfx deploy```

1. Publish your app to Teams App Studio.

    ```teamsfx publish```
