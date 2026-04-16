# ConfigGroupLookups

## Example Usage

```typescript
import { ConfigGroupLookups } from "cribl-control-plane/models";

let value: ConfigGroupLookups = {
  context: "<value>",
  lookups: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `context`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The Worker or Node context for the lookup deployment.                      |
| `lookups`                                                                  | [models.ConfigGroupLookupsLookup](../models/configgrouplookupslookup.md)[] | :heavy_check_mark:                                                         | List of lookup files deployed to this context.                             |