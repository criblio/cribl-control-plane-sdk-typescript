<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.lakeDatasets.create({
    lakeId: "<id>",
    criblLakeDataset: {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
      ],
      bucketName: "<value>",
      cacheConnection: {
        acceleratedFields: [
          "<value 1>",
          "<value 2>",
        ],
        backfillStatus: "pending",
        cacheRef: "<value>",
        createdAt: 7795.06,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 1466.58,
      },
      deletionStartedAt: 8310.58,
      description:
        "pleased toothbrush long brush smooth swiftly rightfully phooey chapel",
      format: "ddss",
      httpDAUsed: true,
      id: "<id>",
      retentionPeriodInDays: 456.37,
      searchConfig: {
        datatypes: [
          "<value 1>",
        ],
        metadata: {
          earliest: "<value>",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
            "<value 2>",
          ],
          latestRunInfo: {
            earliestScannedTime: 4334.7,
            finishedAt: 6811.22,
            latestScannedTime: 5303.3,
            objectCount: 9489.04,
          },
          scanMode: "detailed",
        },
      },
      storageLocationId: "<id>",
      viewName: "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->