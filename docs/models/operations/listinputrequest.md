# ListInputRequest

## Example Usage

```typescript
import { ListInputRequest } from "cribl-control-plane/models/operations";

let value: ListInputRequest = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                      | *string*[]                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                          | Type of Source to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |