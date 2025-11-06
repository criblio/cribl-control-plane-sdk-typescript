# CountedListInputSplunkHec

## Example Usage

```typescript
import { CountedListInputSplunkHec } from "cribl-control-plane/models";

let value: CountedListInputSplunkHec = {
  count: 628086,
  items: [
    {
      id: "<id>",
      type: "splunk_hec",
      pipeline: "<value>",
      environment: "<value>",
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
        pqControls: {},
      },
      port: 8976.41,
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
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      description:
        "optimistically mechanically fooey old-fashioned that pfft tail indeed zowie mammoth",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.InputSplunkHec](../models/inputsplunkhec.md)[] | :heavy_minus_sign:                                     | N/A                                                    |