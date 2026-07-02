# PipelineGroups

## Example Usage

```typescript
import { PipelineGroups } from "cribl-control-plane/models";

let value: PipelineGroups = {
  name: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Name of the group.                                                                   |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Brief description of the group.                                                      |
| `disabled`                                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | If <code>true</code>, disable all items in the group. Otherwise, <code>false</code>. |