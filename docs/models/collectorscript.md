# CollectorScript

Script collector configuration

## Example Usage

```typescript
import { CollectorScript } from "cribl-control-plane/models";

let value: CollectorScript = {
  type: "script",
  conf: {
    discoverScript: "<value>",
    collectScript: "<value>",
    shell: "<value>",
    envVars: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  destructive: true,
  encoding: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"script"*                                                     | :heavy_check_mark:                                             | Collector type                                                 |
| `conf`                                                         | [models.ScriptCollectorConf](../models/scriptcollectorconf.md) | :heavy_check_mark:                                             | N/A                                                            |
| `destructive`                                                  | *boolean*                                                      | :heavy_minus_sign:                                             | Delete any files collected (where applicable)                  |
| `encoding`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Character encoding to use when parsing ingested data.          |