# DashboardGroups

## Example Usage

```typescript
import { DashboardGroups } from "cribl-control-plane/models";

let value: DashboardGroups = {
  action: {
    label: "<value>",
    params: {
      "key": "<value>",
      "key1": "<value>",
    },
    target: "<value>",
  },
  collapsed: false,
  inputId: "<id>",
  title: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `action`                             | [models.Action](../models/action.md) | :heavy_minus_sign:                   | N/A                                  |
| `collapsed`                          | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `inputId`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `title`                              | *string*                             | :heavy_check_mark:                   | N/A                                  |