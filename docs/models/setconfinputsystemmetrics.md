# SetConfInputSystemMetrics

## Example Usage

```typescript
import { SetConfInputSystemMetrics } from "cribl-control-plane/models";

let value: SetConfInputSystemMetrics = {
  name: "<value>",
  filter: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `name`                  | *string*                | :heavy_check_mark:      | Set Name                |
| `filter`                | *string*                | :heavy_check_mark:      | Filter Expression       |
| `includeChildren`       | *boolean*               | :heavy_minus_sign:      | Include Child Processes |