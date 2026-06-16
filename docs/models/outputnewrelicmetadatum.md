# OutputNewrelicMetadatum

## Example Usage

```typescript
import { OutputNewrelicMetadatum } from "cribl-control-plane/models";

let value: OutputNewrelicMetadatum = {
  name: "service",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [models.OutputNewrelicFieldName](../models/outputnewrelicfieldname.md)                                         | :heavy_check_mark:                                                                                             | Name of the metadata field.                                                                                    |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |