# ProxyTypeSystemSettingsConf

HTTP proxy configuration for outbound connections.

## Example Usage

```typescript
import { ProxyTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: ProxyTypeSystemSettingsConf = {
  useEnvVars: true,
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `useEnvVars`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | If <code>true</code>, use proxy settings from environment variables (<code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code>, <code>NO_PROXY</code>). Otherwise, <code>false</code>. |