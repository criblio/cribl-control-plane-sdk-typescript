# CountedMasterWorkerEntry

## Example Usage

```typescript
import { CountedMasterWorkerEntry } from "cribl-control-plane/models";

let value: CountedMasterWorkerEntry = {
  items: [
    {
      firstMsgTime: 884551,
      group: "<value>",
      id: "<id>",
      info: {
        architecture: "x64",
        cpus: 655075,
        cribl: {
          config: {},
          distMode: "worker",
          group: "<value>",
          guid: "<id>",
          startTime: 409281,
        },
        env: {
          "key": "<value>",
          "key1": "<value>",
        },
        hostname: "understated-waist.info",
        node: "<value>",
        platform: "linux",
        release: "<value>",
        totalmem: 130666,
      },
      lastMsgTime: 772877,
      workerProcesses: 545963,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | number of items present in the items array                   |
| `items`                                                      | [models.MasterWorkerEntry](../models/masterworkerentry.md)[] | :heavy_minus_sign:                                           | List of items in this response.                              |