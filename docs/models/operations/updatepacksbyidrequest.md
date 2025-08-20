# UpdatePacksByIdRequest

## Example Usage

```typescript
import { UpdatePacksByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePacksByIdRequest = {
  id: "<id>",
  source: "<value>",
  minor: "<value>",
  spec: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Pack to upgrade.                 |
| `source`                                                    | *string*                                                    | :heavy_minus_sign:                                          | body string required Pack source                            |
| `minor`                                                     | *string*                                                    | :heavy_minus_sign:                                          | body boolean optional Only upgrade to minor/patch versions  |
| `spec`                                                      | *string*                                                    | :heavy_minus_sign:                                          | body string optional Specify a branch, tag or a semver spec |