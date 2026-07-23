# LabelFields2

## Example Usage

```typescript
import { LabelFields2 } from "cribl-control-plane/models";

let value: LabelFields2 = {
  mode: "list",
  fields: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mode`                                                                                       | [models.PipelineFunctionMetricsExportMode2](../models/pipelinefunctionmetricsexportmode2.md) | :heavy_check_mark:                                                                           | Discriminator value.                                                                         |
| `fields`                                                                                     | [models.NameFieldType](../models/namefieldtype.md)[]                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |