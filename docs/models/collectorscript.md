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
    envVars: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"script"*                                                     | :heavy_check_mark:                                             | Collector type: script                                         |
| `conf`                                                         | [models.ScriptCollectorConf](../models/scriptcollectorconf.md) | :heavy_check_mark:                                             | N/A                                                            |