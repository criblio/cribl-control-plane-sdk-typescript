# UpdateInputSystemByPackAndIdRequest

## Example Usage

```typescript
import { UpdateInputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  input: {
    id: "<id>",
    type: "system_state",
    disabled: true,
    pipeline: "<value>",
    sendToRoutes: false,
    environment: "<value>",
    pqEnabled: true,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 357.77,
      commitFrequency: 1717.96,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/etc/namedb",
      compress: "none",
      pqControls: {},
    },
    interval: 9296.22,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectors: {
      hostsfile: {
        enable: true,
      },
      interfaces: {
        enable: true,
      },
      disk: {
        enable: false,
      },
      metadata: {
        enable: true,
      },
      routes: {
        enable: false,
      },
      dns: {
        enable: true,
      },
      user: {
        enable: false,
      },
      firewall: {
        enable: true,
      },
      services: {
        enable: false,
      },
      ports: {
        enable: false,
      },
      loginUsers: {
        enable: true,
      },
    },
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    disableNativeModule: true,
    disableNativeLastLogModule: true,
    description:
      "vivaciously considering gosh so in unlearn appreciate opposite oh up",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `pack`                                       | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Pack to update.   |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |