# LabelFields1

## Example Usage

```typescript
import { LabelFields1 } from "cribl-control-plane/models";

let value: LabelFields1 = {
  mode: "object",
  field: {
    raw: "<value>",
    path: [
      9530.68,
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mode`                                                                                       | [models.PipelineFunctionMetricsExportMode1](../models/pipelinefunctionmetricsexportmode1.md) | :heavy_check_mark:                                                                           | Discriminator value.                                                                         |
| `field`                                                                                      | [models.NameFieldType](../models/namefieldtype.md)                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |