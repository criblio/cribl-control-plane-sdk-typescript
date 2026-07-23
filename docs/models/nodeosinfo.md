# NodeOsInfo

## Example Usage

```typescript
import { NodeOsInfo } from "cribl-control-plane/models";

let value: NodeOsInfo = {
  addresses: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `addresses`                                              | *string*[]                                               | :heavy_check_mark:                                       | Network addresses reported by the node operating system. |