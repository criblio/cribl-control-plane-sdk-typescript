# PipelineFunctionNotify

## Example Usage

```typescript
import { PipelineFunctionNotify } from "cribl-control-plane/models";

let value: PipelineFunctionNotify = {
  id: "notify",
  description:
    "friendly bathhouse but preside structure reprove scarily ouch jet pip",
  disabled: false,
  final: true,
  conf: {
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "resultsCount",
    triggerComparator: ">",
    searchUrl: "https://negligible-collaboration.biz",
    message: "<value>",
    authToken: "<value>",
    messagesEndpoint: "<value>",
    tenantId: "<id>",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"notify"*                                                                                   | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.NotifyConfiguration](../models/notifyconfiguration.md)                               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |