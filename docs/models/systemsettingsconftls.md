# SystemSettingsConfTls

## Example Usage

```typescript
import { SystemSettingsConfTls } from "cribl-control-plane/models";

let value: SystemSettingsConfTls = {
  defaultCipherList: "<value>",
  defaultEcdhCurve: "<value>",
  maxVersion: "<value>",
  minVersion: "<value>",
  rejectUnauthorized: true,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `defaultCipherList`  | *string*             | :heavy_check_mark:   | N/A                  |
| `defaultEcdhCurve`   | *string*             | :heavy_check_mark:   | N/A                  |
| `maxVersion`         | *string*             | :heavy_check_mark:   | N/A                  |
| `minVersion`         | *string*             | :heavy_check_mark:   | N/A                  |
| `rejectUnauthorized` | *boolean*            | :heavy_check_mark:   | N/A                  |