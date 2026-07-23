# DeployRequestLookups

## Example Usage

```typescript
import { DeployRequestLookups } from "cribl-control-plane/models";

let value: DeployRequestLookups = {
  context: "<value>",
  lookups: [],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `context`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Lookup context to deploy. Use <code>cribl</code> for the default context or a Pack <code>id</code> for Pack lookups. |
| `lookups`                                                                                                            | [models.DeployRequestLookupsLookup](../models/deployrequestlookupslookup.md)[]                                       | :heavy_check_mark:                                                                                                   | List of lookup files to deploy in this context.                                                                      |