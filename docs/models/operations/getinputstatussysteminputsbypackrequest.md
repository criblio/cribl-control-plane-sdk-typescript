# GetInputStatusSystemInputsByPackRequest

## Example Usage

```typescript
import { GetInputStatusSystemInputsByPackRequest } from "cribl-control-plane/models/operations";

let value: GetInputStatusSystemInputsByPackRequest = {
  metrics: false,
  type: false,
  pack: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Set to true <code>true</code> to include metrics for each Source. Otherwise, <code>false</code> (default).                   |
| `type`                                                                                                                       | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Set to <code>true</code> to prefix the Source <code>id</code> with the Source type. Otherwise, <code>false</code> (default). |
| `pack`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The <code>id</code> of the Pack to list.                                                                                     |