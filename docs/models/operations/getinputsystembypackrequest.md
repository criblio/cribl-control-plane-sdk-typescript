# GetInputSystemByPackRequest

## Example Usage

```typescript
import { GetInputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: GetInputSystemByPackRequest = {
  pack: "<value>",
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                      | *string*[]                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                          | Type of Source to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |
| `pack`                                                                                                                                                      | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The <code>id</code> of the Pack to list.                                                                                                                    |