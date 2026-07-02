# BackupsSettings

## Example Usage

```typescript
import { BackupsSettings } from "cribl-control-plane/models";

let value: BackupsSettings = {
  backupPersistence: "<value>",
  backupsDirectory: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `backupPersistence`                                                              | *string*                                                                         | :heavy_check_mark:                                                               | How long to retain backups. Value is a duration string such as <code>24h</code>. |
| `backupsDirectory`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | Filesystem path where configuration backups are stored.                          |