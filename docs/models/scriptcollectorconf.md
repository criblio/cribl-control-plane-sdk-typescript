# ScriptCollectorConf

## Example Usage

```typescript
import { ScriptCollectorConf } from "cribl-control-plane/models";

let value: ScriptCollectorConf = {
  discoverScript: "<value>",
  collectScript: "<value>",
  envVars: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `discoverScript`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Script to discover what to collect. Should output one task per line in stdout.                                    |
| `collectScript`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Script to run to perform data collections. Task passed in as $CRIBL_COLLECT_ARG. Should output results to stdout. |
| `shell`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Shell to use to execute scripts.                                                                                  |
| `envVars`                                                                                                         | [models.EnvVar](../models/envvar.md)[]                                                                            | :heavy_minus_sign:                                                                                                | Environment variables to expose to the discover and collect scripts.                                              |