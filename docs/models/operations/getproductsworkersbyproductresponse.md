# GetProductsWorkersByProductResponse

## Example Usage

```typescript
import { GetProductsWorkersByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsWorkersByProductResponse = {
  result: {
    items: [
      {
        firstMsgTime: 9898.26,
        group: "<value>",
        id: "<id>",
        info: {
          architecture: "<value>",
          cpus: 6980.43,
          cribl: {
            config: {},
            distMode: "worker",
            group: "<value>",
            guid: "<id>",
            startTime: 576212,
          },
          env: {},
          hostname: "smoggy-reach.net",
          node: "<value>",
          platform: "<value>",
          release: "<value>",
          totalmem: 8517.58,
        },
        lastMsgTime: 7747.4,
        workerProcesses: 4050.07,
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `result`                                                                    | [models.CountedMasterWorkerEntry](../../models/countedmasterworkerentry.md) | :heavy_check_mark:                                                          | N/A                                                                         |