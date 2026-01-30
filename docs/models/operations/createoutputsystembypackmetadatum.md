# CreateOutputSystemByPackMetadatum

## Example Usage

```typescript
import { CreateOutputSystemByPackMetadatum } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackMetadatum = {
  name: "service",
  value: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [operations.CreateOutputSystemByPackFieldName](../../models/operations/createoutputsystembypackfieldname.md)   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.) |