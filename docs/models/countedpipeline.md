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
        output: "<value>",
        description:
          "self-confidence certify seagull bah once steeple miskey fit fowl dispose",
        streamtags: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        functions: [
          {
            filter: "<value>",
            id: "notify",
            description:
              "zen priesthood characterization fictionalize than exasperation oh fervently afterwards before",
            disabled: true,
            final: true,
            conf: {
              group: "<value>",
              notificationId: "<id>",
              searchId: "<id>",
              savedQueryId: "<id>",
              trigger: "<value>",
              triggerType: "resultsCount",
              triggerComparator: ">",
              triggerCount: 8364.23,
              resultsLimit: 5484.73,
              searchUrl: "https://equatorial-teammate.net/",
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
              "march meanwhile potentially although trouser wearily furthermore weary whereas",
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