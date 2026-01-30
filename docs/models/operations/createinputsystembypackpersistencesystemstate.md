# CreateInputSystemByPackPersistenceSystemState

## Example Usage

```typescript
import { CreateInputSystemByPackPersistenceSystemState } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackPersistenceSystemState = {
  enable: false,
  timeWindow: "<value>",
  maxDataSize: "<value>",
  maxDataTime: "<value>",
  compress: "none",
  destPath: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enable`                                                                                                             | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Spool metrics to disk for Cribl Edge and Search                                                                      |
| `timeWindow`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Time span for each file bucket                                                                                       |
| `maxDataSize`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Maximum disk space allowed to be consumed (examples: 420MB, 4GB). When limit is reached, older data will be deleted. |
| `maxDataTime`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Maximum amount of time to retain data (examples: 2h, 4d). When limit is reached, older data will be deleted.         |
| `compress`                                                                                                           | [models.DataCompressionFormatOptionsPersistence](../../models/datacompressionformatoptionspersistence.md)            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `destPath`                                                                                                           | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Path to use to write metrics. Defaults to $CRIBL_HOME/state/system_state                                             |