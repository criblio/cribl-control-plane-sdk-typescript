# FunctionChainSchema

## Example Usage

```typescript
import { FunctionChainSchema } from "cribl-control-plane/models";

let value: FunctionChainSchema = {
  processor: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `processor`                                               | *string*                                                  | :heavy_check_mark:                                        | The data processor (Pack/Pipeline) to send events through |