# PipelineGroups

## Example Usage

```typescript
import { PipelineGroups } from "cribl-control-plane/models";

let value: PipelineGroups = {
  name: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `name`                          | *string*                        | :heavy_check_mark:              | N/A                             |
| `description`                   | *string*                        | :heavy_minus_sign:              | Short description of this group |
| `disabled`                      | *boolean*                       | :heavy_minus_sign:              | Whether this group is disabled  |