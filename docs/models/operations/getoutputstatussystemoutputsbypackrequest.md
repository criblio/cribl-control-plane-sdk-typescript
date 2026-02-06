# GetOutputStatusSystemOutputsByPackRequest

## Example Usage

```typescript
import { GetOutputStatusSystemOutputsByPackRequest } from "cribl-control-plane/models/operations";

let value: GetOutputStatusSystemOutputsByPackRequest = {
  metrics: true,
  type: true,
  pack: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                                              | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Set to true <code>true</code> to include metrics for each Destination. Otherwise, <code>false</code> (default).                        |
| `type`                                                                                                                                 | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type. Otherwise, <code>false</code> (default). |
| `pack`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The <code>id</code> of the Pack to list.                                                                                               |