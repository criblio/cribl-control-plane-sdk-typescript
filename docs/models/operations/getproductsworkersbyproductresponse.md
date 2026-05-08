# GetProductsWorkersByProductResponse

## Example Usage

```typescript
import { GetProductsWorkersByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsWorkersByProductResponse = {
  result: {
    items: [
      {
        firstMsgTime: 9818.54,
        group: "<value>",
        id: "<id>",
        info: {
          architecture: "<value>",
          cpus: 2715.21,
          cribl: {
            config: {},
            distMode: "worker",
            group: "<value>",
            guid: "<id>",
            startTime: 777671,
          },
          env: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          hostname: "suburban-courtroom.org",
          node: "<value>",
          platform: "<value>",
          release: "<value>",
          totalmem: 3679.01,
        },
        lastMsgTime: 4384.07,
        workerProcesses: 8294.01,
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `result`                                                                    | [models.CountedMasterWorkerEntry](../../models/countedmasterworkerentry.md) | :heavy_check_mark:                                                          | N/A                                                                         |