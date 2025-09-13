import supabase from '../lib/supabase'

export async function getPortfolio() {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')

  if (error) {
    console.error("Error fetching portfolio:", error.message)
    return []
  }
  return data
}
