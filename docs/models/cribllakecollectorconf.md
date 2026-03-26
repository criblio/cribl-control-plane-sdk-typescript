# CriblLakeCollectorConf

## Example Usage

```typescript
import { CriblLakeCollectorConf } from "cribl-control-plane/models";

let value: CriblLakeCollectorConf = {
  dataset: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataset`                                                                                                                                                                                   | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | Lake dataset to collect data from.                                                                                                                                                          |
| `templateDataset`                                                                                                                                                                           | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | Binds 'dataset' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'dataset' at runtime. |