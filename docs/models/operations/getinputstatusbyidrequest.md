# GetInputStatusByIdRequest

## Example Usage

```typescript
import { GetInputStatusByIdRequest } from "cribl-control-plane/models/operations";

let value: GetInputStatusByIdRequest = {
  id: "<id>",
  metrics: true,
  type: true,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The <code>id</code> of the Source to get the status for.                                                                     |
| `metrics`                                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Set to true <code>true</code> to include metrics for each Source. Otherwise, <code>false</code> (default).                   |
| `type`                                                                                                                       | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Set to <code>true</code> to prefix the Source <code>id</code> with the Source type. Otherwise, <code>false</code> (default). |