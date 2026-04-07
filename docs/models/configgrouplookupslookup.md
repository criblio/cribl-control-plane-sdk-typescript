# ConfigGroupLookupsLookup

## Example Usage

```typescript
import { ConfigGroupLookupsLookup } from "cribl-control-plane/models";

let value: ConfigGroupLookupsLookup = {
  file: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `deployedVersion`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | Version of the lookup file currently deployed on the Worker or Node. |
| `file`                                                               | *string*                                                             | :heavy_check_mark:                                                   | File name of the deployed lookup.                                    |
| `version`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | Version of the lookup file currently staged for deployment.          |