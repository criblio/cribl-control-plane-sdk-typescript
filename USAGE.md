<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await criblControlPlane.auth.login({
    username: "Nikko.Connelly",
    password: "Ljp4BunfMR9hNyM",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->