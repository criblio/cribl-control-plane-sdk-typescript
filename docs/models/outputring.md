# OutputRing

## Example Usage

```typescript
import { OutputRing } from "cribl-control-plane/models";

let value: OutputRing = {
  id: "<id>",
  type: "ring",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  format: "raw",
  partitionExpr: "<value>",
  maxDataSize: "<value>",
  maxDataTime: "<value>",
  compress: "gzip",
  destPath: "<value>",
  onBackpressure: "drop",
  description: "absent fisherman likewise notwithstanding rule likewise",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Unique ID for this output                                                                                                        |
| `type`                                                                                                                           | *"ring"*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `pipeline`                                                                                                                       | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Pipeline to process data before sending out to this output                                                                       |
| `systemFields`                                                                                                                   | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Fields to automatically add to events, such as cribl_pipe. Supports wildcards.                                                   |
| `environment`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                             |
| `streamtags`                                                                                                                     | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Tags for filtering and grouping in @{product}                                                                                    |
| `format`                                                                                                                         | [models.OutputRingDataFormat](../models/outputringdataformat.md)                                                                 | :heavy_minus_sign:                                                                                                               | Format of the output data.                                                                                                       |
| `partitionExpr`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | JS expression to define how files are partitioned and organized. If left blank, Cribl Stream will fallback on event.__partition. |
| `maxDataSize`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Maximum disk space allowed to be consumed (examples: 420MB, 4GB). When limit is reached, older data will be deleted.             |
| `maxDataTime`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Maximum amount of time to retain data (examples: 2h, 4d). When limit is reached, older data will be deleted.                     |
| `compress`                                                                                                                       | [models.DataCompressionFormatOptionsPersistence](../models/datacompressionformatoptionspersistence.md)                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `destPath`                                                                                                                       | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Path to use to write metrics. Defaults to $CRIBL_HOME/state/<id>                                                                 |
| `onBackpressure`                                                                                                                 | [models.BackpressureBehaviorOptions1](../models/backpressurebehavioroptions1.md)                                                 | :heavy_minus_sign:                                                                                                               | How to handle events when all receivers are exerting backpressure                                                                |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |