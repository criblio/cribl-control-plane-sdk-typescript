# PackUninstallInfo

## Example Usage

```typescript
import { PackUninstallInfo } from "cribl-control-plane/models";

let value: PackUninstallInfo = {
  id: "<id>",
  source: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | Unique identifier for the Pack.                      |
| `source`                                             | *string*                                             | :heavy_check_mark:                                   | Source from which the Pack was originally installed. |