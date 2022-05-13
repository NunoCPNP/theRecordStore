import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ sample: process.env.FEATURE_SAMPLE === 'true' })
}
