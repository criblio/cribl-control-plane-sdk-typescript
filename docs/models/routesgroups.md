# RoutesGroups

## Example Usage

```typescript
import { RoutesGroups } from "cribl-control-plane/models";

let value: RoutesGroups = {
  index: 7663.1,
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Brief description of the Route Group.                                                                                                                   |
| `index`                                                                                                                                                 | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Relative position of the Route Group among all Route Groups. Routes are evaluated in ascending order according to the index value of their Route Group. |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Name of the Route Group.                                                                                                                                |