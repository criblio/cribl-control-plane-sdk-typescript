# CountedSystemSettingsConf

## Example Usage

```typescript
import { CountedSystemSettingsConf } from "cribl-control-plane/models";

let value: CountedSystemSettingsConf = {
  items: [
    {
      api: {
        disabled: true,
        host: "fixed-crocodile.name",
        port: 545497,
      },
      backups: {},
      pii: {},
      proxy: {
        useEnvVars: false,
      },
      rollback: {},
      shutdown: {
        drainTimeout: 573101,
      },
      sni: {},
      system: {
        intercom: true,
        upgrade: "api",
      },
      tls: {},
      upgradeGroupSettings: {},
      upgradeSettings: {},
      workers: {
        count: 622113,
        memory: 291429,
        minimum: 613582,
      },
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *number*                                                       | :heavy_minus_sign:                                             | number of items present in the items array                     |
| `items`                                                        | [models.SystemSettingsConf](../models/systemsettingsconf.md)[] | :heavy_minus_sign:                                             | List of items in this response.                                |