export const initMocks = async () => {
  if (typeof window === "undefined") {
    const { server } = await import("@/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@/mocks/browers");
    worker.start();
  }
};

//initMocks();
