# Collectors3

## Example Usage

```typescript
import { Collectors3 } from "cribl-control-plane/models";

let value: Collectors3 = {
  hostsfile: {},
  interfaces: {},
  disk: {},
  metadata: {},
  routes: {},
  dns: {},
  user: {},
  firewall: {},
  services: {},
  ports: {},
  loginUsers: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hostsfile`                                                              | [models.HostsFile3](../models/hostsfile3.md)                             | :heavy_minus_sign:                                                       | Creates events based on entries collected from the hosts file            |
| `interfaces`                                                             | [models.Interfaces3](../models/interfaces3.md)                           | :heavy_minus_sign:                                                       | Creates events for each of the host’s network interfaces                 |
| `disk`                                                                   | [models.DisksAndFileSystems3](../models/disksandfilesystems3.md)         | :heavy_minus_sign:                                                       | Creates events for physical disks, partitions, and file systems          |
| `metadata`                                                               | [models.HostInfo3](../models/hostinfo3.md)                               | :heavy_minus_sign:                                                       | Creates events based on the host system’s current state                  |
| `routes`                                                                 | [models.InputSystemStateRoutes3](../models/inputsystemstateroutes3.md)   | :heavy_minus_sign:                                                       | Creates events based on entries collected from the host’s network routes |
| `dns`                                                                    | [models.Dns3](../models/dns3.md)                                         | :heavy_minus_sign:                                                       | Creates events for DNS resolvers and search entries                      |
| `user`                                                                   | [models.UsersAndGroups3](../models/usersandgroups3.md)                   | :heavy_minus_sign:                                                       | Creates events for local users and groups                                |
| `firewall`                                                               | [models.Firewall3](../models/firewall3.md)                               | :heavy_minus_sign:                                                       | Creates events for Firewall rules entries                                |
| `services`                                                               | [models.Services3](../models/services3.md)                               | :heavy_minus_sign:                                                       | Creates events from the list of services                                 |
| `ports`                                                                  | [models.ListeningPorts3](../models/listeningports3.md)                   | :heavy_minus_sign:                                                       | Creates events from list of listening ports                              |
| `loginUsers`                                                             | [models.LoggedInUsers3](../models/loggedinusers3.md)                     | :heavy_minus_sign:                                                       | Creates events from list of logged-in users                              |