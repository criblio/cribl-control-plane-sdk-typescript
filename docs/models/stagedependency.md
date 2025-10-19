# StageDependency

## Example Usage

```typescript
import { StageDependency } from "cribl-control-plane/models";

let value: StageDependency = {
  dependentFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "<id>",
  type: "stage-scalar",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `dependentFields`                                              | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | [models.StageDependencyType](../models/stagedependencytype.md) | :heavy_check_mark:                                             | N/A                                                            |