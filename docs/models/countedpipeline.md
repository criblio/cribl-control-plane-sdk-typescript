# CountedPipeline

## Example Usage

```typescript
import { CountedPipeline } from "cribl-control-plane/models";

let value: CountedPipeline = {
  count: 53436,
  items: [
    {
      id: "<id>",
      conf: {
        asyncFuncTimeout: 772456,
        description:
          "self-confidence certify seagull bah once steeple miskey fit fowl dispose",
        streamtags: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        functions: [
          {
            filter: "true",
            id: "notify",
            description:
              "zen priesthood characterization fictionalize than exasperation oh fervently afterwards before",
            disabled: true,
            final: true,
            conf: {
              group: "default",
              notificationId: "main",
              searchId: "<id>",
              savedQueryId: "<id>",
              trigger: "<value>",
              triggerType: "resultsCount",
              triggerComparator: ">",
              triggerCount: 0,
              resultsLimit: 50,
              searchUrl: "https://negligible-collaboration.biz",
              message: "<value>",
              authToken: "<value>",
              messagesEndpoint: "<value>",
              tenantId: "<id>",
            },
            groupId: "<id>",
          },
        ],
        groups: {
          "key": {
            name: "<value>",
            description:
              "ack regularly uh-huh naturally kettledrum before frenetically beard inasmuch quickly",
            disabled: true,
          },
        },
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.Pipeline](../models/pipeline.md)[] | :heavy_minus_sign:                         | N/A                                        |