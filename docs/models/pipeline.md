# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
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
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `conf`                                           | [models.PipelineConf](../models/pipelineconf.md) | :heavy_check_mark:                               | N/A                                              |