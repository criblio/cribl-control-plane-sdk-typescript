# GetOutputStatusSystemOutputsByPackAndIdRequest

## Example Usage

```typescript
import { GetOutputStatusSystemOutputsByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetOutputStatusSystemOutputsByPackAndIdRequest = {
  id: "<id>",
  metrics: true,
  type: true,
  pack: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The <code>id</code> of the Destination to get the status for.                                                                          |
| `metrics`                                                                                                                              | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Set to true <code>true</code> to include metrics for each Destination. Otherwise, <code>false</code> (default).                        |
| `type`                                                                                                                                 | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type. Otherwise, <code>false</code> (default). |
| `pack`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The <code>id</code> of the Pack to get.                                                                                                |