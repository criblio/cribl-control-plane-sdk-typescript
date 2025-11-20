# NodeProvidedInfoAws

## Example Usage

```typescript
import { NodeProvidedInfoAws } from "cribl-control-plane/models";

let value: NodeProvidedInfoAws = {
  enabled: true,
  instanceId: "<id>",
  region: "<value>",
  tags: {
    "key": "<value>",
  },
  type: "<value>",
  zone: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `enabled`                | *boolean*                | :heavy_check_mark:       | N/A                      |
| `instanceId`             | *string*                 | :heavy_check_mark:       | N/A                      |
| `region`                 | *string*                 | :heavy_check_mark:       | N/A                      |
| `tags`                   | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `type`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `zone`                   | *string*                 | :heavy_check_mark:       | N/A                      |