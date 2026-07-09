# DeployRequest

## Example Usage

```typescript
import { DeployRequest } from "cribl-control-plane/models";

let value: DeployRequest = {
  version: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `lookups`                                                                       | [models.DeployRequestLookups](../models/deployrequestlookups.md)[]              | :heavy_minus_sign:                                                              | Optional list of lookup file deployments to include with the commit deployment. |
| `version`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | Commit hash to deploy to the Worker Group, Outpost Group, or Edge Fleet.        |