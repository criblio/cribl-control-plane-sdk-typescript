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
        port: 5454.97,
      },
      backups: {},
      pii: {},
      proxy: {
        useEnvVars: false,
      },
      rollback: {},
      shutdown: {
        drainTimeout: 5731.01,
      },
      sni: {},
      system: {
        intercom: true,
        upgrade: "false",
      },
      tls: {},
      upgradeGroupSettings: {},
      upgradeSettings: {},
      workers: {
        count: 6221.13,
        memory: 2914.29,
        minimum: 6135.82,
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