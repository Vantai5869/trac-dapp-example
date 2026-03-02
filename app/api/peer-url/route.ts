export const runtime = 'nodejs';

import { getUpstreamConfig } from '@/lib/upstream';

export async function GET() {
  const { protocol, host, port } = getUpstreamConfig();
  const peerUrl = `${protocol}://${host}:${port}`;
  return Response.json({ peerUrl });
}
