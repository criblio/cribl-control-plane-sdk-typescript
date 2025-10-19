# Pipelines

## Example Usage

```typescript
import { Pipelines } from "cribl-control-plane/models";

let value: Pipelines = {
  combined: {
    id: "<id>",
    conf: {
      asyncFuncTimeout: 930714,
      description: "independence mad spring owlishly expert yowza",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      functions: [
        {
          id: "<id>",
          description: "poorly huzzah disinherit considering pomelo barring",
          disabled: true,
          final: true,
          conf: {},
          groupId: "<id>",
        },
      ],
      groups: {
        "key": {
          name: "<value>",
          description: "bah out great",
          disabled: false,
        },
      },
    },
  },
  coordinated: {
    id: "<id>",
    conf: {
      asyncFuncTimeout: 930714,
      description: "independence mad spring owlishly expert yowza",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      functions: [
        {
          id: "<id>",
          description: "poorly huzzah disinherit considering pomelo barring",
          disabled: true,
          final: true,
          conf: {},
          groupId: "<id>",
        },
      ],
      groups: {
        "key": {
          name: "<value>",
          description: "bah out great",
          disabled: false,
        },
      },
    },
  },
  federated: {
    id: "<id>",
    conf: {
      asyncFuncTimeout: 930714,
      description: "independence mad spring owlishly expert yowza",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      functions: [
        {
          id: "<id>",
          description: "poorly huzzah disinherit considering pomelo barring",
          disabled: true,
          final: true,
          conf: {},
          groupId: "<id>",
        },
      ],
      groups: {
        "key": {
          name: "<value>",
          description: "bah out great",
          disabled: false,
        },
      },
    },
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `combined`                               | [models.Pipeline](../models/pipeline.md) | :heavy_minus_sign:                       | N/A                                      |
| `coordinated`                            | [models.Pipeline](../models/pipeline.md) | :heavy_minus_sign:                       | N/A                                      |
| `federated`                              | [models.Pipeline](../models/pipeline.md) | :heavy_minus_sign:                       | N/A                                      |