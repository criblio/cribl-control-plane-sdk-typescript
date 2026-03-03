# ListOutputRequest

## Example Usage

```typescript
import { ListOutputRequest } from "cribl-control-plane/models/operations";

let value: ListOutputRequest = {};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [models.DestinationType](../../models/destinationtype.md)                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Type of Destination to include in the results. Each request can include only one <code>type</code> parameter; multiple parameters per request are not supported. |