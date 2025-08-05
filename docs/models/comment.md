# Comment

## Example Usage

```typescript
import { Comment } from "cribl-control-plane/models";

let value: Comment = {
  comment:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `comment`                                           | *string*                                            | :heavy_minus_sign:                                  | Optional, short description of this Route's purpose |
| `additionalProperties`                              | Record<string, *any*>                               | :heavy_minus_sign:                                  | N/A                                                 |