# RouteConf

## Example Usage

```typescript
import { RouteConf } from "cribl-control-plane/models";

let value: RouteConf = {
  clones: [
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {},
  ],
  context: "<value>",
  description: "sympathetically purple major swift",
  disabled: false,
  enableOutputExpression: false,
  filter: "<value>",
  final: true,
  groupId: "<id>",
  id: "<id>",
  name: "<value>",
  output: "<value>",
  outputExpression: "<value>",
  pipeline: "<value>",
  toGroupContext: true,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `clones`                   | Record<string, *string*>[] | :heavy_minus_sign:         | N/A                        |
| `context`                  | *string*                   | :heavy_minus_sign:         | N/A                        |
| `description`              | *string*                   | :heavy_minus_sign:         | N/A                        |
| `disabled`                 | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `enableOutputExpression`   | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `filter`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `final`                    | *boolean*                  | :heavy_check_mark:         | N/A                        |
| `groupId`                  | *string*                   | :heavy_minus_sign:         | N/A                        |
| `id`                       | *string*                   | :heavy_check_mark:         | N/A                        |
| `name`                     | *string*                   | :heavy_check_mark:         | N/A                        |
| `output`                   | *string*                   | :heavy_minus_sign:         | N/A                        |
| `outputExpression`         | *string*                   | :heavy_minus_sign:         | N/A                        |
| `pipeline`                 | *string*                   | :heavy_check_mark:         | N/A                        |
| `toGroupContext`           | *boolean*                  | :heavy_minus_sign:         | N/A                        |