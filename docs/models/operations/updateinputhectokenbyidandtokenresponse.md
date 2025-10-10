# UpdateInputHecTokenByIdAndTokenResponse

a list of InputSplunkHec objects

## Example Usage

```typescript
import { UpdateInputHecTokenByIdAndTokenResponse } from "cribl-control-plane/models/operations";

let value: UpdateInputHecTokenByIdAndTokenResponse = {
  count: 62851,
  items: [
    {
      id: "<id>",
      type: "splunk_hec",
      pipeline: "<value>",
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        pqControls: {},
      },
      port: 3164.66,
      authTokens: [
        {
          tokenSecret: "<value>",
          token: "<value>",
          description: "seemingly yogurt gee yawningly meander zowie",
          allowedIndexesAtToken: [
            "<value 1>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        rejectUnauthorized: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      enableHealthCheck: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      description: "ick likewise yowza indeed wherever cake",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | number of items present in the items array                |
| `items`                                                   | [models.InputSplunkHec](../../models/inputsplunkhec.md)[] | :heavy_minus_sign:                                        | N/A                                                       |