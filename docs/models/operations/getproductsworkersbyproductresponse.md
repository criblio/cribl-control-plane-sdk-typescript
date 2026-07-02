# GetProductsWorkersByProductResponse

## Example Usage

```typescript
import { GetProductsWorkersByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsWorkersByProductResponse = {
  result: {
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
    count: 576212,
    offset: 136388,
    limit: 759185,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `result`                                             | *operations.GetProductsWorkersByProductResponseBody* | :heavy_check_mark:                                   | N/A                                                  |