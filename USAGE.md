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
  const result = await criblControlPlane.lake.createCriblLakeDatasetByLakeId({
    lakeId: "<id>",
    criblLakeDataset: {
      id: "<id>",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->