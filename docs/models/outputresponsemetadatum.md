# OutputResponseMetadatum

## Example Usage

```typescript
import { OutputResponseMetadatum } from "cribl-control-plane/models";

let value: OutputResponseMetadatum = {
  name: "hostname",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [models.OutputResponseFieldName](../models/outputresponsefieldname.md)                                         | :heavy_check_mark:                                                                                             | Name of the metadata field.                                                                                    |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |