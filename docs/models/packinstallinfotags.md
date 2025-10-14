# PackInstallInfoTags

## Example Usage

```typescript
import { PackInstallInfoTags } from "cribl-control-plane/models";

let value: PackInstallInfoTags = {
  dataType: [],
  domain: [
    "untried-appliance.com",
    "wiggly-hydrant.name",
  ],
  streamtags: [
    "<value 1>",
  ],
  technology: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `dataType`         | *string*[]         | :heavy_check_mark: | N/A                |
| `domain`           | *string*[]         | :heavy_minus_sign: | N/A                |
| `streamtags`       | *string*[]         | :heavy_minus_sign: | N/A                |
| `technology`       | *string*[]         | :heavy_minus_sign: | N/A                |