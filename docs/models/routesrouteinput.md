# RoutesRouteInput

## Example Usage

```typescript
import { RoutesRouteInput } from "cribl-control-plane/models";

let value: RoutesRouteInput = {
  name: "<value>",
  pipeline: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `disabled`                                                                                | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Disable this routing rule                                                                 |
| `filter`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | JavaScript expression to select data to route                                             |
| `pipeline`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | Pipeline to send the matching data to                                                     |
| `enableOutputExpression`                                                                  | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Enable to use a JavaScript expression that evaluates to the name of the Description below |
| `output`                                                                                  | *any*                                                                                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `outputExpression`                                                                        | *any*                                                                                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `final`                                                                                   | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Flag to control whether the event gets consumed by this Route (Final), or cloned into it  |
| `additionalProperties`                                                                    | Record<string, *any*>                                                                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |