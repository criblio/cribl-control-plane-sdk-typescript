# CountedInputSplunkHec

## Example Usage

```typescript
import { CountedInputSplunkHec } from "cribl-control-plane/models";

let value: CountedInputSplunkHec = {
  count: 389746,
  items: [
    {
      id: "<id>",
      type: "splunk_hec",
      pipeline: "<value>",
      environment: "<value>",
      streamtags: [
        "<value 1>",
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
      port: 9923.38,
      authTokens: [
        {
          tokenSecret: "<value>",
          token: "<value>",
          description: "throbbing sting sore",
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.1",
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
        "<value 2>",
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      description: "for ah forecast unwritten",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.InputSplunkHec](../models/inputsplunkhec.md)[] | :heavy_minus_sign:                                     | N/A                                                    |