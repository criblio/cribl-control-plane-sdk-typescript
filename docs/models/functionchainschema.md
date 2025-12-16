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
| `processor`                                               | *string*                                                  | :heavy_minus_sign:                                        | The data processor (Pack/Pipeline) to send events through |