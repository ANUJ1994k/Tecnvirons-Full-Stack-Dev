const supabase = require('../db/supabaseClient');

exports.getProducts = async ({ page = 1, limit = 50, search }) => {
  const query = supabase.from('products').select('id, name, category, price').range((page-1)*limit, page*limit-1);
  if (search) query.ilike('name', `%${search}%`);
  const { data, error } = await query;
  if (error) throw error;
  return data;
};

exports.getProductById = async (id) => {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};