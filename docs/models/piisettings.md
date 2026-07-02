# PiiSettings

## Example Usage

```typescript
import { PiiSettings } from "cribl-control-plane/models";

let value: PiiSettings = {
  enablePiiDetection: true,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `enablePiiDetection`                                                                                                  | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | If <code>true</code>, enable PII detection for events processed by the Cribl instance. Otherwise, <code>false</code>. |