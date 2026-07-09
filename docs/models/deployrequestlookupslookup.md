# DeployRequestLookupsLookup

## Example Usage

```typescript
import { DeployRequestLookupsLookup } from "cribl-control-plane/models";

let value: DeployRequestLookupsLookup = {
  file: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `file`                                                 | *string*                                               | :heavy_check_mark:                                     | Unique identifier (file name) of the lookup to deploy. |
| `version`                                              | *string*                                               | :heavy_check_mark:                                     | Version of the lookup file to deploy.                  |