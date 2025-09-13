import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // service role key for secure server access
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('portfolio').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { title, description, media_url, type } = req.body;
    const { data, error } = await supabase
      .from('portfolio')
      .insert([{ title, description, media_url, type }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
