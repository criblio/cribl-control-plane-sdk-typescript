# EventBreakerExistingOrNewExisting

## Example Usage

```typescript
import { EventBreakerExistingOrNewExisting } from "cribl-control-plane/models";

let value: EventBreakerExistingOrNewExisting = {
  existingOrNew: "existing",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `existingOrNew`                                   | *"existing"*                                      | :heavy_check_mark:                                | N/A                                               |
| `existingRule`                                    | *string*                                          | :heavy_minus_sign:                                | N/A                                               |
| `shouldMarkCriblBreaker`                          | *boolean*                                         | :heavy_minus_sign:                                | Add this Function name to the cribl_breaker field |