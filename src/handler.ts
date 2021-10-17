import { PROCESS_REPOS_URL } from './config'
export const triggerEvent = async (): Promise<void> => {
  await fetch(PROCESS_REPOS_URL, {
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
      // @ts-ignore This value is available via cloudflare
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
}
