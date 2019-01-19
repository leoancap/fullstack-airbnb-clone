import * as Redis from "ioredis"

export const redis =
  process.env.NODE_ENV === "production"
    ? new Redis(
        "redis://h:pdd0d4a55c1d6aa08a791220fa6b16125960f2676f24a39813c73d101963a302b@ec2-18-202-187-28.eu-west-1.compute.amazonaws.com:32739"
      )
    : new Redis(
        "redis://h:pdd0d4a55c1d6aa08a791220fa6b16125960f2676f24a39813c73d101963a302b@ec2-18-202-187-28.eu-west-1.compute.amazonaws.com:32739"
      )
