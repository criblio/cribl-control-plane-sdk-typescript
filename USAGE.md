<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await criblControlPlane.auth.tokens.get({
    password: "6j50J9421x29IhO",
    username: "Lilly_Weissnat",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->