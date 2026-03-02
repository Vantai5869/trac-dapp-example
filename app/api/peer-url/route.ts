export const runtime = 'nodejs';

import { getUpstreamConfig } from '@/lib/upstream';

export async function GET() {
  const { protocol, host, port } = getUpstreamConfig();
  const isDefaultPort = (protocol === 'https' && port === 443) || (protocol === 'http' && port === 80);
  const peerUrl = isDefaultPort ? `${protocol}://${host}` : `${protocol}://${host}:${port}`;
  return Response.json({ peerUrl });
}
