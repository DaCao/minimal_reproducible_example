// Get the machine info that identifies the current host running this code;
export const getMachineInfo = () => {
  const machineInfo = {
    // The machine's hostname;
    hostname: "acme",
    // The machine's OS uptime;
    uptime: 123,
    // The machine's total memory in MegaBytes;
    totalMemOfContainerInMB: 12345,
    // the machine's number of CPUs;
    numCPUs: 4,
  };
  return machineInfo;
};
