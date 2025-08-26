# PackInfoTags

## Example Usage

```typescript
import { PackInfoTags } from "cribl-control-plane/models";

let value: PackInfoTags = {
  dataType: [
    "boolean",
  ],
  domain: [
    "fixed-pigpen.org",
  ],
  streamtags: [
    "<value 1>",
  ],
  technology: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `dataType`         | *string*[]         | :heavy_check_mark: | N/A                |
| `domain`           | *string*[]         | :heavy_minus_sign: | N/A                |
| `streamtags`       | *string*[]         | :heavy_minus_sign: | N/A                |
| `technology`       | *string*[]         | :heavy_check_mark: | N/A                |