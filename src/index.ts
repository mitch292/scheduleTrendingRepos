import { triggerEvent } from './handler'

addEventListener('scheduled', (event) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
  // @ts-ignore cloudflare event has waitUntil available
  event.waitUntil(triggerEvent())
})
