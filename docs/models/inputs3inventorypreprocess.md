# InputS3InventoryPreprocess

## Example Usage

```typescript
import { InputS3InventoryPreprocess } from "cribl-control-plane/models";

let value: InputS3InventoryPreprocess = {
  command: "<value>",
  args: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `command`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Command to feed the data through (via stdin) and process its output (stdout) |
| `args`                                                                       | *string*[]                                                                   | :heavy_minus_sign:                                                           | Arguments to be added to the custom command                                  |