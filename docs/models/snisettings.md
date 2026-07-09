# SniSettings

## Example Usage

```typescript
import { SniSettings } from "cribl-control-plane/models";

let value: SniSettings = {
  disableSNIRouting: true,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `disableSNIRouting`                                                                                | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | If <code>true</code>, disable Server Name Indication (SNI) routing. Otherwise, <code>false</code>. |