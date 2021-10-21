import { PROCESS_REPOS_URL } from './config'
export const triggerEvent = async (): Promise<void> => {
  try {
    const res = await fetch(PROCESS_REPOS_URL, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
        // @ts-ignore This value is available via cloudflare
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
      // @ts-ignore This value is available via cloudflare
      await TRENDING_REPOS_FETCH.put(`${(new Date).toISOString()}::res`, res.status)
  } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
      // @ts-ignore This value is available via cloudflare
      await TRENDING_REPOS_FETCH.put(`${(new Date).toISOString()}::err`, `${error.status}: ${error.message}`)
  }
}
